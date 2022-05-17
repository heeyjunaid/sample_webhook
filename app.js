"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const expressWinston = require("express-winston");
const helmet = require("helmet");
var cors = require('cors')

const {verifyuser, availableAppointments, sendMessage, putInServer} = require("./webhook")


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors())

let router = express.Router();

router.get("/healthcheck", (req, res) => {
    res.status(200).json({ "message": "ok" });
});


router.post("/verifyuser", verifyuser)
router.get("/available_appointments", availableAppointments)
router.post("/send_message", sendMessage)
router.put("/putInServer", putInServer)





expressWinston.requestWhitelist.push("body");
expressWinston.responseWhitelist.push("body");


app.use("/", router);



module.exports = app;