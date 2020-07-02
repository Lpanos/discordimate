module.exports = async function animate() {

        // if(Array.isArray(arguments[0]) == false){
        //         throw new Error("The first variable is not set to your message array ('message' or 'msg')");
        // }

    message = (arguments[0])
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
            // send with the first argument
    const sentMessage = await message.channel.send(arguments[1]);
            // continue editing with the remaining args
    for (let i=2; i < arguments.length; i++) {
            await wait(1000);
            await sentMessage.edit(arguments[i]);
    }
}