import mongoose from "mongoose";

export async function connectMongo(uri, dbName) {
  if (!uri) throw new Error("MONGODB_URI is required");

  const options = {
    dbName: dbName || "my_blog",
  };

  try {
    await mongoose.connect(uri, options);
    console.log(`✅ Connected to MongoDB database: ${dbName || "my_blog"}`);
    return mongoose.connection;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}

// Handle connection events
mongoose.connection.on("connected", () => {
  console.log("📊 Mongoose connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("🔌 Mongoose disconnected from MongoDB");
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🛑 MongoDB connection closed due to app termination");
  process.exit(0);
});
