const client = require('./config/whatsappClient');
const MessageService = require('./services/messageService');
const guests = require('./resources/guests.json');

const messageService = new MessageService(client);

client.on('ready', async () => {
    await messageService.sendInvitationsToAllGuests(guests);
});

client.initialize(); 