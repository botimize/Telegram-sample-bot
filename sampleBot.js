/*
 * This is a sample Telegram bot.
 *
 * # RUN THIS BOT:
 *
 *   1. Run from command line:
 *
 *    BOT_TOKEN=<YOUR_BOT_TOKEN> node sampleBot.js
 *
 *
 * # This sample is modified from https://github.com/telegraf/telegraf/tree/develop/examples
 *
 */



const Telegraf = require('telegraf')
const { Extra, Markup } = require('telegraf')
const app = new Telegraf(process.env.BOT_TOKEN)


app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

app.command('keyboard', (ctx) => {
  return ctx.reply('Custom buttons keyboard', Markup
    .keyboard([
      ['🔍 Search', '😎 Popular'], // Row1 with 2 button
      ['☸ Setting', '📞 Feedback'], // Row2 with 2 button
      ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 button
    ])
    .oneTime()
    .resize()
    .extra()
  )
})

app.command('photo', (ctx) => {
	ctx.replyWithPhoto({url:'http://lorempixel.com/400/200/cats/',filename: 'kitten.jpg'})
})

app.command('location', (ctx) => {
	ctx.replyWithLocation('25.0', '121.5')
})

app.command('contact', (ctx) => {
	console.log(ctx)
	ctx.replyWithContact('0900000000','Snoopy')
})

app.command('video', (ctx) => {
	ctx.replyWithVideo({source : './video/sampleVideo.mp4'})
})

app.hears('hi', (ctx) => ctx.reply('Hey there!'))

app.on('text', (ctx) => {
	ctx.reply(ctx.update.message.text)
})

app.on('sticker', (ctx) => {
	ctx.replyWithSticker(ctx.update.message.sticker.file_id)
})

app.on('location', (ctx) => {
	ctx.reply('I\'m just behind you!!')
	ctx.replyWithLocation(ctx.update.message.location.latitude, ctx.update.message.location.longitude)
})

app.on('photo', (ctx) => {
	ctx.reply('Nice photo!')
})

app.on('inline_query', (ctx) => {
  const query = ctx.inlineQuery.query || ''
  const results = countries
    .filter((country) => country.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    .map((country) => {
      return {
        id: country.code,
        title: country.name,
        type: 'article',
        input_message_content: {
          message_text: `${country.name} code: *${country.code}*`,
          parse_mode: 'Markdown'
        }
      }
    })
  return ctx.answerInlineQuery(results)
})

app.startPolling()

const countries = [
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
  {name: 'American Samoa', code: 'AS'},
  {name: 'AndorrA', code: 'AD'},
  {name: 'Angola', code: 'AO'},
  {name: 'Anguilla', code: 'AI'},
  {name: 'Antarctica', code: 'AQ'},
  {name: 'Antigua and Barbuda', code: 'AG'},
  {name: 'Argentina', code: 'AR'},
  {name: 'Armenia', code: 'AM'},
  {name: 'Aruba', code: 'AW'},
  {name: 'Australia', code: 'AU'},
  {name: 'Austria', code: 'AT'},
  {name: 'Azerbaijan', code: 'AZ'},
  {name: 'Bahamas', code: 'BS'},
  {name: 'Bahrain', code: 'BH'},
  {name: 'Bangladesh', code: 'BD'},
  {name: 'Barbados', code: 'BB'},
  {name: 'Belarus', code: 'BY'},
  {name: 'Belgium', code: 'BE'},
  {name: 'Belize', code: 'BZ'},
  {name: 'Benin', code: 'BJ'},
  {name: 'Bermuda', code: 'BM'},
  {name: 'Bhutan', code: 'BT'},
  {name: 'Bolivia', code: 'BO'},
  {name: 'Bosnia and Herzegovina', code: 'BA'},
  {name: 'Botswana', code: 'BW'},
  {name: 'Bouvet Island', code: 'BV'},
  {name: 'Brazil', code: 'BR'},
  {name: 'British Indian Ocean Territory', code: 'IO'},
  {name: 'Brunei Darussalam', code: 'BN'}
]