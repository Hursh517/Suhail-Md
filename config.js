const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "True" ;  
global.video= "True" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="chukwuemekapraise357@gmail.com "
global.location="anambra,Nigeria."


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


global.devs = "22960655765" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22960655765";




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
global.waPresence= process.env.WAPRESENCE ||  "available for always online,composing for typing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_14_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICA4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTldwN0ZWVGNZU2VmNmpya3pEQU5Kd2s5RXRLQnZsdDZETkpHNVl4TGRETT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibnlRUGlacU9RZzJpU1ptWnotNVUwZ1wiLFxuICBcInBob25lSWRcIjogXCI2ZDI4NmM0Yi1mNWIzLTQxYTYtODc4NC1mNmFiNGI0ODI1ZmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTM2LFxuICAgICAgMTY2LFxuICAgICAgMjA3LFxuICAgICAgNDMsXG4gICAgICAxNTIsXG4gICAgICAyMTYsXG4gICAgICA1NCxcbiAgICAgIDQsXG4gICAgICAyNTIsXG4gICAgICA1OCxcbiAgICAgIDExOSxcbiAgICAgIDE3MSxcbiAgICAgIDIwMixcbiAgICAgIDEyMyxcbiAgICAgIDYsXG4gICAgICAxNjcsXG4gICAgICA3NSxcbiAgICAgIDIxMyxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDE0MSxcbiAgICAgIDcyLFxuICAgICAgNjcsXG4gICAgICAxMDIsXG4gICAgICAyMjIsXG4gICAgICAxNzYsXG4gICAgICA4MyxcbiAgICAgIDIzLFxuICAgICAgMTg3LFxuICAgICAgMCxcbiAgICAgIDI1MSxcbiAgICAgIDc5LFxuICAgICAgNjcsXG4gICAgICAxMzEsXG4gICAgICAyMDcsXG4gICAgICAzOSxcbiAgICAgIDE0LFxuICAgICAgNzQsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlJRN1JZSkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyOTYwNjU1NzY1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjg1NjU3MTA4MTUzOTY6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnJqNk5JRUVLU0l5clVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKVGl3SkZVQ1o2VUQwTkRmY0MrSnduSVZhVEF4YVRRaERBNFU5b0YzSWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInk2RjFTTklsblZpNzBiblNQQjdwQkc5UXdwRHJmVENYR1J0WkZHTklwWVBKVGhaQTg4MW9haEhTWS9mMmk0eDdKSFhGUmpDWHM3SUY1aXdzc2gyMkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitzMTFVNENsZEk0dEtvNXJacitiSk9rK3BqWE9ueG5zM1pOWEhuL0JSSDNrT1FYTjhEZ3crUlA3MmtTWDJ0LzRnOHRtblJLTEx4aGh6RWYvMkdUZ0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyOTYwNjU1NzY1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NzUyNzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUUFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhRQS5qc29uIjogIntcImtleURhdGFcIjpcImJZK3dsVEtXa2JVbmowTTN0eEVNYklWaDMybjRnMGxIQW9QZHEzNlRqVkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0NzQyNDkyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'available' | 'online' | 'composing' | recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
