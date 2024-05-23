import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix}${command} https://pin.it/4CVodSq`;
  }
  try {
    m.reply(wait);
    const api = await fetch(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${args[0]}`);
    const res = await api.json();
    await conn.sendFile(m.chat, res.result, 'result', "", m)
  } catch (e) {
    console.log(e);
    throw `Terjadi kesalahan!`;
  }
};

handler.help = ['pindl'];
handler.command = /^(pindl)$/i;
handler.tags = ['downloader'];
handler.limit = true;
handler.premium = false;

export default handler