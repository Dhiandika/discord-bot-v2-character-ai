const { generateResponse } = require('../geminiAI');

module.exports = {
  async execute(message) {
    const userInput = message.content.slice(4); // Menghapus prefix '!ai '
    console.log('User input:', userInput); // Log input pengguna

    try {
      const aiResponse = await generateResponse(userInput);
      console.log('AI response:', aiResponse); // Log respons dari AI
      message.reply(aiResponse);
    } catch (error) {
      console.error('Error generating AI response:', error);
      message.reply('Oops, something went wrong while talking to Gemini AI.');
    }
  },
};
