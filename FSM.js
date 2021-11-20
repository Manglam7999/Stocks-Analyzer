const data = require("./Reader");

const getSymbols = () => {
    let allSymbols = data.map((v) => {
        return v.symbol;
    });
    const uniqueSymbols = [...new Set(allSymbols)];
    uniqueSymbols.sort();
    return uniqueSymbols;
};

const getStocks = (symbol, date) => {
    let startDate = "";
    let endDate = "";
    if (date != "") {
        startDate = date + "-01";
        endDate = date + "-31";
    }

    const stocks = data.filter((v) => {
        return (
            (symbol == "" || symbol == "all" || v.symbol == symbol) &&
            (date == "" || (v.date >= startDate && v.date <= endDate))
        );
    });
    return stocks;
};

module.exports = {
    getSymbols,
    getStocks,
};
