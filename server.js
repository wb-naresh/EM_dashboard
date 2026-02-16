const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get energy data
app.get('/api/energy', (req, res) => {
    res.json({ message: 'Getting energy data' });
});

// Endpoint to create alerts
app.post('/api/alerts', (req, res) => {
    const alertData = req.body;
    res.json({ message: 'Alert created', data: alertData });
});

// Endpoint to get analytics
app.get('/api/analytics', (req, res) => {
    res.json({ message: 'Getting analytics' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
