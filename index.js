module.exports = function animate(one,two,three,four,five) {

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
