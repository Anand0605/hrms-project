import mongoose from 'mongoose';

const payrollSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  month: { type: String, required: true }, // format: 'YYYY-MM'
  baseSalary: { type: Number, default: 0 },
  deductions: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  netPay: { type: Number, default: 0 },
  payslipUrl: { type: String }, // optional: uploaded PDF url
  // add extra fields if needed: tax, allowances, status, approvedBy, etc.
}, { timestamps: true });

// NOTE: If you want unique per month per user, add this index in full file:
// payrollSchema.index({ user: 1, month: 1 }, { unique: true });

export default mongoose.model('Payroll', payrollSchema);