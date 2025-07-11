// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS properly
app.use(cors({
  origin: 'http://localhost:5173', // Your Vue dev server
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Middleware
app.use(express.json());

// API Routes
app.get('/api/education', (req, res) => {
  try {
    res.json(educationHistory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch education history' });
  }
});

app.get('/api/skills', (req, res) => {
  try {
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

app.get('/api/projects', (req, res) => {
  try {
    // Add filtering capability
    const { category, status } = req.query;
    let filteredProjects = [...projects];
    
    if (category) {
      filteredProjects = filteredProjects.filter(
        project => project.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (status) {
      filteredProjects = filteredProjects.filter(
        project => project.status.toLowerCase() === status.toLowerCase()
      );
    }
    
    res.json(filteredProjects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});

