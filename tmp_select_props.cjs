const { Client } = require('pg');
(async () => {
  try {
    const conn = process.env.DATABASE_URL;
    const client = new Client({ connectionString: conn });
    await client.connect();
    const r = await client.query('SELECT property_id, status FROM properties LIMIT 5;');
    console.log(JSON.stringify(r.rows, null, 2));
    await client.end();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
