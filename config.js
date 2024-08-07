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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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
global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_09_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDk0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTczLFxuICAgICAgICA4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDkwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZnpkc1FHdjQ3enI4UGl2emMxbzRXM2xkMjg1UUVWWUVxdW0rdHBhd2c5bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSlhzX2ZtWlpTTWlsZUpuR0RHa25ZZ1wiLFxuICBcInBob25lSWRcIjogXCI4ZjgyOGQ0YS1jMDVkLTQxMDUtYWVjYy1hZDRkYWE1OGI2MmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMTEwLFxuICAgICAgOTEsXG4gICAgICAxNixcbiAgICAgIDIxNSxcbiAgICAgIDE1OCxcbiAgICAgIDI0NSxcbiAgICAgIDEzNyxcbiAgICAgIDE0MyxcbiAgICAgIDI1LFxuICAgICAgMyxcbiAgICAgIDEwNyxcbiAgICAgIDczLFxuICAgICAgMTIxLFxuICAgICAgMjQ4LFxuICAgICAgOTMsXG4gICAgICAxNDgsXG4gICAgICAyNDMsXG4gICAgICA3OSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDEzOSxcbiAgICAgIDEwMCxcbiAgICAgIDI1LFxuICAgICAgMTcxLFxuICAgICAgNSxcbiAgICAgIDIyOSxcbiAgICAgIDEzNSxcbiAgICAgIDIyNyxcbiAgICAgIDE3OCxcbiAgICAgIDgwLFxuICAgICAgMTQ1LFxuICAgICAgMTk4LFxuICAgICAgMCxcbiAgICAgIDk5LFxuICAgICAgMTQsXG4gICAgICA3MixcbiAgICAgIDUzLFxuICAgICAgNTksXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkJON1c4RThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyOTYwNjU1NzY1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjg1NjU3MTA4MTUzOTY6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZqNk5JRUVQSzl5clVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKVGl3SkZVQ1o2VUQwTkRmY0MrSnduSVZhVEF4YVRRaERBNFU5b0YzSWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjd0R2twREhDNktsVUtGaUVxZ0JZS05BV1MxNTRPNWpBcWtZbjBNRkFXUlpVTkxsdytudUJ6Y2ZFb0lNUXMzN3cyc29FNVdHbkZJMkZLQjF6RWtDUUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInE3MHRZQTE0bWNKZUo4ODRjRENtejJNRngrVXZWVnZnQVk4VVEyaHVBTklQM1NGRWZSNCtnWkVzTG9CN2tlZG9rR1NjQm4rWjhZU29HcFlldnpTRGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyOTYwNjU1NzY1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5ODIxMzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUUFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhRQS5qc29uIjogIntcImtleURhdGFcIjpcImJZK3dsVEtXa2JVbmowTTN0eEVNYklWaDMybjRnMGxIQW9QZHEzNlRqVkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0NzQyNDkyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION ID
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
