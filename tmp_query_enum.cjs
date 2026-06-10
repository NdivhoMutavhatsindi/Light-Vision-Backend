const { Client } = require('pg');

(async () => {
  try {
    const conn = process.env.DATABASE_URL;
    if (!conn) {
      console.error('DATABASE_URL not set');
      process.exit(1);
    }

    const client = new Client({ connectionString: conn });
    await client.connect();

    const res = await client.query(
      `SELECT t.typname, e.enumlabel
       FROM pg_type t
       JOIN pg_enum e ON t.oid = e.enumtypid
       WHERE t.typname ILIKE '%property%'
       ORDER BY t.typname, e.enumsortorder;`
    );

    console.log(JSON.stringify(res.rows, null, 2));
    await client.end();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
