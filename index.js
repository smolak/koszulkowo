const fs = require('fs');
const { parse } = require('url');

fs.writeFileSync('date.txt', Date.now(), 'utf8');

module.exports = (req, res) => {
    const { query } = parse(req.url, true);
    const { name = 'World' } = query;
    const date = fs.readFileSync('date.txt', 'utf8');

    res.end(`Hello, ${name}! ${date}`);
};
