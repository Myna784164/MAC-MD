const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("7086611617")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mainamongodb007:mongodb007@cluster0.lai3e8q.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/Maccoder3/MAC-MD'
global.location = 'Delhi IN'
global.gurl = 'https://instagram.com/' // rushmyn
global.sudo = process.env.SUDO || '256705036288'
global.devs = '256705036288';
global.website = 'https://github.com/Maccoder3/MAC-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/8ec95da555e8347af71bd.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === THE MYNA  'MAC 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === MYNA  'mac' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === IZUKU;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZLcHpUdE0rWWZNVS9mQ09La29vakhlMkE0MVFDaElmZ0dZNDF3WncwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFk0Z1VnSkg4Q29BdzV4QUlVbXBkVEJvNDFSZkdLQVZuMjlSNGFyTFdsND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQmJSOFpsaXJLUUdUcG50cVJlRm9ObmVEY1Nxd3ZsKzZCeUZWeitNK21RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEZkSFZ4Q1V1STBQZUo1b3lPVUF2STNmclFrcEdCVHhQU1pvampBRlRZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9EMmhEMHB0dDEyZXR3aGhYU0RZazEzeXNKNm5hZWpibGUwam8raWFhRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5QVVdSekRtR1hkTm1LUDZNK1ZWdExUOGpEdUtnVW1oTTFpV3UyYU5kVkE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTK0ZLcnRUR1RTeVlsVVR4OU1sRXhFK3VSTlNQUW5uNG0wM3lYNWd3NmNRUklMUjArcFdKRExpUFJiemY2T0lWOEIxMWVlZDNkSFNxd05XYWJwQ1dnZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIwMSwiYWR2U2VjcmV0S2V5IjoiUWVBUUx4RExGSWNraVBRRVoyRGxRbCtKVXNPKzhYVGczQjQzbG1qazVFUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTcwODY2MTE2MTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDFEQTU5NzZFNUIzQjJGRUMyRTVCMjc1MEVEM0RENDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwMjIxNDM0Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWjFEczY1enJUQ1dTQ0dmWVNyY18zQSIsInBob25lSWQiOiIxOTY5NTNjMy05ODA5LTQzNTEtYmMwMi02ZDUwMTE0YzYzZGIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURvd3NzenJjVjBMOUs1bFdPcVZOanRUYllJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMk12YTJsSi9uM0ptdU45UjZWRGJIZXlMRWM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJeTl1L1FDRU1MMTFxc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkowL1ZYMTVGdXV4MWZ5aTVGK0FCdkh4RUF2dkpHK29HSHN3aXgxODJQMW89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFCTFBGTnFxcS81OFZGYkJHYUZVQnN4Z29KaDRWeTdJRWVYZktjQkZMbzRXRi9ITUQzZHhEb1JEc3JITkJuRGtIdVhlOVNVRFVDbUw4WHFIR1Rxc0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaNUlrTzRwV0o1MlpkZkxMeDRlQTZJekQ5VWduRU1mdHJJTURqbW02TUJwM2t1MVZiVmlYei9BUXBxa2RteE9FSGwxUjVuWUNMcGliNEZkSW5FMVNnUT09In0sIm1lIjp7ImlkIjoiOTE3MDg2NjExNjE3OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVUNISUhBQV8t4pmhIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzA4NjYxMTYxNzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNkUDFWOWVSYnJzZFg4b3VSZmdBYng4UkFMN3lSdnFCaDdNSXNkZk5qOWEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDIyMTQzMzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRG8yIn0= ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === . 'mac' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === false false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'MAC-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === true false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === false 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === true false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === 784164 '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === false false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === false 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MAC',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
