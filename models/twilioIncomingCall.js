const VoiceResponse = require("twilio").twiml.VoiceResponse;

const receive = (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say("Hello from your pals! Have fun.");
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
  console.log(`Request object from twilio: ${req.body}`);
};

module.exports = receive;
