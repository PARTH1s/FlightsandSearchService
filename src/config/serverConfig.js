const dotenv = require('dotenv');
dotenv.config();

// Export PORT from environment or default to 3000
module.exports = {
    PORT: process.env.PORT || 3000,
};
