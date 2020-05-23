const { Client } = require("discord.js-trio");
const config = require("./src/config");
const client = new Client(config);
const token = "Njc3MDM4NjY5OTE5NTUxNTA4.XnAxMw.u_sBTSBRZCzPELweu83UL60XtPk"


client.login(token);

client.on('ready', ()=> {
    client.user.setActivity('with longray', { type: "PLAYING" });
})
client.on('guildMemberAdd', member => {
    member.guild.channels.get('663788997650153524').send("Welcome " + member + " to our server!"); 
});