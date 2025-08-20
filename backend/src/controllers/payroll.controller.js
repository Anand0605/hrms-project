import Payroll from "../models/payroll.model.js";

// ✅ Generate payroll
export const generatePayroll = async (req, res) => {
  try {
    const { employeeId, month, salary } = req.body;
    const payroll = new Payroll({ employeeId, month, salary });
    await payroll.save();
    res.status(201).json({ message: "Payroll generated", payroll });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get payroll by employee
export const getPayroll = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const payrolls = await Payroll.find({ employeeId });
    res.json(payrolls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
