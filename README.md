# 🤖 WhatsApp Wedding Invitation Bot

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg?style=for-the-badge)](https://github.com/DaniSangelo)

An automated bot for sending wedding invitations via WhatsApp, built with Node.js and whatsapp-web.js.

## ✨ Features

- Automatic WhatsApp invitation sending
- Custom image support
- Personalized messages for each guest
- Table information included in the message
- Queue system to prevent blocking

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/DaniSangelo/wpp-message-app.git
cd wpp-message-app
```

2. Install dependencies:
```bash
npm install
```

3. Configure the guests file:
- Copy `guests-example.json` to `guests.json`
- Edit `guests.json` with your guests' data

4. Add your invitation image:
- Place your image as `save-the-date.png` in the project root

## 📝 Project Structure

```
├── src/
│   ├── config/
│   │   └── whatsappClient.js
│   ├── services/
│   │   └── messageService.js
│   ├── utils/
│   │   └── helpers.js
│   ├── resources/
│   ├── .wwebjs_cache/
│   ├── .wwebjs_auth/
│   └── index.js
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

## 🎯 How to Use

1. Run the bot:
```bash
node src/index.js
```

2. Scan the QR Code with your WhatsApp
3. The bot will start sending invitations automatically

## 📋 Guests File Format

```json
[
    {
        "name": "Guest Name",
        "phone": "5511999999999",
        "table": "1"
    }
]
```

## ⚠️ Notes

- Phone number must include country code (e.g., 55 for Brazil)
- Image must be in PNG format
- Wait 2 seconds between each send to prevent blocking

## 📄 License

This project is under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgments

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) - WhatsApp interaction library
- [Node.js](https://nodejs.org/) - JavaScript runtime 