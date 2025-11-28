// server.js

// 1. Import Dependencies
const express = require('express');
const cors = require('cors');

// 2. Create Express App
const app = express();
const port = process.env.PORT || 3000;

// 3. Set up Middleware
// This allows our app to accept and parse JSON data in the request body
app.use(express.json());
// This enables Cross-Origin Resource Sharing (CORS)
app.use(cors());

// 4. Define the API Endpoint
// This endpoint accepts POST requests to the /sum path
app.post('/sum', (req, res) => {
    // Get the 'numbers' array from the request body
    const { numbers } = req.body;

    // --- Input Validation ---
    // Check if 'numbers' is provided and is an array
    if (!numbers || !Array.isArray(numbers)) {
        return res.status(400).json({ error: 'Request body must contain a "numbers" array.' });
    }

    // Check if all items in the array are actually numbers
    if (!numbers.every(num => typeof num === 'number')) {
        return res.status(400).json({ error: 'All items in the "numbers" array must be numbers.' });
    }

    // --- Calculation ---
    // Use the reduce method to sum all numbers in the array
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // --- Send Response ---
    // Send back the calculated sum in a JSON object
    res.json({ sum });
});

// 5. Start the Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});