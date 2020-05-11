const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const fs = require('fs');

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
    // Błąd? Pokaż go w konsoli.
    if(err) console.log(err);
    // Szukaj tylko i wyłącznie JS'owych komend w katalogu commands.
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    // Sprawdź czy liczba plików jest równa 0. Brak komend w katalogu "commands"? Ten skrypt poinformuje Cię o tym.
    if (jsfile.length <= 0) {
        return console.log("[--:--]: Status [ERROR 404]: File Not Found. Folder 'commands' is empty.");
    }
    // No i końcowa procedura.
    jsfile.forEach((f) =>{
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props)
    })

    console.log(`Ładowanie ${jsfile.length} komend. Prosze czekac...`);
        
    jsfile.forEach((f, i) => {
        require("./commands/" + f);
        console.log(`» ${i + 1}. ${f} został pomyślnie załadowany!`);
    });

});

client.on('ready',()=>{
    console.log(`Bot started as ${client.user.tag}.`)
    client.user.setActivity(`formularze`, {type: 'WATCHING'})
})

client.on("message", async message => {
    // Jeśli autor wiadomości jest botem, zakończ akcje.
    if(message.author.bot) return;
    // Jeśli typ kanału jest równy wiadomości bezpośredniej zakończ akcje.
    let prefix = "^"
    if(!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client, message, args);    
});

client.login(auth.token)