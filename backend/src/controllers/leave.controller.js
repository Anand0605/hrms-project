import Leave from "../models/leave.model.js";

// ✅ Apply for leave
export const applyLeave = async (req, res) => {
  try {
    const { employeeId, fromDate, toDate, reason } = req.body;
    const leave = new Leave({
      employeeId,
      fromDate,
      toDate,
      reason,
      status: "Pending",
    });
    await leave.save();
    res.status(201).json({ message: "Leave applied successfully", leave });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all leaves of an employee
export const getLeaves = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const leaves = await Leave.find({ employeeId }).sort({ createdAt: -1 });
    res.json({ leaves });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Approve/Reject leave
export const approveLeave = async (req, res) => {
  try {
    const { id } = req.params; // leaveId
    const { status } = req.body; // "Approved" / "Rejected"

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const leave = await Leave.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!leave) {
      return res.status(404).json({ error: "Leave not found" });
    }

    res.json({ message: "Leave status updated successfully", leave });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
