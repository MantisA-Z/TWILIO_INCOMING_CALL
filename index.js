require("dotenv").config();
const express = require("express");
const receiveCallModel = require("./models/twilioIncomingCall");
const app = express();

app.get("/", (req, res) => {
  res.end("hello");
});
app.post("/twilio/call", receiveCallModel);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at port: ${PORT}`);
});
