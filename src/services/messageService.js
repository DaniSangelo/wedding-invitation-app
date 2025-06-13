const { MessageMedia } = require('whatsapp-web.js');
const { delay, getImagePath, formatPhone } = require('../utils/helpers');
require('dotenv').config();

class MessageService {
    constructor(client) {
        this.client = client;
    }

    async sendInvitation(guest) {
        const phone = formatPhone(guest.phone);
        const chatId = `${phone}@c.us`;

        let guestsAtTable = '';
        if (Array.isArray(guest.guestsAtTable) && guest.guestsAtTable.length > 0) {
            const guests = guest.guestsAtTable.map(name => name.toUpperCase()).join('\n');
            guestsAtTable = `Os demais convidados do convite são:\n ${guests}\n`
        }

        const tableNum = `MESA NÚMERO: ${guest.table}\n`
        const mainMessage = `Querido (a) ${guest.name}\n
Enfim o grande dia chegou! Estamos felizes por você estar conosco, partilhando desse momento tão especial. \n
Para seu conforto e melhor organização do evento, gostaríamos de deixar aqui duas orientações bem importantes: \n
* A cerimônia e a recepção/festa acontecerão no mesmo local. Portanto, haverá dois momentos: 1) a realização da cerimônia; e 2) a recepção/festa

* Todos os convidados com contato telefônico cadastrados no site receberam uma imagem com o número da mesa a ser ocupada durante a recepção/festa. Essa informação poderá ser confirmada logo ao chegar no evento. Se tiver dúvidas, basta perguntar à recepcionista no local do evento.

${tableNum}
${guestsAtTable}

Esperamos que se divirtam e desejamos um ótimo evento a todos!

Endereço: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Carinhosamente, \n
Gih & Dani`;
        
        try {
            const media = await MessageMedia.fromFilePath(getImagePath(guest.table));
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