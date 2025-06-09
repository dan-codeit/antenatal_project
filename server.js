import dotenv from "dotenv";
import http from "http";

import app from "./app.js";
import { connectDB } from "./config/db.js";
import { setupSocket, getIO } from "./websocket/socket.js";

//import { startFundReleaseCron } from "./cronJobs/fundReleaseJob.js";

dotenv.config();

const PORT = process.env.PORT || 3002;
const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 3000;

const startServer = async () => {
  await connectDB();

  // Create HTTP server from app
  const server = http.createServer(app);

  // Initialize socket with the HTTP server
  setupSocket(server);

  try {
    // Check if socket.io is ready
    await getIO();
    console.log("websocket successfully✅");
  } catch (err) {
    console.error("socket:❌", err.message);
    process.exit(1);
  }

  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    try {
      // Store io instance on app for access in routes/middlewares if needed
      getIO();

      // Start server listening
      server.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
        //startFundReleaseCron(); // Start cron job after server starts
      });

      break;
    } catch (err) {
      attempts++;
      console.error(`Server failed (attempt ${attempts}): ${err.message}❌`);

      if (attempts >= MAX_RETRIES) {
        console.error("Max retry limit reached. Server not started.🛑");
        process.exit(1);
      }

      console.log(
        `Retrying server start in ${RETRY_DELAY_MS / 1000} seconds...⏳`
      );
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    }
  }
};

startServer();
