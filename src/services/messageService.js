const { MessageMedia } = require('whatsapp-web.js');
const { delay, getImagePath } = require('../utils/helpers');

class MessageService {
    constructor(client) {
        this.client = client;
    }

    async sendInvitation(guest) {
        const chatId = `${guest.phone}@c.us`;
        const caption = `🌸 Teste bot - Mark VI - Olá, ${guest.name}! Aqui está o convite do nosso casamento. Sua mesa será a número ${guest.table}. 💍`;
        
        try {
            const media = await MessageMedia.fromFilePath(getImagePath());
            console.log(`📨 Enviando imagem para ${guest.name} (${chatId})...`);
            await this.client.sendMessage(chatId, media, { caption });
            console.log(`✔️ Convite enviado para ${guest.name}`);
            return true;
        } catch (err) {
            console.error(`❌ Erro ao enviar para ${guest.name}:`, err.message);
            return false;
        }
    }

    async sendInvitationsToAllGuests(guests) {
        console.log('✅ Conectado. Enviando convite...');
        
        for (const guest of guests) {
            await this.sendInvitation(guest);
            await delay(2000); // pausa para evitar bloqueios
        }

        console.log('📤 Todos os convites foram enviados!');
    }
}

module.exports = MessageService; 