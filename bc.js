const Discord = require('discord.js');
const client = new Discord.Client();   


const adminprefix = "o"
const devs = ['506034854043975681','476185102922285066'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

client.on('message', msg =>{
	var prefix = "b!"
	if(msg.content.startsWith( prefix +"users")){
		msg.reply(`Users Bot Count Is [ ${client.users.size} ]`);
	}
});
client.on('message', msg =>{
	var prefix = "b!"
	if(msg.content.startsWith( prefix +"guilds")){
		msg.reply(`Guilds Bot Count Is [ ${client.guilds.size} ]`);
	}
});
client.on('message', msg =>{
	var prefix = "b!"
	if(msg.content.startsWith( prefix +"channels")){
		msg.reply(`Channels Bot Count Is [ ${client.channels.size} ]`);
	}
});

client.on('message', message => {
        if (message.content === "b!inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`Click Here To Add Me`)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=506205088394510346&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });

client.on('message', message => {
    var prefix = "b!";
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Boardcast Bot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Broadcast')
   .addField('سيرفر', message.guild.name)
   .addField('المرسل', message.author.username)
   .addField('الرسالة', args)
   .setThumbnail(message.author.avatarURL)
   .setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on("message", message => {
 if (message.content === "b!help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
b!bc ~> رسالة لكل اعضاء السيرفر
b!inv ~> لدعوة البوت
b!support ~> لزيارة سيرفر الدعم الفني
	  `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
client.on("message", message => {
 if (message.content === "b!support") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
https://discord.gg/MstCSqe
`)
   message.channel.sendEmbed(embed)
    
   }
   }); 




client.login("NTA2MjA1MDg4Mzk0NTEwMzQ2.Drewhg.mxxQt9V9pfx17auHsLfAESMFFoM");
