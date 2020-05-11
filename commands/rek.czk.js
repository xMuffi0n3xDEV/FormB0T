const Discord = require("discord.js");


module.exports.run = async (_client, message) => {

    let noPerm = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription('Brak uprawnien!')
    if(message.member.hasPermssion('MANAGE_MESSAGES')) return message.channel.send(noPerm);

    let pUser = message.guild.member(message.mentions.users.first());
    if(!pUser) return message.channel.send(":bangbang: **Błąd Składni** :bangbang:\n Wymień jednego użytkownika, aby go poinformować, że jego podanie zaraz zostanie sprawdzone. \n`^rek.czk [@User]`");

    let czkEmbed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setAuthor("Rekrutacja.", message.guild.iconURL)
    .setDescription("Super! Twój formularz rekrutacyjny zaraz zostanie sprawdzony. Prosimy czekać cierpliwie. \n Akcje wykonał: `"+ message.author.username+"` Na serwerze: **" + message.guild.name+ "**.")
    .setTimestamp();
    pUser.send(czkEmbed);

    message.channel.send(":white_check_mark: Super!\nUżytkownik **"+ pUser.displayName+"** otrzymał wiadomość z informacją, że jego podanie zostanie zaraz sprawdzone.");

}

module.exports.help = {
    name: "rek.czk",

}