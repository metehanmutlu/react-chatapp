const fs = require('fs');
const path = require('path');


const read = () => {
    let rawdata = fs.readFileSync(path.join(__dirname, '../messages.json'));
    let lastData = JSON.parse(rawdata);
    return lastData
};

module.exports = read;