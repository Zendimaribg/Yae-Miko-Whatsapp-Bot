import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
         
/*============== SOCIAL ==============*/
global.sig = 'https://instagram.com/rapik_gimang' //instagram
global.sgh = 'https://github.com/' //github
global.sgc = 'https://chat.whatsapp.com/DJm9Fvyk1zR3cWftkgCu9S' //group whatsapp
global.saluran = 'https://whatsapp.com/channel/0029VaJHq2XFSAsz4dtOTE0T' //saluran whatsapp
global.syt = 'https://www.youtube.com/@rapik_gimangYT' //youtube
global.swa = 'https://wa.me/6281312651566' //whatsapp
global.tele = 'https://t.me/rapikz' //telegram
global.sdc = 'https://discord.gg/fu2BQ5RZ' //discord
global.snh = 'https://nhentai.net/' //nhentai

/*============== PAYMENT ==============*/
global.pdana = '082223537406' //pulsa1
global.ppulsa = '082223537406' //pulsa2
global.povo = '083181666350' //ovo
global.gopay = '082223537406' //gopay
global.dana = '082223537406' //dana
global.sid = 's.id' //s.id
global.psaweria = 'https://saweria.com/ReyzXd' //saweria

/*============== NOMOR ==============*/
global.nomorwa = '6285624194958' //whatsapp
global.nomorbot = '6285624194958' //nomor Bot
global.nomorown = '6282223537406' //nomor Owner
global.namebot = 'ʏᴀᴇᴍɪᴋᴏ ᴀɪ' //nama Bot
global.nameown = 'Nzx' //nama Owner

/*============== STAFF ==============*/
global.owner = [
  ['6282223537406', 'Nzx', true],
  ['6281255954942', "Raf"] //creator/owner
] //put your number here
global.mods = [] //moderator
global.prems = [] //prem bukan disini

/*============== CPANEL ==============*/
global.domain = 'https://xxxxx' //domain
global.capikey = 'pltc_xxxxx' //pltc
global.apikey = 'plta_xxxxx' //plta

/*============== APIKEY ==============*/
global.lolkey = 'Nanasmuda'
global.xkey = 'd90a9e986e18778b'
global.xzn = 'konekocyz'
global.lann = 'Utopia x Greezak'
global.xyro = '3WIq7q3CWt'
global.btc = "antisukii"//😂👈
global.lol = 'Nanasmuda'

/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  lol: 'https://api.lolhuman.xyz', 
  xzn: 'https://skizo.tech',
  lann: 'https://api.betabotz.org', 
  xyro: 'https://api.xyroinee.xyz'
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'f5ae393f8d51a61718de131b', //lolhuman
  'https://skizo.tech': 'konekocyz', //skizo
  'https://api.betabotz.org': 'Utopia x Greezak', //betabotz
  'https://api.xyroinee.xyz': '3WIq7q3CWt' //xyroine
}

/*============== VERSION ==============*/
global.version = '1.0.0'

/*============== WATERMARK ==============*/
global.wm = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘ʏᴀᴇᴍɪᴋᴏ - ᴀɪ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷' //wm1
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘ʏᴀᴇᴍɪᴋᴏ - ᴀɪ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷' //wm2
global.wm3 = '• ʏᴀᴇᴍɪᴋᴏ ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ' //wm3
global.namedoc = 'ntah lah' //nama document
global.botdate = `• ᴅᴀʏ's: ${week} ${date}`
global.bottime = `ᴛɪᴍᴇ: ${wktuwib}`
global.titlebot = 'ʏᴀᴇᴍɪᴋᴏ - ᴀɪ ┊ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'
global.author = global.wm

/*============== THUMB ==============*/
global.elaina = 'https://telegra.ph/file/ccfab120681cd8bff3245.jpg'

/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/6560bbfa033d6ed257073.jpg' //thumbnail
global.thumb2 = 'https://telegra.ph/file/80c834099d80db20a40c8.jpg'
global.thumbbc = 'https://telegra.ph/file/80c834099d80db20a40c8.jpg' //broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumblvlup = 'https://telegra.ph/file/a3e66e0fa840b08236c75.jpg'
global.hwaifu = ["https://telegra.ph/file/251819c8b58390a35a0b8.jpg",
"https://telegra.ph/file/8685204c3f354c7adcbc8.jpg",
"https://telegra.ph/file/7af14536cce89b853273d.jpg",
"https://telegra.ph/file/c35f550c406d845f0d0f7.jpg",
"https://telegra.ph/file/5d8ee04683b46d9693930.jpg",
"https://telegra.ph/file/904a6821e0bbb7ee063e7.jpg",
"https://telegra.ph/file/777654c2dd2279912895f.jpg",
"https://telegra.ph/file/deb7be9156950b03e6f6f.jpg",
"https://telegra.ph/file/a965d09697837db24e8af.jpg",
"https://telegra.ph/file/1e97c59a8656f6eda9aa8.jpg",
"https://telegra.ph/file/0114e0cbe329a6656c369.jpg",
"https://telegra.ph/file/29d80ee992d752b431077.jpg",
"https://telegra.ph/file/f62911809692e7beec27d.jpg",
"https://telegra.ph/file/6d579f229f63023858ab5.jpg",
"https://telegra.ph/file/f6b3d257efdcff5e81918.jpg",
"https://telegra.ph/file/d2210ba9660a1e3df9911.jpg",
"https://telegra.ph/file/3742e10af7a1593ca39bc.jpg",
"https://telegra.ph/file/540c4ea56444ace3ef231.jpg",
"https://telegra.ph/file/e698e19218c06284058e9.jpg",
"https://telegra.ph/file/13e1b11ef6c4c9e7cb8de.jpg",
"https://telegra.ph/file/756e3430c628ed0f45747.jpg",
"https://telegra.ph/file/9cf6c050d389ae88c1287.jpg",
"https://telegra.ph/file/bd03bb1c81de40a6bd54c.jpg",
"https://telegra.ph/file/29abd24c562a55edf8a7a.jpg",
"https://telegra.ph/file/91ff5d1f866ed9ccced7b.jpg",
"https://telegra.ph/file/6184f8cc16f0b7e1c15c9.jpg"]



/*============== FlamingText ===========*/
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='] 

/*============== TEXT ==============*/
global.wait = '🚩 ʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ... '
global.eror = '```404 error```'
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 831-8166-6350'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *ღ 𝘿𝘼𝙎𝙃𝘽𝙊𝘼𝙍𝘿 ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊❀'                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = wm3
global.stickauth = `☂︎\n𝗘\nl\na\ni\nn\na\n-\n𝗕\n𝗢\n𝗧\n✦\n\n⫹⫺ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ\nwa.me/${global.nomorbot}`
global.packname = 'sᴛɪᴄᴋᴇʀ'
global.packname2 = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʏᴀᴇᴍɪᴋᴏ ᴀɪ'

global.multiplier = 30 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            fox: "🦊",
            agility: "🤸‍♂️",
            anggur: "🍇",
            apel: "🍎",
            aqua: "🥤",
            arc: "🏹",
            armor: "🥼",
            bank: "🏦",
            batu: "🧱",
            berlian: "💎",
            bibitanggur: "🍇",
            bibitapel: "🍎",
            bibitjeruk: "🍊",
            bibitmangga: "🥭",
            bibitpisang: "🍌",
            botol: "🍾",
            bow: "🏹",
            bull: "🐃",
            cat: "🐈",
            centaur: "🎠",
            chicken: "🐓",
            coal: "⚱️",
            common: "📦",
            cow: "🐄",
            crystal: "🔮",
            darkcrystal: "♠️",
            diamond: "💎",
            ruby: "♦️",
            dog: "🐕",
            dragon: "🐉",
            eleksirb: "🧪",
            elephant: "🐘",
            emasbatang: "🪙",
            emasbiasa: "🥇",
            emerald: "💚",
            exp: "✉️",
            fishingrod: "🎣",
            foodpet: "🍱",
            fox: "🦊",
            gardenboc: "🗳️",
            gardenboxs: "📦",
            gems: "🍀",
            giraffe: "🦒",
            gold: "👑",
            health: "❤️",
            healtmonster: "❤‍🔥",
            horse: "🐎",
            intelligence: "🧠",
            iron: "⛓️",
            jeruk: "🍊",
            kaleng: "🥫",
            kardus: "📦",
            kayu: "🪵",
            ketake: "💿",
            keygold: "🔑",
            keyiron: "🗝️",
            knife: "🔪",
            koinexpg: "👛",
            kucing: "🐈",
            kuda: "🐎",
            kyubi: "🦊",
            legendary: "🗃️",
            level: "🧬",
            limit: "🌌",
            lion: "🦁",
            magicwand: "⚕️",
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            mana: "🪄",
            mangga: "🥭",
            money: "💵",
            mythic: "🗳️",
            mythic: "🪄",
            naga: "🐉",
            pancingan: "🎣",
            pet: "🎁",
            petFood: "🍖",
            phonix: "🦅",
            pickaxe: "⛏️",
            pisang: "🍌",
            pointxp: "📧",
            potion: "🥤",
            rock: "🪨",
            rubah: "🦊",
            sampah: "🗑️",
            serigala: "🐺",
            snake: "🐍",
            stamina: "⚡",
            strength: "🦹‍♀️",
            string: "🕸️",
            superior: "💼",
            sword: "⚔️",
            tiger: "🐅",
            tiketcoin: "🎟️",
            trash: "🗑",
            umpan: "🪱",
            uncommon: "🎁",
            upgrader: "🧰",
            wood: "🪵"
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
        if (!results.length) return ""
        else return emot[results[0][0]]
    }
}


//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})