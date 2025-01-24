//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "shadowsknight@gmail.com";
global.location = "Douala, Cameroon";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Zoro-237/Queen_Anita_V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "237676980201";
global.owner = process.env.OWNER_NUMBER || "237676980201";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0luN2M4cjVYSDlrTzJRenc3S1BzTTBsclAwVmJCZWYrQ0JVRERqSG1GRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1OempkYk9kSjRYOEpyUE1Ma3RQYnpmdjZlUTA0Q0RKNG9UbWhmQjZFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSGNqVjB1TG5RN1JvM3lMN0p3SGxZK21NUjY5RE1icW0vQ3F0NXBVclZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmQUdWRmNYN0owQlg5TGxpYldydklzcG8vdkJLTlN4MXYwbVBUL29JSTIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPZzN6QjFNNmRnU0tCY1lvOGl4WTVSTmdGMDZ6RC94RnNoRlY0aVU4ME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRCalFIeXg2eEJ1OVp6S2ExMVNvRzZKQ2lWQXh3azQ3ODFpTmVSbHZIbTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhCbUp4YXZ1SWUvdzJtZlJTd0MySkY2N1FYSmNNcDdBSWVqL2FjQkJrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmNIYXQ0blgrWHNxTDRlUW1LMWpXVUNrMTlXQ2FwdTdOWXhWQzJXR0x6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNpYmt5cW9CNzNGS0tGa1cyQ3lLM1pwa0Y5Zm9aMzYzVCtXRXdPaVpjb29jT2RQa0tvYkE4a1c1WXl4WkZjNkx5YWY3K0hYSmplMWZleXdaRVBzTEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiJ0RzluYWRPNUpsOTJCRVRKckhEYkZPblZoUUNXNkphU0VmeDBQQTVZYS84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzekFKTmRaWVJlcUNqbGJEQ21USHpBIiwicGhvbmVJZCI6IjNmNmUyZjE1LTdiOGMtNDMxMy1iM2U5LTIyNGYzNWJkMjY1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaUHhjRlhENkVPZlpvQVJJNDZES2dsSnFtYzQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZjRVplU05IWlV5TFpWbGczcEQ4bzlaTVNudz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0puNjVZQUhFSkc0eTd3R0dCUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImEvelAwL3hSSnFFaHdrVEFSN0ROWEt4UVFiSHJ2aTJ2MHYzZ05uWDQ3UWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJTTFNqekl0eFNqVHVVa1NJRTF1V1FyNmVEeElpRVlTdGlBYzl2R0ZnZjJzL0ZzS1dQVFphcG5TYWp2N0d4WFd2emQ3NEpsc0d6NUNjazRDMWI3S0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDd0poeFJpdEJWekVOdzVYZndaaE5Sc25DdHZ1cHJhRHZmc0QvbTc0Yk5UUWZaU1hvbHNid2RxbFdpSDNveFRrQU1PeTBlSEUzT1ZUbGFDeFlReW1CUT09In0sIm1lIjp7ImlkIjoiMjM3Njc2OTgwMjAxOjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuS6lyDjgI7jgIZTSElOTU9O44CP5LqXIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY3Njk4MDIwMToyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXdjh6OVA4VVNhaEljSkV3RWV3elZ5c1VFR3g2NzR0cjlMOTREWjErTzBJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3Njc3ODU1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJlSCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`亗『SHINMON✫』亗`",
  author: process.env.PACK_AUTHER || "",
  packname: process.env.PACK_NAME || "亗『SHINMON✫』亗",
  botname: process.env.BOT_NAME || "亗『SHINMON✫』亗",
  ownername: process.env.OWNER_NAME || "亗『SHINMON✫』亗",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "亗『SHINMON✫』亗").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
