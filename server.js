// Entry point for the application
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Import routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
