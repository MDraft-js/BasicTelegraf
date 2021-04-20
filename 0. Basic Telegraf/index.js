const { Telegraf } = require('telegraf')
const client = new Telegraf("")

// Аналог client.on('message')

// client.on('message', ctx => ctx.reply('It\'s a Message'))

// Базовые заготовки команд

client.use(async (ctx, next) => {
    ctx.state.isNode = true;
    next()
})

client.start(ctx => ctx.reply('Welcome, bruh'))
client.help(ctx => ctx.reply('Help Menu'))
client.settings(ctx => ctx.reply('Settings Menu'))
client.mention('mikudub', ctx => ctx.reply('Mikun Desu'))
client.hears('hi', ctx => ctx.reply('Hey there'))
client.hashtag('hash', ctx => ctx.reply('It\'s a hashtag.'))
client.on(['sticker', 'photo'], ctx => ctx.reply('Nice 👍'))
// client.on('text', ctx => ctx.reply('It\'s a Text'))

// Кастомные команды

client.command('ctx', ctx => {
    ctx.reply('Console Look')
    // console.log(ctx);
    // console.log(ctx.from);
    // console.log(ctx.chat);
    // console.log(ctx.state);
    // console.log(ctx.message);
})

// Запуск бота
client.launch().then(res => console.log('[MyFirstJSbot] Started!'))