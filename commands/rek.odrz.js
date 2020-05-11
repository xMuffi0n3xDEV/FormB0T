const Discord = require("discord.js");


module.exports.run = async (_client, message, args) => {
    let noPerm = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription('Brak uprawnien!')
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noPerm);

    let pUser = message.guild.member(message.mentions.users.first());

    if(!pUser)return message.channel.send(":bangbang: Błąd Składni :bangbang:\nWymień jednego użytkownika, aby go poinformować, że jego podanie na administratora zostało odrzucone. \n`^rek.przyj [@User]`")

    message.channel.send(":white_check_mark: Sukces! :white_check_mark: \nWiadomość do użytkownika " + pUser.displayName+ " została właśnie teraz dostarczona.")

    let przyjEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor("Rekrutacja",message.guild.iconURL)
    .setDescription(`Twój formularz rekrutacyjne dot. rangi na serwerze ${message.guild.name} został **odrzucony**.\nAkcja wykonana przez **${message.author.tag}**`)
    // .setThumbnail('http://cdn.rxpvp.pl/xmuffionex/AWPLOGO.gif')
    .setTimestamp();
    let notka = args.join(" ").slice(22)
    let notkaEmbed = new Discord.RichEmbed()
    .setColor('#ff6200')
    .setTitle(`Notatka od administratora ${message.author.username}`)
    .setDescription(notka)
    .setTimestamp()
    // .setThumbnail(`http://cdn.rxpvp.pl/xmuffionex/AWPLOGO.gif`);

    pUser.send(przyjEmbed);
    if(notka) return pUser.send(notkaEmbed);


}

module.exports.help = {
    name: "rek.odrz",

}