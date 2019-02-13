const { parse } = require('url');

//testing interval
let someValue = 0;

setInterval(() => {
    someValue++;
}, 5000);

module.exports = (req, res) => {
    const { query } = parse(req.url, true);
    const { name = 'World' } = query;

    res.end(`Hello, ${name}! ${someValue}`);
};
