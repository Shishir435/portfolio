import mongoose from "mongoose"

const PortAuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

export const PortAuth =
  mongoose.models.PortAuth || mongoose.model("PortAuth", PortAuthSchema)
