import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn }) => { 

         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`;
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "Y A E  M I K O  M U L T I D E V I C E",
          thumbnail: fs.readFileSync("./media/yaemiko.jpg"),
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true, 
          showAdAttribution: true
        }
      }
    });
 }
 handler.help = ['gcbot', 'gcelaina'];
handler.tags = ['main'];
handler.command = /^(gcbot|groupbot|botgc|botgroup|gcelaina|groupelaina)$/i;
export default handler;