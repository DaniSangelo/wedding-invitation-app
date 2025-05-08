const path = require('path');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const getImagePath = () => path.join(__dirname, '../resources/save-the-date.png');

module.exports = {
    delay,
    getImagePath
}; 