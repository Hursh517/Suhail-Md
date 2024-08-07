const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "True" ;  
global.video= "True" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="praisechukwuemeka149@gmail.com"
global.location="anambra,Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "African/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "22960655765" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22960655765";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "True"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "True";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'available' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.co
global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_12_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICA2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNixcbiAgICAgICAgNyxcbiAgICAgICAgODQsXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxYSGY0NENKVkp1Q0RwOGxFd1J3di9Yak1LMEVHbDFUdVViZnpyRmgzOTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImF3MV9hbnFXUWtDckt0Vm9oRnY2MVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDljZjI1YmItYzM3MC00ODZkLTlhZDktZjdjNWZiNjM3ODMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgMTIsXG4gICAgICAyMjUsXG4gICAgICAxNjAsXG4gICAgICAyMDksXG4gICAgICAyMTYsXG4gICAgICAyMjYsXG4gICAgICAxMDIsXG4gICAgICAyNDcsXG4gICAgICAxMixcbiAgICAgIDE4LFxuICAgICAgMTczLFxuICAgICAgMjE0LFxuICAgICAgMTU5LFxuICAgICAgNTgsXG4gICAgICAyNDMsXG4gICAgICAxMzcsXG4gICAgICAxOSxcbiAgICAgIDEyMyxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgNTcsXG4gICAgICAxMTAsXG4gICAgICAyMDMsXG4gICAgICA4NyxcbiAgICAgIDU2LFxuICAgICAgMzAsXG4gICAgICAxMzksXG4gICAgICAxMzgsXG4gICAgICAxNTQsXG4gICAgICAxMDgsXG4gICAgICA1MCxcbiAgICAgIDEzNyxcbiAgICAgIDEzLFxuICAgICAgNzcsXG4gICAgICA0NyxcbiAgICAgIDEyNSxcbiAgICAgIDEyOCxcbiAgICAgIDEwMCxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJXSlNZOUdSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjk2MDY1NTc2NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI4NTY1NzEwODE1Mzk2OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2ajZOSUVFTldUeTdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSlRpd0pGVUNaNlVEME5EZmNDK0p3bklWYVRBeGFUUWhEQTRVOW9GM0lrYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4SHdMc1crK1NrU1ZhRjBPekl3c2dNYWdCK1krbmdRaHpMbTFpTGl5Z1BKL2lzY3B6Y2N6WXp1aGFuZFJzUW5HTUM3RWdUSUdqOC9zUHl0R29oNnRBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvd2l6U0tmQkdwRWV0M2VSaHJRRENpbGpXMDQxa3hJOVZld2VjRFpqVS9VeUFTTHRlMVgrdWYxWk1JYUZSL0NJMjdtaTF6NzIvWFRYdTl4dDFwMzBpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjk2MDY1NTc2NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTkzMTEzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION ID
module.expor

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'available' | 'online' | 'composing' | recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
