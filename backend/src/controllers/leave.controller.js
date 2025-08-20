import Leave from "../models/leave.model.js";

// ✅ Apply for leave
export const applyLeave = async (req, res) => {
  try {
    const { employeeId, fromDate, toDate, reason } = req.body;
    const leave = new Leave({ employeeId, fromDate, toDate, reason, status: "Pending" });
    await leave.save();
    res.status(201).json({ message: "Leave applied", leave });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Approve/Reject leave
export const updateLeaveStatus = async (req, res) => {
  try {
    const { leaveId } = req.params;
    const { status } = req.body; // Approved / Rejected
    const leave = await Leave.findByIdAndUpdate(leaveId, { status }, { new: true });
    res.json({ message: "Leave status updated", leave });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
