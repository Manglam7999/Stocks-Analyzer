const path = require("path");
const fs = require("fs");

let fullData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "Stock List.json"), {
        encoding: "utf8",
        flag: "r",
    })
);

const data = fullData.map((v, i) => {
    return {
        symbol: v.symbol,
        open: v.open,
        high: v.high,
        low: v.low,
        close: v.close,
        date: v.date,
    };
});

module.exports = data;
