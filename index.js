const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log("まめのき🤔");
    client.user.setActivity("Thinking Mamenoki Online")
});

client.on("message", message => {
    if(message.author.id === "491418194762792961") message.react("🤔");
});

client.login(process.env.TOKEN);