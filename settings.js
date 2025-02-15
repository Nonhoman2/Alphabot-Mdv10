const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz',
        nrtm: 'https://nurutomo.herokuapp.com',
        bg: 'http://bochil.ddns.net',
        xteam: 'https://api.xteam.xyz',
        zahir: 'https://zahirr-web.herokuapp.com',
        zeks: 'https://api.zeks.me',
        pencarikode: 'https://pencarikode.xyz',
        LeysCoder: 'https://leyscoders-api.herokuapp.com',
        neoxr: 'https://neoxr-api.herokuapp.com',
        amel: 'https://melcanz.com',
        hardianto: 'https://hardianto.xyz',
        lol: 'https://api.lolhuman.xyz',
        adicug: 'https://api.adiofficial.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',
        'https://neoxr-api.herokuapp.com': 'yntkts',
        'https://api.xteam.xyz': 'your apikey',
        'https://melcanz.com': 'your apikey',
        'https://api.lolhuman.xyz': 'your apikey',
        'https://zahirr-web.herokuapp.com': 'zahirgans',
        'https://api.zeks.me': 'your apikey',
        'https://pencarikode.xyz': 'your apikey',
        'https://hardianto.xyz': 'hardianto',
        'https://leyscoders-api.herokuapp.com': 'your apikey',
        'https://api.adiofficial.xyz': 'your apikey'  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "BOT-BETA" //namabot kalian
global.ownername= "BOT-BETA" //nama kalian
global.myweb ="gak ada" //bebas asal jan hapus
global.youtube = "gak ada" //bebas asal jan hapus
global.github = "Github Masi prifate" //bebas
global.email = "gak ada" //bebas
global.region = "INDONESIAN" //bebas
global.ownernomer = "6281238772258" // nomor wa kalian
global.ownernomerr = "+6281238772258" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi 2.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6281238772258","62812387722589","6285717281107"] //ganti agar fitur owner bisa di gunakan
global.packname = '© BOT-BETA' //sticker wm ubah
global.author = 'BOT-BETA' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh owner Bot !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang beban keluarga @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
