module.exports = (client, message) => {
    message.channel.send({
        embed: {
            author: {
                name: client.user.username,
                url: "https://github.com/mouse484/tmo-bot",
                icon_url: client.user.avatarURL,
            },
            title: "まめのきさんにティンキングをつけログを取るBotです",
            description: "`mamenokiログ`というチャンネルを作成することで誰でもログを取得出来ます。",
            fields: [
                {
                    name: "開発場所",
                    value: "[GitHub](https://github.com/mouse484/tmo-bot)",
                    inline: true,
                },
                {
                    name: "招待",
                    value: "[URL](https://discordapp.com/oauth2/authorize?client_id=598122769254842378&scope=bot)",
                    inline: true,
                }
            ],
        }
    });
}