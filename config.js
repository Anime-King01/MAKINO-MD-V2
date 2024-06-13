const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "2348133286181";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2348133286181" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2348133286181";// Also owner number
global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"8IXPWA0RNnr6MyYO+nIEfBH1W3x/0dUdiyGsPqRa+EU="},"public":{"type":"Buffer","data":"DjS7x4EczXQm+08aigj0cEm0hc7soW9IeRE8IT3962c="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4DD9o4Fs3bE6GY0n4lvJQLdEVEv1PoDWz8zZwM07R2A="},"public":{"type":"Buffer","data":"vBBc6qV862KCIDWId9GIRRYa6u2qyupNX26VRWzq8ww="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"uL+tOU6HUBJt6WQSekMY3rkINS3QbM1koELylf7jh2c="},"public":{"type":"Buffer","data":"hnDGiZeUr/A6NP0UX9ykZJRSDuzwPaCxQRZEwrE3L0o="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CHbQPvM4iuBGhwGnGfRP5rmNdofAt7TtlVc+AN0OSWw="},"public":{"type":"Buffer","data":"ckfiDsy/3bPMJhLxzyUW+kGuKnbL7hSMUHn2GUuO1Ao="}},"signature":{"type":"Buffer","data":"7nRCXZqFZbyB7EyJMMdaoywfUhaVaIP5j8oNKA/Eep9YG+UoEDBdG2jRj2X5ITwuf3TnETvslo48r7TqJSaGAw=="},"keyId":1},"registrationId":136,"advSecretKey":"oRgp55SQwNEdLZJWnXDk3GjlegAPpkJQCiOlBaVdkp4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Pvp25iESTj6QDlg1wnuj7A","phoneId":"416a352d-bd87-4955-bcc9-e7286d653415","identityId":{"type":"Buffer","data":"SCrW+I1ltBBlZpd7D61uwo4znsw="},"registered":true,"backupToken":{"type":"Buffer","data":"C0iio/54We1iJ8DcLU0TMj2wgOo="},"registration":{},"pairingCode":"BZHVVWG6","me":{"id":"2348133286181:38@s.whatsapp.net","name":"𝚴𝚯 𝚴𝚫𝚳𝚵 𝚳𝐃"},"account":{"details":"CLXevKkHEOCxrbMGGAcgACgA","accountSignatureKey":"KqeAPEy+hmvglVQiWdoUmmznCKxWhdGcNe+fffx8iQI=","accountSignature":"6Lv6dJnE/yrVZlXuE/mpwnj6J+Q5QNL4mGyr5i9hQF9ieMOLBJxBLCS/ttow6cvhIdnuhS/6s8wPMCR/qXkOCg==","deviceSignature":"QHbPXvf7YSW0vaUIn3dTT/zUH51D4kZX/injjrBYvNPGu7ty6mAfzAJjTakwxiD09RnmxfG8CECBYLca3xy0Cg=="},"signalIdentities":[{"identifier":{"name":"2348133286181:38@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSqngDxMvoZr4JVUIlnaFJps5wisVoXRnDXvn338fIkC"}}],"platform":"smba","lastAccountSyncTimestamp":1718311149}"; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "No Name MD";// Owner Name
global.BotName = "No Name MD";//Do not change 🥵
global.packname = process.env.PACKNAME || "No Name Tech";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || ""; //Session ID here.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["/"];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
