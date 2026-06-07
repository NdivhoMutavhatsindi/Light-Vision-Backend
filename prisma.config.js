import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "./.env") });

export default {
  schema: "./prisma/schema.prisma",

  migrations: {
    path: "./prisma/migrations",
  },

  datasource: {
    url: process.env.DATABASE_URL,
  },
};
