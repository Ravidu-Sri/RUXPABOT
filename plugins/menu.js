const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "bot features menu",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}   

let madeMenu = `👋 *Hi ${pushname}*

> ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs 👨‍💻|⬇️

 ${menu.download}
 
> ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs 💙|🧸

 ${menu.main}
 
> ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs 📢|🦊

 ${menu.group}
 
> ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs 👩‍💻|🔊

 ${menu.owner}
 
> ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs 👋|💙

 ${menu.convert}
 
> sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs 🔎|👩‍💻

 ${menu.search}

👨‍💻 *CRATOR BY PODDA MODᴢ* 👨‍💻
`
await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/4d69c1e11007840a8c048.jpg"},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})    
