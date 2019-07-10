const Discord = require("discord.js");

const client = new Discord.Client();

const setting = {
    target_id: "491418194762792961",
    mame_channel_id: "597206326602498068",
}

client.on("ready", () => {
    console.log("まめのき🤔");
    client.user.setActivity("Thinking Mamenoki Online");
});

client.on("message", message => {
    if (message.author.id === setting.target_id) {

        message.react("🤔");

        if (message.content.match(/(::|--)[a-z]/)) return;

        client.channels.get(setting.mame_channel_id)
            .send(message.cleanContent, {
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
});

client.login(process.env.TOKEN);
