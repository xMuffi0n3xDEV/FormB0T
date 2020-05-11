const Discord = require("discord.js");


module.exports.run = async (_client, message) => {

    let noPerm = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription('Brak uprawnien!')
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noPerm);

    let pUser = message.guild.member(message.mentions.users.first());

    if(!pUser)return message.channel.send(":bangbang: Błąd Składni :bangbang:\nWymień jednego użytkownika, aby go poinformować, że jego podanie na administratora zostało przyjęte. \n`^rek.przyj [@User]`")

    message.channel.send(":white_check_mark: Sukces! :white_check_mark: \nWiadomość do użytkownika " + pUser.displayName+ " została właśnie teraz dostarczona.")

    let przyjEmbed = new Discord.RichEmbed()
    .setColor("#00FF00")
    .setAuthor("Rekrutacja",message.guild.iconURL)
    .setDescription("Twój formularz rekrutacyjny, został zaakceptowany.\nWkrótce otrzymasz permisję, na serwerze pod tytułem **"+ message.guild.name +"** \n \n**Akcje wykonał:** `"+ message.author.tag + "`")
    .setTimestamp();
    pUser.send(przyjEmbed);


}

module.exports.help = {
    name: "rek.przyj",

}