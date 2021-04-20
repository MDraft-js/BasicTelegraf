const { Telegraf } = require('telegraf')
const client = new Telegraf("")
const searcher = require('./searchimage')

client.start(ctx => ctx.replyWithMarkdown(`Hi! This is images inline bot!\nJust type in a chat [@${ctx.botInfo.username}](t.me/${ctx.botInfo.username}) <image-name> and you will receive the some images for this query`))

client.on('inline_query', async ctx => {
    if (!ctx.inlineQuery.query) return;
    const result = await searcher(ctx.inlineQuery.query);
    const data = result.hits.map(obj => {
        return {
            type: 'photo',
            id: obj.id,
            photo_url: obj.largeImageURL,
            thumb_url: obj.previewURL,
            reply_markup: {
                inline_keyboard: [
                    [{ text: `${obj.likes} ❤`, url: 'https://hmproject.tk' }], [{ text: `Поделись ботом с другом!`, switch_inline_query: ''}]
                ]
            }
        }
    })
    ctx.answerInlineQuery(data)
})

client.launch().then(res => console.log('[MyFirstJSbot] Started!'))