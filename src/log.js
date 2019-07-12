module.exports = (client, message, mame_channel) => {
    const value = mame_channel.name.split("mamenokiログ-")[1];
    const num = Number(value) + 1;
    mame_channel.setName(`mamenokiログ-${num}`);


    const message_option = {
        embed: {
            fields: [
                {
                    name: "サーバー",
                    value: message.guild.name,
                    inline: true,
                },
                {
                    name: "チャンネル",
                    value: `<#${message.channel.id}>`,
                    inline: true,
                },
                {
                    name: "リンク",
                    value: `[まめのきさんの発言はこちら](${message.url})`,
                }
            ],
            timestamp: new Date(),
        }
    };

    if (message.attachments.first()) {
        message_option.file = message.attachments.first().url;
    }

    client.channels.filter(c => c.name.match("mamenokiログ")).forEach((ch) => ch.send(message.cleanContent, message_option));
}