import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!, {
      // Other options can be added here if needed
    });

    const connection = mongoose.connection;

    connection.once("open", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      process.exit(1); // Exit the application with an error code
    });
  } catch (error) {
    console.log("Something went wrong while connecting to MongoDB");
    console.error(error);
  }
}
