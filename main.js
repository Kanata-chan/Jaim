'use strict';const _0x1f0e57=_0x2e14;function _0x2e14(_0x423c9b,_0x3bf51b){const _0x195ef2=_0x195e();return _0x2e14=function(_0x2e14e0,_0x3f9693){_0x2e14e0=_0x2e14e0-0xa3;let _0x1861e3=_0x195ef2[_0x2e14e0];return _0x1861e3;},_0x2e14(_0x423c9b,_0x3bf51b);}(function(_0x4fd097,_0x49e314){const _0x24c13f=_0x2e14,_0x5e70a9=_0x4fd097();while(!![]){try{const _0x4ea4d5=parseInt(_0x24c13f(0xc1))/0x1*(parseInt(_0x24c13f(0xca))/0x2)+parseInt(_0x24c13f(0xe0))/0x3+-parseInt(_0x24c13f(0xa6))/0x4+-parseInt(_0x24c13f(0xe6))/0x5+-parseInt(_0x24c13f(0xdb))/0x6+parseInt(_0x24c13f(0xb8))/0x7*(parseInt(_0x24c13f(0xbe))/0x8)+parseInt(_0x24c13f(0xaf))/0x9;if(_0x4ea4d5===_0x49e314)break;else _0x5e70a9['push'](_0x5e70a9['shift']());}catch(_0x1e555c){_0x5e70a9['push'](_0x5e70a9['shift']());}}}(_0x195e,0x4b737));const {default:makeWASocket,DisconnectReason,useSingleFileAuthState,makeInMemoryStore,downloadContentFromMessage,jidDecode,generateForwardMessageContent,generateWAMessageFromContent}=require(_0x1f0e57(0xd1)),fs=require('fs'),chalk=require(_0x1f0e57(0xad)),logg=require(_0x1f0e57(0xc8)),{serialize,fetchJson,sleep,getBuffer}=require('./lib/myfunc'),{nocache,uncache}=require('./lib/chache.js'),{groupResponse_Welcome,groupResponse_Remove,groupResponse_Promote,groupResponse_Demote}=require(_0x1f0e57(0xf5)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x1f0e57(0xb6));let setting=JSON[_0x1f0e57(0xd9)](fs[_0x1f0e57(0xac)](_0x1f0e57(0xb0))),session='./'+setting[_0x1f0e57(0xea)]+_0x1f0e57(0xf0);const {state,saveState}=useSingleFileAuthState(session),memory=makeInMemoryStore({'logger':logg()['child']({'level':_0x1f0e57(0xb2),'stream':_0x1f0e57(0xeb)})}),connectToWhatsApp=async()=>{const _0x4b4c28=_0x1f0e57,_0x57295d=makeWASocket({'printQRInTerminal':!![],'logger':logg({'level':'fatal'}),'browser':[_0x4b4c28(0xc2),_0x4b4c28(0xcc),_0x4b4c28(0xa7)],'auth':state});return memory['bind'](_0x57295d['ev']),_0x57295d['ev']['on'](_0x4b4c28(0xc7),async _0x2241b7=>{const _0x5c2d1b=_0x4b4c28;var _0x1b002e=_0x2241b7[_0x5c2d1b(0xc4)][0x0];if(!_0x2241b7[_0x5c2d1b(0xc4)])return;if(_0x1b002e['key']&&_0x1b002e[_0x5c2d1b(0xef)][_0x5c2d1b(0xc9)]==_0x5c2d1b(0xb9))return;_0x1b002e=serialize(_0x57295d,_0x1b002e),_0x1b002e[_0x5c2d1b(0xa9)]=_0x1b002e['key']['id'][_0x5c2d1b(0xd4)](_0x5c2d1b(0xda))||_0x1b002e[_0x5c2d1b(0xef)]['id'][_0x5c2d1b(0xd4)](_0x5c2d1b(0xf1)),require(_0x5c2d1b(0xd3))(_0x57295d,_0x1b002e,_0x2241b7,setting,memory);}),_0x57295d['ev']['on'](_0x4b4c28(0xe1),()=>saveState),_0x57295d[_0x4b4c28(0xd2)]=(_0xb25161,_0x11145a,_0x2a78f1)=>_0x57295d['sendMessage'](_0xb25161,{'text':_0x11145a},{'quoted':_0x2a78f1}),_0x57295d['ws']['on']('CB:call',async _0x153aba=>{const _0x5b7939=_0x4b4c28,_0x1dfba5=_0x153aba[_0x5b7939(0xd6)][0x0][_0x5b7939(0xce)][_0x5b7939(0xde)];_0x57295d[_0x5b7939(0xf4)](_0x1dfba5,{'text':'Maaf\x20kamu\x20terdeteksi\x20telepon\x20bot!\x0a5\x20detik\x20lagi\x20kamu\x20akan,\x0adiblokir\x20otomatis\x20oleh\x20bot.'}),await sleep(0x1388),_0x57295d[_0x5b7939(0xba)](_0x1dfba5,_0x5b7939(0xe2));}),_0x57295d['ev']['on'](_0x4b4c28(0xb7),_0x2f89e2=>{const _0x17c02f=_0x4b4c28;console[_0x17c02f(0xcf)](_0x17c02f(0xaa),_0x2f89e2);if(_0x2f89e2[_0x17c02f(0xd7)]==='open')console[_0x17c02f(0xcf)]('Connected\x20with\x20'+_0x57295d[_0x17c02f(0xb4)]['id']);else{if(_0x2f89e2[_0x17c02f(0xd7)]===_0x17c02f(0xec))connectToWhatsApp();}}),_0x57295d['ev']['on']('group-participants.update',async _0x31380b=>{const _0x4d2973=_0x4b4c28;groupResponse_Demote(_0x57295d,_0x31380b),groupResponse_Promote(_0x57295d,_0x31380b),groupResponse_Welcome(_0x57295d,_0x31380b),groupResponse_Remove(_0x57295d,_0x31380b),console[_0x4d2973(0xcf)](_0x31380b);}),_0x57295d[_0x4b4c28(0xb5)]=async(_0x417916,_0x52a91c,_0x2e9ebc='',_0x47bbde='',_0x18090d)=>{const _0xdc8037=_0x4b4c28;let _0x393efd=Buffer[_0xdc8037(0xe5)](_0x52a91c)?_0x52a91c:/^data:.*?\/.*?;base64,/i[_0xdc8037(0xab)](_0x52a91c)?Buffer[_0xdc8037(0xe8)](_0x52a91c[_0xdc8037(0xae)]`,`[0x1],_0xdc8037(0xbc)):/^https?:\/\//['test'](_0x52a91c)?await await getBuffer(_0x52a91c):fs['existsSync'](_0x52a91c)?fs['readFileSync'](_0x52a91c):Buffer['alloc'](0x0);return await _0x57295d[_0xdc8037(0xf4)](_0x417916,{'image':_0x393efd,'caption':_0x2e9ebc,..._0x18090d},{'quoted':_0x47bbde});},_0x57295d[_0x4b4c28(0xed)]=_0x1db664=>{const _0xc50b69=_0x4b4c28;if(!_0x1db664)return _0x1db664;if(/:\d+@/gi[_0xc50b69(0xab)](_0x1db664)){let _0x499cbf=jidDecode(_0x1db664)||{};return _0x499cbf[_0xc50b69(0xb4)]&&_0x499cbf[_0xc50b69(0xcb)]&&_0x499cbf['user']+'@'+_0x499cbf[_0xc50b69(0xcb)]||_0x1db664;}else return _0x1db664;},_0x57295d[_0x4b4c28(0xa3)]=async(_0x4cf2bb,_0x3fd7ed,_0x583edd)=>{const _0x94b63a=_0x4b4c28;if(_0x3fd7ed===_0x94b63a(0xee)){var _0x260d6e=await downloadContentFromMessage(_0x4cf2bb[_0x94b63a(0xb3)][_0x94b63a(0xc5)]||_0x4cf2bb['message'][_0x94b63a(0xdf)]?.[_0x94b63a(0xc6)][_0x94b63a(0xd8)][_0x94b63a(0xc5)],_0x94b63a(0xee));let _0x451bb3=Buffer[_0x94b63a(0xe8)]([]);for await(const _0x351b01 of _0x260d6e){_0x451bb3=Buffer[_0x94b63a(0xbf)]([_0x451bb3,_0x351b01]);}return fs[_0x94b63a(0xe4)](_0x583edd,_0x451bb3),_0x583edd;}else{if(_0x3fd7ed==='video'){var _0x260d6e=await downloadContentFromMessage(_0x4cf2bb[_0x94b63a(0xb3)][_0x94b63a(0xbd)]||_0x4cf2bb[_0x94b63a(0xb3)][_0x94b63a(0xdf)]?.[_0x94b63a(0xc6)]['quotedMessage']['videoMessage'],_0x94b63a(0xf2));let _0x25317c=Buffer[_0x94b63a(0xe8)]([]);for await(const _0xba984f of _0x260d6e){_0x25317c=Buffer[_0x94b63a(0xbf)]([_0x25317c,_0xba984f]);}return fs['writeFileSync'](_0x583edd,_0x25317c),_0x583edd;}else{if(_0x3fd7ed===_0x94b63a(0xa8)){var _0x260d6e=await downloadContentFromMessage(_0x4cf2bb[_0x94b63a(0xb3)]['stickerMessage']||_0x4cf2bb[_0x94b63a(0xb3)][_0x94b63a(0xdf)]?.[_0x94b63a(0xc6)]['quotedMessage'][_0x94b63a(0xc0)],_0x94b63a(0xa8));let _0x399d90=Buffer[_0x94b63a(0xe8)]([]);for await(const _0x1e498f of _0x260d6e){_0x399d90=Buffer[_0x94b63a(0xbf)]([_0x399d90,_0x1e498f]);}return fs[_0x94b63a(0xe4)](_0x583edd,_0x399d90),_0x583edd;}else{if(_0x3fd7ed==='audio'){var _0x260d6e=await downloadContentFromMessage(_0x4cf2bb[_0x94b63a(0xb3)]['audioMessage']||_0x4cf2bb[_0x94b63a(0xb3)]['extendedTextMessage']?.[_0x94b63a(0xc6)][_0x94b63a(0xd8)][_0x94b63a(0xe7)],_0x94b63a(0xe3));let _0x5908c7=Buffer[_0x94b63a(0xe8)]([]);for await(const _0x16b47e of _0x260d6e){_0x5908c7=Buffer['concat']([_0x5908c7,_0x16b47e]);}return fs[_0x94b63a(0xe4)](_0x583edd,_0x5908c7),_0x583edd;}}}}},_0x57295d[_0x4b4c28(0xd0)]=async(_0x14b03e,_0x595897,_0x2f9a8d,_0x5436d2={})=>{const _0x2c0be9=_0x4b4c28;let _0x31c0e7=Buffer[_0x2c0be9(0xe5)](_0x595897)?_0x595897:/^data:.*?\/.*?;base64,/i[_0x2c0be9(0xab)](_0x595897)?Buffer[_0x2c0be9(0xe8)](_0x595897[_0x2c0be9(0xae)]`,`[0x1],'base64'):/^https?:\/\//[_0x2c0be9(0xab)](_0x595897)?await await getBuffer(_0x595897):fs[_0x2c0be9(0xe9)](_0x595897)?fs['readFileSync'](_0x595897):Buffer['alloc'](0x0),_0x1feb43;_0x5436d2&&(_0x5436d2[_0x2c0be9(0xa4)]||_0x5436d2[_0x2c0be9(0xdc)])?_0x1feb43=await writeExifImg(_0x31c0e7,_0x5436d2):_0x1feb43=await imageToWebp(_0x31c0e7),await _0x57295d['sendMessage'](_0x14b03e,{'sticker':{'url':_0x1feb43},..._0x5436d2},{'quoted':_0x2f9a8d})[_0x2c0be9(0xf3)](_0x4fa5a5=>{const _0x8ea4a9=_0x2c0be9;return fs[_0x8ea4a9(0xa5)](_0x1feb43),_0x4fa5a5;});},_0x57295d['sendVideoAsSticker']=async(_0x101b23,_0x4ab47c,_0x1612b5,_0x4a19a3={})=>{const _0x35736b=_0x4b4c28;let _0x398481=Buffer[_0x35736b(0xe5)](_0x4ab47c)?_0x4ab47c:/^data:.*?\/.*?;base64,/i[_0x35736b(0xab)](_0x4ab47c)?Buffer[_0x35736b(0xe8)](_0x4ab47c[_0x35736b(0xae)]`,`[0x1],_0x35736b(0xbc)):/^https?:\/\//[_0x35736b(0xab)](_0x4ab47c)?await await getBuffer(_0x4ab47c):fs['existsSync'](_0x4ab47c)?fs['readFileSync'](_0x4ab47c):Buffer[_0x35736b(0xb1)](0x0),_0x1a8ee5;_0x4a19a3&&(_0x4a19a3[_0x35736b(0xa4)]||_0x4a19a3[_0x35736b(0xdc)])?_0x1a8ee5=await writeExifVid(_0x398481,_0x4a19a3):_0x1a8ee5=await videoToWebp(_0x398481),await _0x57295d[_0x35736b(0xf4)](_0x101b23,{'sticker':{'url':_0x1a8ee5},..._0x4a19a3},{'quoted':_0x1612b5})[_0x35736b(0xf3)](_0xa3fe5b=>{const _0x980443=_0x35736b;return fs[_0x980443(0xa5)](_0x1a8ee5),_0xa3fe5b;});},_0x57295d['setStatus']=_0x2aacfe=>{const _0x54dbff=_0x4b4c28;return _0x57295d[_0x54dbff(0xc3)]({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':_0x54dbff(0xbb),'xmlns':_0x54dbff(0xcd)},'content':[{'tag':_0x54dbff(0xcd),'attrs':{},'content':Buffer[_0x54dbff(0xe8)](_0x2aacfe,_0x54dbff(0xdd))}]}),_0x2aacfe;},_0x57295d;};function _0x195e(){const _0x37155f=['key','.json','3EB0','video','then','sendMessage','./lib/group.js','downloadAndSaveMediaMessage','packname','unlinkSync','1326184CibWUs','1.0.0','sticker','isBaileys','Connection\x20update:','test','readFileSync','chalk','split','2250279dWFxcA','./config.json','alloc','fatal','message','user','sendImage','./lib/Upload_Url','connection.update','654605sbAOoC','status@broadcast','updateBlockStatus','set','base64','videoMessage','8fSCmhC','concat','stickerMessage','13276CLMjNp','Xyna\x20Botz','query','messages','imageMessage','contextInfo','messages.upsert','pino','remoteJid','24jhRKeD','server','Safari','status','attrs','log','sendImageAsSticker','@adiwajshing/baileys','reply','./index','startsWith','catch','content','connection','quotedMessage','parse','BAE5','2084988qzsPhs','author','utf-8','call-creator','extendedTextMessage','1617846wyRPMo','creds.update','block','audio','writeFileSync','isBuffer','270245iNNbxe','audioMessage','from','existsSync','sessionName','store','close','decodeJid','image'];_0x195e=function(){return _0x37155f;};return _0x195e();}connectToWhatsApp()[_0x1f0e57(0xd5)](_0x27f933=>console[_0x1f0e57(0xcf)](_0x27f933));