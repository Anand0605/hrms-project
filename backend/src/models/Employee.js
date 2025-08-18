import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    department: { type: String, default: 'General' },
    position: { type: String, default: 'Associate' },
    salary: { type: Number, default: 0 },
    documents: {
      photo: String,
      resume: String,
      idCard: String,
    },
    joinDate: { type: Date, default: Date.now },
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

export default mongoose.model('Employee', employeeSchema);