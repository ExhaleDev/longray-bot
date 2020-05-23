const Embed = require("../../util/embed");
const Colour = require("../../util/color");

module.exports = {
    name: "status",
    description: "⚠ Only bot developer can use this ⚠",
    aliases: ["change"],
    cooldown: 0,
    execute(client, msg, args) {
        let change = args.join(" ")
        if(msg.author.id === '344035924222672897'){
            if(change){
                client.user.setActivity(`${change}`, { type: "PLAYING" });
                msg.channel.send(`Status changed to: ${change}`)
            }
        }
    }
}