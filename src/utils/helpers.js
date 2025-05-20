const path = require('path');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const getImagePath = () => path.join(__dirname, '../resources/save-the-date-v2.png');

const diffDays = () => {
    const targetDate = new Date(2025, 4, 31); // Months are 0-indexed: 4 = May
    const today = new Date();
    targetDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    const diffTime = targetDate - today;
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return days;
};

const formatPhone = (phone) => {
    return phone.replace(/\D/g, '');
};

module.exports = {
    delay,
    getImagePath,
    diffDays,
    formatPhone
}; 