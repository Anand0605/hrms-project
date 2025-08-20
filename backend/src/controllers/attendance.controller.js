import Attendance from "../models/attendance.model.js";

// ✅ Mark attendance
export const markAttendance = async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;
    const record = new Attendance({ employeeId, date, status });
    await record.save();
    res.status(201).json({ message: "Attendance marked", record });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get attendance by employee
export const getAttendance = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const records = await Attendance.find({ employeeId });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
