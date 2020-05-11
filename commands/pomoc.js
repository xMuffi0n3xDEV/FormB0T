const Discord = require('discord.js')
const client = new Discord.Client();

module.exports.run = async(client, message, args) =>{

    const helpEmbed = new Discord.RichEmbed()
    .setColor('#ffae00')
    .setAuthor(`FormB0T`, client.user.avatarURL)
    .setTitle(`Wszystkie komendy:`)
    .addField('Główne:','^rek.op @Nick >> Informuje podanego użytkownika, że sprawdzenie jego podania się opóźni.\n^rek.czk @Nick >>Informuje podanego użytkownika, że jego podanie zaraz zostanie spawdzone\n^rek.przyj @Nick >> Informuje podanego użytkownika, że jego podanie zostało zaakceptowane\n^rek.odrz @Nick >> Informuje podanego użytkownika, że jego podanie zostało odrzucone\n ^invite >> Pokazuje zaproszenie do bota')
    .setFooter(`FormB0T`, client.user.avatarURL)
    message.channel.send(helpEmbed)
}

module.exports.help = {
    name: "pomoc"
}