const { Telegraf } = require("telegraf");
const bot = new Telegraf(""); // Telegram Bot ID

const jokes = ["Whats brown and sticky?\n\n A stick.", ""];

bot.hears("Tell me a joke!", (ctx) => {
  let index = Math.floor(Math.random() * jokes.length - 1);
  let message = jokes[index];

  ctx.reply(message);
});

bot.launch();
