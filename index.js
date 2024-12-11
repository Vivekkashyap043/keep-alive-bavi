const fetch = require('node-fetch');

module.exports = async function (req, res) {
    const serverUrl = "https://tic-toc-toe-sj1n.onrender.com/keep-alive";

    try {
        const response = await fetch(serverUrl);
        const data = await response.json();

        console.log('Ping successful:', data);

        res.json({
            status: 'success',
            message: 'Server pinged successfully',
            data,
        });
    } catch (error) {
        console.error('Ping failed:', error);

        res.json({
            status: 'error',
            message: 'Failed to ping the server',
            error: error.message,
        });
    }
};
