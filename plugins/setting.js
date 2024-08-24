const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "setting",
    desc: "bot setting",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();  

let madeSetting = `👋 *Hi ${pushname}*

┌⁠─────────────────
└─────────────────

👨‍💻 *CRATOR BY PODDA MODᴢ* 👨‍💻
`
await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/0aa53d084024368c3bf14.jpg"},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})    
