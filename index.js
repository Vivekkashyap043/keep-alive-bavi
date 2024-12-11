const axios = require('axios');

module.exports = async function (req, res) {
    try {
        // Your Render app URL (change this if your URL changes)
        const url = 'https://tic-toc-toe-sj1n.onrender.com/keep-alive';

        // Make a GET request to the keep-alive endpoint
        const response = await axios.get(url);

        // Log the server's response (optional for debugging)
        console.log('Ping Response:', response.data);

        res.send({ status: 'ok', message: 'Ping sent to keep server alive' });
    } catch (error) {
        console.error('Error pinging server:', error);
        res.send({ status: 'error', message: 'Failed to ping server' });
    }
};
