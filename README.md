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
        "table": null,
        "guestsAtTable": [
            "Additional Guest 1",
            "Additional Guest 2"
        ]
    }
]
```

## ⚠️ Notes

- Phone number must include area code (e.g., 11 for São Paulo)
- The `table` field can be null if not assigned yet
- `guestsAtTable` is an array of additional guests' names that will be seated at the same table
- Image must be in PNG format
- Wait 2 seconds between each send to prevent blocking

## 📊 Example Table

| Name on the invitation | Guest Name | Table | Phone | Is adult? |
|------|-------|-------|----------------|--------|
| John Doe and family | John Doe | 1 | 5511999999999 | Yes |
| John Doe and family | Jane Doe | 1 | 5511999999999 | Yes |
| John Doe and family | Enzo Doe | 1 | 5511999999999 | Yes |
| John Doe and family | Valentina Doe |  | 5511999999999 | No |

In my case, I extracted data from an Excel file provided by the website where my guests confirmed their presence at my wedding celebration. Note that "Name on the invitation" and "Phone" are the same for all people in the invitation (usually, people from the same family). <br>

In my code (messageService.js), I make a distinction between "guests" and "guestsAtTable", where "guest" is the first name of the family member (in the example above, it would be "John Doe") and "guestsAtTable" would be the rest of them. I did this because I wanted to send a more "personal" message: "Querido xxxx"

## 📄 License

This project is under the MIT License. See the [LICENSE](LICENSE) file for more details.

## ⚠️ Important Disclaimer

This application is intended for personal use only and is not meant for commercial or profit-making purposes. It was created specifically for sending wedding invitations to friends and family.

Please note that the WhatsApp Web library used in this project (`whatsapp-web.js`) is not officially authorized by WhatsApp for commercial use. Using this library for commercial purposes may violate WhatsApp's terms of service and could result in account restrictions.

This project is meant to be used responsibly and in accordance with WhatsApp's terms of service.

## 🙏 Acknowledgments

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) - WhatsApp interaction library
- [Node.js](https://nodejs.org/) - JavaScript runtime 