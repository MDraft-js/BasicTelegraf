const { Telegraf } = require('telegraf')
const client = new Telegraf("")
const Sentiment = require('sentiment')
const sentiment = new Sentiment({})

client.start(ctx => ctx.reply('Hi! It\'s a Sentiments-Bot'))

client.on('text', ctx => {
    const result = sentiment.analyze(ctx.message.text)
    ctx.reply(`Score: ${result.score}\nComparative: ${result.comparative}`)
})

client.launch().then(res => console.log('[MyFirstJSbot] Started!'))