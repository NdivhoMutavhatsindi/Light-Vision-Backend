import { testDatabaseConnection } from "../repositories/test.repository.js";

export const testConnection = async (req, res) => {
  try {
    const result = await testDatabaseConnection();

    const serializedResult = JSON.parse(
      JSON.stringify(result, (_, value) =>
        typeof value === "bigint"
          ? value.toString()
          : value
      )
    );

    res.json({
      success: true,
      database: "Connected",
      result: serializedResult,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};