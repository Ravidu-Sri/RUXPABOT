const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "lmk",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 
const axios = require('axios');

// Your API key
const apiKey = 'your-api-key';

// Torrent URL
const torrentUrl = 'https://yts.mx/torrent/download/C97BFF66EC7E83911F21BB4B7F5B7E1804BA30FE';

// Base API URL
const baseApiUrl = 'https://apicine-torrent-api.vercel.app';
 
async function extractTorrentToMp4(torrentUrl, apiKey) {

    const start = new Date()

    try {
        // Step 1: Start the extraction process
        const extractResponse = await axios.get(`${baseApiUrl}/extract`, {
            params: {
                torrent: torrentUrl,
                apikey: apiKey
            }
        });

        const { requestId } = extractResponse.data;
        console.log(`Extraction initiated. Request ID: ${requestId}`);

        // Step 2: Check the status in a loop until taskDone is true
        let taskDone = false;
        let extractStatusResponse;

        do {
            console.log('Checking extraction status...');
            extractStatusResponse = await axios.get(`${baseApiUrl}/extract-status`, {
                params: {
                    requestId,
                    apikey: apiKey
                }
            });

            taskDone = extractStatusResponse.data.taskDone;

            // Wait for 5 seconds before checking again
            if (!taskDone) {
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        } while (!taskDone);

        console.log('Extraction completed!');

        // Step 3: Once taskDone is true, fetch the MP4 link
        const extractedDataResponse = await axios.get(`${baseApiUrl}/extracted-data`, {
            params: {
                requestId,
                apikey: apiKey
            }
        });

        const { url } = extractedDataResponse.data;
        console.log(`MP4 File URL: ${url}`);

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }

    const end = new Date()
    console.log(`Execution time: ${(end.getTime() - start.getTime()) / 1000} seconds`)
}
 
extractTorrentToMp4(torrentUrl, apiKey);
 
}catch(e){
console.log(e)
reply(`${e}`)
}
})
