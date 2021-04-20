const { Telegraf } = require('telegraf')
const client = new Telegraf("")

client.start(ctx => ctx.reply('Hi! It\'s a Echo-Bot'))
client.help(ctx => ctx.reply('Hi! It\'s a Help Menu'))

client.on('message', ctx => ctx.copyMessage(ctx.chat.id, ctx.message))

client.launch().then(res => console.log('[MyFirstJSbot] Started!'))