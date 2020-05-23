const Embed = require("../../util/embed");
const Colour = require("../../util/color");

module.exports = {
    name: "wisp",
    description: "⚠ Only bot developer can use this ⚠",
    aliases: ["butt"],
    cooldown: 0,
    execute(client, msg, args) {
        if(msg.author.id === '344035924222672897'){
                msg.channel.send("Wisp butt go boing boing")
        }
    }
}