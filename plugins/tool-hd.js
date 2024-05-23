import fetch from 'node-fetch'
import jimp from 'jimp'
import uploadImage from '../lib/uploadImage.js'
import { performance } from 'perf_hooks'

let handler = async (m, { conn, usedPrefix, command }) => {
	m.reply(wait);
	const where = m.chat
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      if (command === 'hd') {
        const start = performance.now();
        const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini?url=${out}&apikey=${btc}`);
        const finish = performance.now();
        const speed = finish - start;
        //const hsl = `*Fetching* : ${speed.toFixed(0)} ms`
        const image = await api.json();
        const { url } = image;
        let src = await jimp.read(await url)
        let height = src.getHeight()
        let width = src.getWidth()
        let hsl = `*${height}x${width}*`
        conn.sendFile(m.sender, url, null, '', m);
        if (where.endsWith("@g.us")) await m.reply('Pesan Dikirim Ke Private Chat !');
      } else if (command === 'hd2') {       
        try {
          const mulai = performance.now();
          const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v2?url=${out}&apikey=${btc}`);
          const akhir = performance.now();
          const sped = akhir - mulai;
          const hasil = `*Fetching* : ${sped.toFixed(0)} ms`
          const response = await api.text();
          let image;
          try {
            image = JSON.parse(response);
          } catch (error) {
            console.error(`parse: ${error}`);
            return;
          }
          const { url } = image;
          conn.sendFile(m.sender, url, null, hasil, m);
          m.reply('Pesan Dikirim Ke Private Chat !');
        } catch (error) {
          throw error;
          console.trace()
        }
      } else if (command === 'hd3') {
        const anyak = performance.now();
        const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v3?url=${out}&resolusi=4&apikey=${btc}`);
        const pungkasan = performance.now();
        const kacepetan = pungkasan - anyak;
        const asil = `*Fetching* : ${kacepetan.toFixed(0)} ms`
        const image = await api.json();
        const url = image.url;
        conn.sendFile(m.sender, url, null, asil, m);
        if (where.endsWith("@g.us")) await m.reply('Pesan Dikirim Ke Private Chat !');
       } else if (command === 'removebg' || command === 'nobg') {
        const api = await fetch(`https://api.botcahx.eu.org/api/tools/removebg?url=${out}&apikey=${btc}`);
        const image = await api.json();
        const url = image.url.result;
        conn.sendFile(m.sender, url, null, wm, m);
        if (where.endsWith("@g.us")) await m.reply('Pesan Dikirim Ke Private Chat !');
      }
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    console.trace();
    throw `*Server Error*`
  }
}

handler.command = handler.help = ['hd', 'hd2', 'hd3','removebg','nobg'];
handler.tags = ['tools'];
handler.premium = false;
handler.register = true;
handler.limit = false;

export default handler