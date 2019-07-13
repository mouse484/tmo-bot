const Discord = require("discord.js");

const client = new Discord.Client();

const log = require("./log.js");
const help = require("./help.js");
const thinking = require("./thinking.js");


client.on("ready", () => {
    console.log("まめのき🤔");
});

client.on("message", message => {
    try {
        if (message.author.bot) return;

        const mamenoki = client.users.get("491418194762792961");
        const mame_channel = client.channels.get("597206326602498068");

        if (message.author.id === mamenoki.id) {

            client.user.setActivity(`mame:help | ${client.guilds.size} Server`);

            thinking(client, message);

            if (message.content.match(/(::|--)[a-z]/)) return;

            log(client, message, mame_channel);
        }


        if (message.isMemberMentioned(mamenoki)) {
            const mame_mention = client.channels.get("599118213116067871");
            const value = mame_mention.name.split("mamenokiメンション-")[1];
            const num = Number(value) + 1;
            mame_mention.setName(`mamenokiメンション-${num}`);
        }

        if (message.content === "mame:help") {
            help(client, message);
        }
    } catch (err) {
        console.error(err);
    }
});

client.login(process.env.TOKEN);
