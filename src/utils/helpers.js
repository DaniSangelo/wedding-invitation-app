const path = require('path');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const getImagePath = (imageNumber) => path.join(__dirname, `../resources/${imageNumber}.jpg`);

const diffDays = () => {
    const targetDate = new Date(2025, 4, 31, 16, 30, 0); // May 31, 2025 at 4:30 PM
    const today = new Date();
    const diffTime = targetDate - today;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
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