import { PrismaClient } from "./generated/client/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

export { PrismaClient };

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
export const prismaAdapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter: prismaAdapter });
export default prisma;
