import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL || {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: process.env.DB_DIALECT || "postgres",
    logging: false,
  }
);

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 3000; // 3 seconds

export const connectDB = async () => {
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    try {
      await sequelize.authenticate();
      console.log("PostgreSQL connected successfully✅");
      await sequelize.sync( {force: false});
      console.log("🔄 Models synchronized");
      return;
    } catch (error) {
      attempts++;
      console.error(
        `DB connection failed (attempt ${attempts}): ${error.message}❌`
      );

      if (attempts >= MAX_RETRIES) {
        console.error("Maximum retry attempts reached. Exiting...🛑");
        process.exit(1);
      }

      console.log(`Retrying in ${RETRY_DELAY_MS / 1000} seconds...⏳`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    }
  }
};

export { sequelize, DataTypes };
