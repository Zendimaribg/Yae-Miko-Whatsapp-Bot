import fetch from "node-fetch"
import yts from 'yt-search';
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default

async function handler(m, { command, conn, text, usedPrefix }) {
  if (!text) return m.reply(`Use example ${usedPrefix}${command} naruto blue bird`)
  m.reply(wait)

      let search = await yts(text)
      let vid = search.videos[0]
      let { title, thumbnail, timestamp, views, ago, url } = vid
      let captvid = `╭──── 〔 Y O U T U B E 〕 ─⬣
        ⬡ Title: ${title}
        ⬡ Duration: ${timestamp}
        ⬡ Views: ${views}
        ⬡ Upload: ${ago}
        ⬡ Link: ${url}
╰────────⬣`;
      conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, viewOnce: false, footer: author }, { quoted: m })
      let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            "messageContextInfo": {
              "deviceListMetadata": {},
              "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: "Silahkan pilih format yang ingin dikirim"
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: "Yae Miko-ai"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "*YouTube Play*",
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"MP4 🎥\",\"id\":\".ytmp4 ${url}"}`
                  },
                  {
                    "name": "quick_reply",
                    "buttonParamsJson": `{\"display_text\":\"MP3 🎧\",\"id\":\".ytmp3 ${url}"}`
                  },
                ],
              })
            })
          }
        }
      }, {})
      await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    })
}

handler.help = ["play"]
handler.command = ["playingmp4", "playingmp3", "skippingplay", "play"]
handler.tags = ["downloader"]

export default handler