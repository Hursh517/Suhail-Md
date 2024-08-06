const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "True" ;  
global.video= "True" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="chukwuemekapraise357@gmail.com "
global.location="awka,Nigeria."


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_49_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTczLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNixcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICA2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnSllRRElDdEJDZHgrUXp1NU4xaVZSeDZQbGxLdHFha201bVdCd2tGeVJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyOTU2NjIxOTAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0OURERTE5NzBFMDU4REIyRDhDNDM4MjkxRDA5NDhCMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5ODA5NDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZS1kZEJDcENTZHFGU295ckxVWmdsd1wiLFxuICBcInBob25lSWRcIjogXCI1OGZkMTA4YS0zOTZmLTRmY2YtODUxYy0zNTBjM2M5YTY2OGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICA3MixcbiAgICAgIDE1MyxcbiAgICAgIDEyOCxcbiAgICAgIDEyLFxuICAgICAgMTIwLFxuICAgICAgMjgsXG4gICAgICAzNyxcbiAgICAgIDE0MSxcbiAgICAgIDIxNCxcbiAgICAgIDE2NCxcbiAgICAgIDEyOSxcbiAgICAgIDM0LFxuICAgICAgMTQxLFxuICAgICAgMTIzLFxuICAgICAgMjUzLFxuICAgICAgMjQ0LFxuICAgICAgMjAwLFxuICAgICAgMTc5LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTczLFxuICAgICAgMjQ5LFxuICAgICAgMTg2LFxuICAgICAgMTc0LFxuICAgICAgMjM1LFxuICAgICAgNjcsXG4gICAgICAxNjUsXG4gICAgICAxOTcsXG4gICAgICAyMjUsXG4gICAgICA2LFxuICAgICAgMjM5LFxuICAgICAgMjM2LFxuICAgICAgMjQ2LFxuICAgICAgMjQ1LFxuICAgICAgNzIsXG4gICAgICA3OSxcbiAgICAgIDc0LFxuICAgICAgMTg0LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEdaV1dXSjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyOTU2NjIxOTAwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJow7xyc2ggU3TDtSBOeVwiLFxuICAgIFwibGlkXCI6IFwiMTU5MDQ3NDIwNDg5ODQ4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXVJclVRUXdyVEt0UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrWjBnSldGbmdTTlBwNmhQWENRYkZpeG5Ud25nc1pyWnNiZ3l2Z0tHakZRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIms0VGNic1U0SWM5VndkNmJDLzBIYkQ2dnF5TnpjbkF2YlduZDJiVHRXMCtVUFNQbmp4V1ZnWmJGQmJGL3NuVStzNWxOc2V0T0JRQ1NLZFp1bHFsSUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9YQUo4M0IvYVVKOE5xMkFIVHk5dDI4WWVoWnlqRDVrOW9seWJ2dnZTOUJBOHBTeHJlVW9RQmpRYjdKdnFweFNSNmdsRDMzRm0yRUtlYkVqOEQwc0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyOTU2NjIxOTAwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5ODA5MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMMGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwwaC5qc29uIjogIntcImtleURhdGFcIjpcInRhcDhHdWNxYXBieDI4aHlEKzFaSnRnSDBLV1RHbnBPclJZeVpRUFh4b3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzMzQ0NzE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1MzUyNjY0NzFcIn0iCn0=" // PUT your SESSION_ID 


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
