import { sql } from '@vercel/postgres';

export async function createContactsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function saveContact(name: string, email: string, message: string) {
  const result = await sql`
    INSERT INTO contacts (name, email, message)
    VALUES (${name}, ${email}, ${message})
    RETURNING id
  `;
  return result.rows[0];
}
