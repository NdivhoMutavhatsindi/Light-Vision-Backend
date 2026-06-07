import prisma from '../config/database.js';

export const testDatabaseConnection = async () => {
    return await prisma.$queryRaw`SELECT 1`;
};