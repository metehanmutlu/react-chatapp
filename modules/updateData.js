const fs = require('fs');
const path = require('path');


const update = (lastData) => {
    let data = JSON.stringify(lastData, null, 4);
    fs.writeFileSync(path.join(__dirname, '../messages.json'), data);
};

module.exports = update;