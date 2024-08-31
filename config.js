const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KQFRSTwS#7jG_5QPtogH5XvAruxHW6EanUZJcoQKK6g6RcmGL_bg",
MONGODB: process.env.MONGODB || "mongodb://mongo:qNASnSXwwHcKmBZjKVXJBLIkkKEwnoKt@junction.proxy.rlwy.net:11758",
};
