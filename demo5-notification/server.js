var gcm = require('node-gcm');

var message = new gcm.Message({
    data: { text: 'hello' }
});

// Set up the sender with you API key, prepare your recipients' registration tokens.
var sender = new gcm.Sender('AIzaSyC-IR5Ru9-g2I2iqrmhWyoT8alcKhT6FlM');
var regTokens = ['cHn6KFYaccc:APA91bG-3uum1QP3rngNJoCTNt1r3jtP8jZM8eO6zsFVybhYVed-vQWBX26D5G3I26IzOhuQuZues4T4mQuRlmcvYrDBPIRnqBw6n-szfIkWB1pnEMmIIjbvGk-4DIT1sclr4lTuEzUO'];

sender.send(message, { registrationTokens: regTokens }, (err, response) => {
    if(err) console.error(err);
    else    console.log(response);
});
