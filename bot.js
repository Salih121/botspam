const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523664383965134858")
setInterval(function() {
channel.send(`#daily`);
}, 30)
})

client.login("NTIzNjU4NTk2ODIzNzI4MTM3.Dvc3YA.cBib6a_YgWv3VIiu3vzfBQD1RGM");
