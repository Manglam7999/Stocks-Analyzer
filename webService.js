const express = require("express");
const formidable = require("express-formidable");
const path = require("path");
const fsm = require("./FSM");

//server host address and port no
const IP = "127.0.0.1";
const PORT = 3000;

//initialize express
const app = express();

//Log middleware
var logRequest = (req, res, next) => {
    console.log(
        `Request Type: ${
            req.method
        }\nRequest Time: ${new Date().toUTCString()}\nRequest From: ${
            req.protocol
        }//${req.get("host")}${req.originalUrl}\n`
    );
    next();
};

// add middleware
app.use(logRequest);
app.use(formidable());

//routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/symbols", (req, res) => {
    res.send(fsm.getSymbols());
});

app.get("/stocks", (req, res) => {
    res.send(fsm.getStocks("", ""));
});

app.get("/stocks/:id", (req, res) => {
    res.send(fsm.getStocks(req.params.id, ""));
});

app.get("/stocks/:id1/:id2", (req, res) => {
    res.send(fsm.getStocks(req.params.id1, req.params.id2));
});

//start the server
app.listen(PORT, () =>
    console.log(`Servr start listening on - ${IP}:${PORT}\n`)
);
