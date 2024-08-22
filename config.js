const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID, 
ALIVE_IMG: process.env.AILVE_IMG || "https://telegra.ph/file/0aa53d084024368c3bf14.jpg",   
AILVE_MSG: process.env.AILVE_MSG || "Holle",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",   
};
