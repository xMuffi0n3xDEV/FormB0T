const Discord = require('discord.js')
const client = new Discord.Client()

module.exports.run = async(client, message, args)=>{
    let invite = new Discord.RichEmbed()
    .setColor('#ffae00')
    .setDescription('Dodaj bota klikając w [ten link](https://discord.com/api/oauth2/authorize?client_id=667811006231347240&permissions=7168&redirect_uri=http%3A%2F%2Fbot.rxpvp.pl%2Fdodano-pomyslnie&scope=bot)');
    message.channel.send(invite)
}

module.exports.help = {
    name: "invite"
}