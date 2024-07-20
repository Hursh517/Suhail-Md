const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_53_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMxLFxuICAgICAgICA5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid3g5a05XTW4zWjkxNmNkVE5zdXg0ZGNIekdnNXRiQUpOK3BIcm5HZVZIND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkZiNGZsbnZTMXFRcHFuRlQ5el9NZ1wiLFxuICBcInBob25lSWRcIjogXCI3YTlhODgyYy0zYTg3LTQ3ZmQtODViNC03MGEyZTRjNjVjNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgNDIsXG4gICAgICAxODEsXG4gICAgICA2MyxcbiAgICAgIDQxLFxuICAgICAgMTYxLFxuICAgICAgMTI5LFxuICAgICAgOTIsXG4gICAgICAyMTksXG4gICAgICA2NSxcbiAgICAgIDExMyxcbiAgICAgIDI0LFxuICAgICAgMTU4LFxuICAgICAgMTYsXG4gICAgICAxMjMsXG4gICAgICA3NyxcbiAgICAgIDE4LFxuICAgICAgNCxcbiAgICAgIDE4OCxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDIwMCxcbiAgICAgIDEyNCxcbiAgICAgIDMwLFxuICAgICAgMTQyLFxuICAgICAgMTkyLFxuICAgICAgMzQsXG4gICAgICAxNDMsXG4gICAgICAzNCxcbiAgICAgIDE3OSxcbiAgICAgIDIyOSxcbiAgICAgIDI0OCxcbiAgICAgIDE5OSxcbiAgICAgIDMxLFxuICAgICAgMTU4LFxuICAgICAgOTEsXG4gICAgICA3MixcbiAgICAgIDIyMyxcbiAgICAgIDEwOCxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGRUEyNEo3QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI5NjA2NTU3NjU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI4NTY1NzEwODE1Mzk2OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmpqNk5JRUVKdXU3clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKVGl3SkZVQ1o2VUQwTkRmY0MrSnduSVZhVEF4YVRRaERBNFU5b0YzSWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlEzaTZuZml1MkZzdndwTFdlbG5xSThvRUZ4dE5lRWVXTklnbksvaDZQZU91WlVRam1WL2tmdklSNlJua2MxcFIxWU5ZYy9sWDVoNEFWL2UzMlhCUkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpReTFIYTVNK2pKbjJIVjl0cGlwWVh2NWJBK3VGbG4wRlNNY05tazdHTGNEV1R1TTJkRVV2MkxVcXliMEszdWdZYWdNRmVhb1Y3eTZ2c0NaVnpRekRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyOTYwNjU1NzY1OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ3Mjc5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhRQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFFBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYlkrd2xUS1drYlVuajBNM3R4RU1iSVZoMzJuNGcwbEhBb1BkcTM2VGpWST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ3NDI0OTIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NzI3OTYwMjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
