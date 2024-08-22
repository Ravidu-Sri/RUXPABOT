const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "bot features menu.",
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
> *DOWNLOAD COMMANDS* ⬇️|👻

${menu.download}


> *MAIN COMMANDS* 💙|🧸

${menu.main}


> *GROUP COMMANDS* 📢|🦊

${menu.group}


> *OWNER COMMANDS* 👩‍💻|🔊

${menu.owner}


> *CONVERT COMMANDS* 👋|💙

${menu.convert}


> *SEARCH COMMANDS* 🔎|👩‍💻

${menu.search}


*CREATOR BY PODDA MODz 💔👻*
`
await conn.sendMessage(from,{text:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})    
