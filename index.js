const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'thenhan12354.aternos.me', // Thay bằng server Aternos của bạn nếu khác
  port: 25565,
  username: 'AFK_Bot',
  version: false
});

bot.on('spawn', () => {
  console.log('Bot đã đăng nhập vào server!');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 10000);
});
