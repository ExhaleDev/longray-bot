const Embed = require("../../util/embed");
const Colour = require("../../util/color");
const { prefix } = require("../../config");

module.exports = {
    name: "gay",
    description: "How gay are you like not gay or fucking gay?",
    aliases: ["gay"],
    usage: `\n${prefix}gay\n`,
    execute(client, msg, args){
        var min=1;
        var max=100;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        msg.channel.send(new Embed(
            "Gay measurement",
            `You are ${random}% gay nice bud`,
            Colour(252, 3, 206),
        ))
    }
}