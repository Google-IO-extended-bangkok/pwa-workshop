var gcm = require('node-gcm');

var message = new gcm.Message({
    data: { text: 'hello' }
});

// Set up the sender with you API key, prepare your recipients' registration tokens.
var sender = new gcm.Sender('AIzaSyC-IR5Ru9-g2I2iqrmhWyoT8alcKhT6FlM');
var regTokens = ['fuebE6moZKU:APA91bEaNgzLw1uD7rjoKNX3yzwQvvnlJJbdNeHgUHdYRprcCvJ7qlXIc49cd29NCa-iVrOvj0QsMXpf11w627jepwaE35S7J_kjJNGYDEKhPo08Mc5-QTe8gZZ7hDI9qGiOB7_tkBiq'];

sender.send(message, { registrationTokens: regTokens }, (err, response) => {
    if(err) console.error(err);
    else    console.log(response);
});
