const Discord = require("discord.js");

const client = new Discord.Client();


client.on("ready", () => {
    console.log("まめのき🤔");
    client.user.setActivity("Thinking Mamenoki Online");
});

client.on("message", message => {
    if (message.author.bot) return;

    const mamenoki = client.users.get("491418194762792961");
    const mame_channel = client.channels.get("597206326602498068")

    if (message.author.id === mamenoki.id) {

        message.react("🤔");

        if (message.content.match(/(::|--)[a-z]/)) return;

        mame_channel.send(message.cleanContent, {
            embed: {
                fields: [
                    {
                        name: "チャンネル",
                        value: `<#${message.channel.id}>`,
                        inline: true,
                    },
                    {
                        name: "リンク",
                        value: `[まめのきさんの発言はこちら](${message.url})`,
                        inline: true,
                    }
                ],
                timestamp: new Date(),
            },
        });
    }

    if (message.isMemberMentioned(mamenoki)) {
        const value = mame_channel.name.split("mamenokiログ-")[1];
        const num = Number(value) + 1;
        mame_channel.setName(`mamenokiログ-${num}`);
    }
});

client.login("NTk4MTIyNzY5MjU0ODQyMzc4.XSWR_w.hooWrFyYQo03ZpTwpcirzadrbVA");
