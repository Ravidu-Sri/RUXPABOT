const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID, 
ALIVE_IMG: process.env.AILVE_IMG || "https://telegra.ph/file/4d69c1e11007840a8c048.jpg",   
AILVE_MSG: process.env.AILVE_MSG || "Holle",
};
