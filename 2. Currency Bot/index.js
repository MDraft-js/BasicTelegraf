const { Telegraf } = require('telegraf')
const client = new Telegraf("")
const fetch = require('node-fetch')
const cc = require('currency-codes')

client.start(ctx => ctx.reply('Welcome to CurrencyBot'))

client.hears(/^[A-Z]+$/i, async ctx => {
    const currency = cc.code(ctx.message.text)
    if (!currency) return ctx.reply('Не верное значение Валюты')

    // let currencyData = await fetch('https://api.monobank.ua/bank/currency').then(res => res.json()).catch(err => ctx.reply('Вы слишком часто используете данный сервис, попробуйте позже'))
    // if (currencyData.errorDescription) return;
    const foundCurrency = client.currencyData.find(obj => obj.currencyCodeA.toString() === currency.number)
    if (!foundCurrency) return ctx.reply('Такой валюты нет у нашего API')

    ctx.replyWithMarkdown(`CURRENCY: ${currency.code}\nRATE BUY: *${foundCurrency.rateBuy}*\nRATE SELL: *${foundCurrency.rateSell}*`)
})

client.launch().then(async () => {
    console.log('[MyFirstJSbot] Started!')
    client.currencyData = await fetch('https://api.monobank.ua/bank/currency').then(res => res.json())
    console.log(client.currencyData[0]);
})