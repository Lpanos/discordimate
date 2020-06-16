const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const token = (config.token)

client.on('ready',()=>{
    console.log('Hydro bot JR. is online');
});

 client.on('message', message => {

if(message.content == '69'){
function animate(one,two,three,four,five) {

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

        const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

message.channel.send(one).then((sentMessage) => {
    wait(1*1000).then((waitDone) => sentMessage.edit(two)).then((sentMessage) => {
        wait(1*1000).then((waitDone) => sentMessage.edit(three)).then((sentMessage) => {
            wait(1*1000).then((waitDone) => sentMessage.edit(four)).then((sentMessage) => {
                wait(1*1000).then((waitDone) => sentMessage.edit(five))
                })
            })
        })
    })
}

console.log(animate('one','two','three','four','five'))

}

})
client.login(token);