module.exports = { 

animate : async function animate() {

            function animateSleep(ms) {
                return new animatePromise(resolve => animateSetTimeout(resolve, ms));
            }
            const animateWait = ms => new animatePromise(resolve => animateSetTimeout(resolve, ms));
            const SentMessage = await message.channel.send(arguments[0]);
            // continue editing with the remaining args
            for (let i=1; i < arguments.length; i++) {
                await animateWait(1000);
                await sentMessage.edit(arguments[i]);
            }
    }
}     