


// backend/index.js
const express = require('express');
const cors = require('cors');
const { sql } = require('@vercel/postgres');
const { educationHistory, skills, projects } = require('./data'); // opsional kalau pakai data lokal juga

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ===== API pakai database
app.get('/api/education', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data pendidikan' });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM skills;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data skill' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM projects;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data proyek' });
  }
});

// ===== API pakai data lokal (jika PostgreSQL belum dipakai)
app.get('/api/fake/education', (req, res) => res.json(educationHistory));
app.get('/api/fake/skills', (req, res) => res.json(skills));
app.get('/api/fake/projects', (req, res) => res.json(projects));

// Untuk Vercel: jangan pakai app.listen
module.exports = (req, res) => {
  app(req, res);
};