const fs = require('fs')

exports.groupResponse_Remove = async (conn, update) => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{
	image: { url: ppuser }, 
caption: `โญโโโโโโโโโโโโโโโโโขเธด.โขเฎ\nโ *๐Leave To ${metadata.subject}* \nโโฌโโโโโโโโโโโโโพโขเธด.โขโฝ\nโโคSampai jumpa kembali ๐ @${num.split("@")[0]}\nโโ \nโโโโโโโโโโโโโโพโขเธด.โขโฝ`,
buttons: button,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (conn, update) => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
	image: { url: ppuser }, 
caption: `โญโโโโโโโโโโโโโโโโโขเธด.โขเฎ\nโ *๐ Assalamualaikum | Welcome To ${metadata.subject}* \nโโฌโโโโโโโโโโโโโพโขเธด.โขโฝ\nโโคHaii๐ @${num.split("@")[0]}\nโโ \nโโโโ[ *ษชษดแดสแด* ]โโ\nโโ ๐ษดแดแดแด:\nโโ ๐แดแดแดส:\nโโ ๐ขแดsแดแดแด: \nโโโโโโโโโโโโโโพโขเธด.โขโฝ`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat๐'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan menjadi member biasa*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}