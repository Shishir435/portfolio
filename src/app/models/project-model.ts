import mongoose from "mongoose";

enum Color {
  Blue = "blue-text-gradient",
  Green = "green-text-gradient",
  Pink = "pink-text-gradient",
}

const color = Object.entries(Color);

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        enum: color,
        required: true,
      },
    },
  ],
  source_code_link: {
    type: String,
    required: true,
  },
  live_demo_link: {
    type: String,
    required: true,
  },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

module.exports = Project;
