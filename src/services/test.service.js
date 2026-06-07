import {testDatabaseConnection} from '../repositories/test.repository.js';

export const checkDatabaseHealth = async (req, res) => {
    const result = await testDatabaseConnection();

    return {
        success: true,
        message: "Database connection successful",
        data: result
    };
};