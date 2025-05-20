const { MessageMedia } = require('whatsapp-web.js');
const { delay, getImagePath, diffDays, formatPhone } = require('../utils/helpers');
require('dotenv').config();

class MessageService {
    constructor(client) {
        this.client = client;
    }

    async sendInvitation(guest) {
        const phone = formatPhone(guest.phone);
        const days = diffDays();
        const chatId = `${phone}@c.us`;
        const mainMessage = `S A V E · T H E · D A T E \n
🗓️ ${process.env.CALENDAR_URL} \n
Faltam ${days} dias para o nosso tão sonhado casamento!! 💍\n
Estamos muito felizes por você fazer parte desse momento tão especial. \n
E para não deixar você perder nada, já deixa salvo aí na sua agenda. 😉\n
Nos vemos em breve! 🥂🎉 \n
Carinhosamente, \n
Gih & Dani`;
        
        try {
            const media = await MessageMedia.fromFilePath(getImagePath());
            console.log(`📨 Sending image to ${guest.name} (${chatId})...`);
            await this.client.sendMessage(chatId, media, { caption: mainMessage });
            console.log(`✔️ Invite sent to ${guest.name}`);
            return true;
        } catch (err) {
            console.error(`❌ Error sending to ${guest.name} (${phone}):`, err.message);
            return false;
        }
    }

    async sendInvitationsToAllGuests(guests) {
        console.log('✅ Connecting. Sending invitation...');
        
        for (const guest of guests) {
            await this.sendInvitation(guest);
            await delay(3000);
        }

        console.log('📤 All invitations have been sent!');
    }
}

module.exports = MessageService; 