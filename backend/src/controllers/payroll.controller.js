import Payroll from "../models/payroll.model.js";

// Generate payroll
export const generatePayroll = async (req, res) => {
  try {
    const { employeeId, month, salary } = req.body;

    if (!employeeId || !month || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const payroll = new Payroll({ employeeId, month, salary });
    await payroll.save();

    res.status(201).json({ message: "Payroll generated successfully", payroll });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get payroll by employee
export const getPayroll = async (req, res) => {
  try {
    const { employeeId } = req.params;

    if (!employeeId) {
      return res.status(400).json({ message: "Employee ID is required" });
    }

    const payrolls = await Payroll.find({ employeeId });

    res.status(200).json(payrolls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
