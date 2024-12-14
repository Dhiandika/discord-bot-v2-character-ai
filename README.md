
# Character ai Discord Bot- Version Gawrgura
Multitasking Discord Bot written in node

## 🔑 API Key Source
- [Discord Application](https://discord.com/developers/applications)
- [Google AI Studio](https://makersuite.google.com/app/apikey)
## 💻 Run Discord Bot
#### Project Structure
```
discord-bot-v2/
├── .env
├── package.json
├── package-lock.json
├── src/
│   ├── index.js
│   ├── geminiAI.js
│   └── commands/
│       └── aiCommand.js
├── README.md
└── node_modules/

```
#### Install Dependencies
```
npm install
```
#### Define API Key in .env 
```
DISCORD_BOT_TOKEN="XXXXXX"
GEMINI_API_KEY="XXXXX"
PORT=8080

```
#### Run main.py
```
nodemon index.js
```