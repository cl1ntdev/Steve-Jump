const _0x2b879f=_0x53a0;(function(_0x5ccb3d,_0x4002af){const _0x8f4d47=_0x53a0,_0x27071a=_0x5ccb3d();while(!![]){try{const _0x1536b3=-parseInt(_0x8f4d47(0x1eb))/(0x1885+-0x12*-0x165+-0x1b6*0x1d)+-parseInt(_0x8f4d47(0x260))/(0x120a+-0x1ff3+-0x1*-0xdeb)*(-parseInt(_0x8f4d47(0x20c))/(-0xc59+-0xd*0x105+-0x1*-0x199d))+parseInt(_0x8f4d47(0x1fd))/(0x25*-0x67+-0x3d*-0x2f+0x6*0x9e)+-parseInt(_0x8f4d47(0x1cc))/(0x1b74+0xaf8+-0x2667)*(parseInt(_0x8f4d47(0x197))/(-0x1*0x22de+0xd20+-0x2*-0xae2))+parseInt(_0x8f4d47(0x164))/(-0xc44+0x59*-0x19+0x14fc)+-parseInt(_0x8f4d47(0x20b))/(0x1c7+0xda0*0x1+-0xf5f)*(parseInt(_0x8f4d47(0x12a))/(-0x4*0x93c+0x20d2*-0x1+-0x11*-0x41b))+parseInt(_0x8f4d47(0x15b))/(0x2d9+-0x8c7+0x8*0xbf);if(_0x1536b3===_0x4002af)break;else _0x27071a['push'](_0x27071a['shift']());}catch(_0x72c66d){_0x27071a['push'](_0x27071a['shift']());}}}(_0x6fea,0x1*-0x13f71d+0x38*-0x4d6f+-0x7*-0x6ed91));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';function _0x53a0(_0x151888,_0x52695a){const _0x415f73=_0x6fea();return _0x53a0=function(_0x5d7fd4,_0x2eeda4){_0x5d7fd4=_0x5d7fd4-(0x1f82+0x1*0x5+-0x1e67);let _0xfee23a=_0x415f73[_0x5d7fd4];return _0xfee23a;},_0x53a0(_0x151888,_0x52695a);}import{getDatabase,ref,push,onValue,remove,update}from'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';const appSettings={'databaseURL':_0x2b879f(0x161)+_0x2b879f(0x1ba)+_0x2b879f(0x1ad)+_0x2b879f(0x14e)+_0x2b879f(0x17e)+'m/'},app=initializeApp(appSettings),database=getDatabase(app),playersInDB=ref(database,_0x2b879f(0x179)),commentsInDB=ref(database,_0x2b879f(0x167));document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x255)+'on')[_0x2b879f(0x22b)+_0x2b879f(0x1ae)](_0x2b879f(0x150),()=>{const _0xc8e029=_0x2b879f,_0xd7895a={'GCnEl':_0xc8e029(0x1b2),'wXREo':_0xc8e029(0x1f2),'KhPuu':function(_0x32c91e,_0x5c3ca9,_0xf5ad41){return _0x32c91e(_0x5c3ca9,_0xf5ad41);}};let _0x45d7d6=document[_0xc8e029(0x1a4)+_0xc8e029(0x173)](_0xd7895a[_0xc8e029(0x1b3)])[_0xc8e029(0x190)][_0xc8e029(0x1b5)](),_0x3052d1=document[_0xc8e029(0x1a4)+_0xc8e029(0x173)](_0xd7895a[_0xc8e029(0x20e)])[_0xc8e029(0x190)][_0xc8e029(0x1b5)]();_0xd7895a[_0xc8e029(0x22a)](checkPlayers,_0x45d7d6,_0x3052d1);}),document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x138)+_0x2b879f(0x1bb))[_0x2b879f(0x22b)+_0x2b879f(0x1ae)](_0x2b879f(0x150),()=>{const _0x1adc6c=_0x2b879f,_0x2e3659={'ogsrw':function(_0x3b417b){return _0x3b417b();}};_0x2e3659[_0x1adc6c(0x1f5)](registerPlayer);}),document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x1b4)+_0x2b879f(0x16f))[_0x2b879f(0x1c9)][_0x2b879f(0x22e)]=_0x2b879f(0x204),document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x165))[_0x2b879f(0x1c9)][_0x2b879f(0x22e)]=_0x2b879f(0x204),document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x15c))[_0x2b879f(0x1c9)][_0x2b879f(0x22e)]=_0x2b879f(0x263),document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x1d2)+_0x2b879f(0x1f6))[_0x2b879f(0x1c9)][_0x2b879f(0x22e)]=_0x2b879f(0x204),document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x214))[_0x2b879f(0x1c9)][_0x2b879f(0x22e)]=_0x2b879f(0x204),document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x149))[_0x2b879f(0x22b)+_0x2b879f(0x1ae)](_0x2b879f(0x150),()=>{const _0x2d2f5d=_0x2b879f,_0x239995={'lDarf':_0x2d2f5d(0x1b4)+_0x2d2f5d(0x16f),'bEfzw':_0x2d2f5d(0x204),'hPNkO':_0x2d2f5d(0x15c),'cajAR':_0x2d2f5d(0x263)};document[_0x2d2f5d(0x1c4)+_0x2d2f5d(0x1c7)](_0x239995[_0x2d2f5d(0x1d0)])[_0x2d2f5d(0x1c9)][_0x2d2f5d(0x22e)]=_0x239995[_0x2d2f5d(0x251)],document[_0x2d2f5d(0x1c4)+_0x2d2f5d(0x1c7)](_0x239995[_0x2d2f5d(0x12b)])[_0x2d2f5d(0x1c9)][_0x2d2f5d(0x22e)]=_0x239995[_0x2d2f5d(0x245)];});function checkPlayers(_0x422291,_0xdfa6c1){const _0x852d28=_0x2b879f,_0x54c070={'iNIaO':function(_0x1699fd,_0x3609cf){return _0x1699fd(_0x3609cf);},'webmb':_0x852d28(0x13b)+_0x852d28(0x1d6),'JixpK':function(_0x38bdca){return _0x38bdca();},'rrpav':function(_0xa5a407,_0x569e17){return _0xa5a407<_0x569e17;},'FSKrc':function(_0x1e592e,_0x1ac660){return _0x1e592e===_0x1ac660;},'bSkKh':function(_0x247791,_0x5d5192){return _0x247791(_0x5d5192);},'fzcIN':_0x852d28(0x158),'JqmFw':function(_0x95d92f,_0x5db157,_0x4bb703){return _0x95d92f(_0x5db157,_0x4bb703);}};_0x54c070[_0x852d28(0x23d)](onValue,playersInDB,function(_0x39b76c){const _0xdc0e29=_0x852d28;if(!_0x39b76c[_0xdc0e29(0x187)]())_0x54c070[_0xdc0e29(0x12e)](alert,_0x54c070[_0xdc0e29(0x212)]),_0x54c070[_0xdc0e29(0x166)](registerPlayer);else{let _0x36d0be=Object[_0xdc0e29(0x215)](_0x39b76c[_0xdc0e29(0x239)]());console[_0xdc0e29(0x1bf)](_0x36d0be[-0x9ae*0x2+0x1afe+0x7a2*-0x1][-0xb*0x198+0x13c3+-0x23a][_0xdc0e29(0x1b2)]);for(let _0x2b6ac1=-0x215f*-0x1+-0x21f5+0xa*0xf;_0x54c070[_0xdc0e29(0x1d1)](_0x2b6ac1,_0x36d0be[_0xdc0e29(0x24f)]);_0x2b6ac1++){_0x54c070[_0xdc0e29(0x12d)](_0x36d0be[_0x2b6ac1][-0xbc*-0x2+-0x4a*-0x3e+-0x1363*0x1][_0xdc0e29(0x1b2)],_0x422291)&&(_0x54c070[_0xdc0e29(0x12d)](_0x36d0be[_0x2b6ac1][-0x1198+-0x24a6*0x1+-0x363f*-0x1][_0xdc0e29(0x1f2)],_0xdfa6c1)&&(_0x54c070[_0xdc0e29(0x1f7)](startGame,_0x36d0be[_0x2b6ac1]),console[_0xdc0e29(0x1bf)](_0x54c070[_0xdc0e29(0x252)])));}}});}function registerPlayer(){const _0x453e74=_0x2b879f,_0x1d70a6={'gBPwB':function(_0x3df168,_0x4964e1,_0x355ac3){return _0x3df168(_0x4964e1,_0x355ac3);},'AOBSG':function(_0x2a9d4b,_0x2e41fb){return _0x2a9d4b(_0x2e41fb);},'ahdEN':_0x453e74(0x159)+_0x453e74(0x261),'zjAcq':_0x453e74(0x15f),'Yzwli':_0x453e74(0x229)+'me','nhQtz':_0x453e74(0x233)+_0x453e74(0x1df),'xrXFg':_0x453e74(0x24b)+'ss','pYDSe':function(_0x1b8bb7,_0x39a1b4){return _0x1b8bb7!==_0x39a1b4;},'HvsGR':function(_0x568dbc,_0x4d3b77){return _0x568dbc(_0x4d3b77);},'vLKNe':_0x453e74(0x1ee)+_0x453e74(0x157),'zHWfB':function(_0x560962,_0x5a054a,_0x27fe2d){return _0x560962(_0x5a054a,_0x27fe2d);},'RtpIU':_0x453e74(0x15c),'jTffF':_0x453e74(0x204),'ELGOw':_0x453e74(0x1b4)+_0x453e74(0x16f),'Czfee':_0x453e74(0x263),'hMujd':_0x453e74(0x230)+_0x453e74(0x235),'vHCHq':_0x453e74(0x150)};document[_0x453e74(0x1c4)+_0x453e74(0x1c7)](_0x1d70a6[_0x453e74(0x16d)])[_0x453e74(0x1c9)][_0x453e74(0x22e)]=_0x1d70a6[_0x453e74(0x154)],document[_0x453e74(0x1c4)+_0x453e74(0x1c7)](_0x1d70a6[_0x453e74(0x1c5)])[_0x453e74(0x1c9)][_0x453e74(0x22e)]=_0x1d70a6[_0x453e74(0x21a)],document[_0x453e74(0x1c4)+_0x453e74(0x1c7)](_0x1d70a6[_0x453e74(0x23c)])[_0x453e74(0x22b)+_0x453e74(0x1ae)](_0x1d70a6[_0x453e74(0x1ab)],function(){const _0x217e2d=_0x453e74;console[_0x217e2d(0x1bf)](_0x1d70a6[_0x217e2d(0x241)]);let _0x2074d3=document[_0x217e2d(0x1c4)+_0x217e2d(0x1c7)](_0x1d70a6[_0x217e2d(0x1e9)])[_0x217e2d(0x190)][_0x217e2d(0x1b5)](),_0x3a0acc=document[_0x217e2d(0x1c4)+_0x217e2d(0x1c7)](_0x1d70a6[_0x217e2d(0x250)])[_0x217e2d(0x190)][_0x217e2d(0x1b5)](),_0x168279=document[_0x217e2d(0x1c4)+_0x217e2d(0x1c7)](_0x1d70a6[_0x217e2d(0x209)])[_0x217e2d(0x190)][_0x217e2d(0x1b5)]();console[_0x217e2d(0x1bf)](_0x2074d3),console[_0x217e2d(0x1bf)](_0x168279),console[_0x217e2d(0x1bf)](_0x3a0acc);if(_0x1d70a6[_0x217e2d(0x122)](_0x3a0acc,_0x168279)){_0x1d70a6[_0x217e2d(0x18d)](alert,_0x1d70a6[_0x217e2d(0x23f)]);return;}_0x1d70a6[_0x217e2d(0x249)](onValue,playersInDB,function(_0x454398){const _0x3f26db=_0x217e2d;if(!_0x454398[_0x3f26db(0x187)]()){let _0x37f6db={'name':_0x2074d3,'password':_0x168279,'score':0x0};_0x1d70a6[_0x3f26db(0x193)](push,playersInDB,_0x37f6db);return;}let _0x3f81c2=Object[_0x3f26db(0x215)](_0x454398[_0x3f26db(0x239)]()),_0x4b2447=_0x3f81c2[_0x3f26db(0x223)](_0x3a5ac4=>_0x3a5ac4[0x1595+0xbf*-0x13+-0x767][_0x3f26db(0x1b2)]===_0x2074d3);if(_0x4b2447){_0x1d70a6[_0x3f26db(0x195)](alert,_0x1d70a6[_0x3f26db(0x240)]);return;}else{let _0x1547a0={'name':_0x2074d3,'password':_0x168279,'score':0x0};_0x1d70a6[_0x3f26db(0x193)](push,playersInDB,_0x1547a0),location[_0x3f26db(0x1d4)]();}});});}function _0x6fea(){const _0x29f909=['zobuG','HPaqE','qMsdc','xrXFg','div','36904zQglRf','750FUktIb','e\x20class=\x22l','wXREo','\x20\x20\x20<button','bzYuZ','fKGiJ','webmb','\x22score\x22>Sc','.gameField','entries','TnDeg','qBmbg','forEach','class=\x22cac','Czfee','RHAlJ','EUiRg','YtCyQ','gClientRec','error','nt\x22\x20placeh','cpeDN','bgfhO','some','.dino','tcfCJ','bmTCZ','ecBSR','2|5|1|0|4|','#regUserNa','KhPuu','addEventLi','\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20','IjKsl','display','EtMlc','.regSubmit','getBoundin','HMIPs','#regUserPa','AKgDC','Button','XGaLW','headerCont','split','val','ting\x20score','tlRPC','hMujd','JqmFw','Cwhdp','vLKNe','ahdEN','zjAcq','\x20\x20\x20\x20\x20\x20<div','\x20\x20\x20<div\x20cl','Comment</b','cajAR','jbwZB','UXSdF','\x20\x20\x20\x20<td\x20cl','zHWfB','floor','#confRegPa','JvbJW','ozPrP','FwqEY','length','nhQtz','bEfzw','fzcIN','eaderboard','MQTen','.loginButt','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','eILtT','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20','yIvoa','chiOo','ted\x20succes','.comment','brxJS','nts','round','432WAQjno','dy\x20exists','\x22dino\x22></d','block','ss=\x22startG','eader>\x0a\x20\x20\x20','<!--\x20<div\x20','apeIN','lrxna','s\x22>\x0a\x20\x20\x20\x20\x20\x20','>\x20-->\x0a\x20\x20\x20\x20','rdShowPlay','pYDSe','\x0a\x20\x20\x20\x20<h3\x20c','igank','bxvpI','h3>\x0a\x20\x20\x20\x20\x20\x20','\x20\x20\x20\x20\x20\x20\x20</h','tEjqy','ers','2088ATCmDA','hPNkO','bmitCommen','FSKrc','iNIaO','4|2|0|5|1|','vykUU','></div>\x0a\x20\x20','6|4','\x22gameField','catch','\x20\x20\x20\x20\x20</div','score','ent','.createAcc','\x20class=\x22ga','ass=\x22heade','no\x20existin','\x0a\x20\x20\x20\x20<div\x20','No\x20data\x20av','swPzs','appendChil','5|1|3|2|0|','e</td>\x0a\x20\x20\x20','3|4|1|0|2|','CffpM','.startGame','Yycuz','VbXOn','t\x22>Submit\x20','\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20','.loginAcc','iv>\x0a\x20\x20\x20\x20\x20\x20','ntSection\x22','iZpRO','.score','t-rtdb.fir','XCWJy','click','Score:\x20','kdGiT','qhXob','jTffF','YStgf','jFXxK','dont\x20match','nice','User\x20alrea','tton>\x0a\x20\x20\x20\x20','36092150zxATEH','.formLogin','say?\x22>\x0a\x20\x20\x20','\x20</tr>\x0a\x20\x20\x20','test','=\x22text\x22\x20cl','https://di','\x20\x20\x20\x20\x20\x20\x20\x20</','PuZPp','4065376tnQvxt','.game','JixpK','Comments','d>\x0a\x20\x20\x20\x20\x20\x20\x20','ers</h3>\x0a\x20','\x0a\x20\x20\x20\x20<tabl','VhczH','me:\x20','RtpIU','derboards\x22','ter','then','an\x20you\x20say','ShowPlayer','ById','rCont\x22>Nam','KGXHL','vYDqV','dtaKq','push','Players','XNwqK','ss=\x22header','.headers','oIRKw','ebaseio.co','hAGon','ZeumZ','>Start</bu','\x22>Score</t','Error\x20upda','WESqK','random','ayrGB','exists','PeJiy','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','<h3\x20class=','EdmRv','ameButton\x22','HvsGR','\x20class=\x22su','ment','value','PjOlN','gTiyt','gBPwB','QLEPT','AOBSG','pointerEve','618kLHEDL','commented','cmixv','rNRsr','DcwHw','className','ailable','input\x20type','FZleT','xijyB','\x20\x20<h3>Play','ut\x20somethi','coqmr','getElement','.gameUI','left','Player\x20fou','>\x0a\x20\x20\x20\x20','tus\x22></div','EeJTS','vHCHq','e\x22>Clint</','ec6-defaul','stener','QYYCa','\x20\x20\x20\x20\x20\x20\x20<tr','txvIz','name','GCnEl','.formRegis','trim','div\x20class=','lass=\x22play','Score\x20upda','.submitCom','no-game-65','ountButton','WWDdH','\x20\x20\x20\x20\x20\x20\x20\x20\x20<','height','log','RZhXU','\x22playerNam','button\x20cla','fZfhP','querySelec','ELGOw','mDzCg','tor','meUI\x22>\x0a\x20\x20\x20','style','Players/','top','47975GXkfgZ','ass=\x22comme','erName\x22>Na','ZNbvJ','lDarf','rrpav','.leaderboa','t\x20can\x20you\x20','reload','class=\x22lea','g\x20user','DiCVT','header\x20cla','XvANb','IcUEM','ddfvn','createElem','\x20placehold','QwyPt','ssword','</h3>\x0a\x20\x20\x20\x20','remove','QgivX','fmYRq','KnMSZ','ixqrV','innerText','FMaEV','er=\x22what\x20c','Yzwli','ore:\x20','1518187umoEcS','cactus','kBkCM','Passwords\x20','\x20\x20\x20\x20\x20\x20\x20</d','please\x20inp','innerHTML','password','utton>\x0a\x20\x20\x20','older=\x22wha','ogsrw','rds','bSkKh','\x20</table>','/h3>\x0a\x20\x20\x20\x20\x20','td\x20class=\x22','WcGJq','sfully','369612Ippzuz','width','awJOR','qnBLH','ifuUJ','div>\x0a\x20\x20\x20\x20\x20','\x22score\x22>1<','none','auto'];_0x6fea=function(){return _0x29f909;};return _0x6fea();}function startGame(_0x5e75fa){const _0x599df1=_0x2b879f,_0x42b817={'tcfCJ':_0x599df1(0x142)+'5','JvbJW':function(_0x1fcb24){return _0x1fcb24();},'coqmr':_0x599df1(0x1d2)+_0x599df1(0x1f6),'swPzs':_0x599df1(0x204),'MQTen':function(_0x24f4df,_0x3198e3){return _0x24f4df(_0x3198e3);},'yIvoa':_0x599df1(0x214),'bzYuZ':_0x599df1(0x263),'PuZPp':_0x599df1(0x144)+_0x599df1(0x235),'qnBLH':function(_0x4b7a99,_0x1b9fd8){return _0x4b7a99(_0x1b9fd8);},'YtCyQ':_0x599df1(0x15c),'jbwZB':_0x599df1(0x165),'apeIN':_0x599df1(0x17c),'RZhXU':_0x599df1(0x150),'EdmRv':_0x599df1(0x1b9)+_0x599df1(0x18f)};_0x5e75fa[_0x599df1(0x136)]=0xbfb+-0x1*-0x258a+-0x3185,console[_0x599df1(0x1bf)](_0x5e75fa[-0x24c1*-0x1+0xfc5*0x2+-0x444a][_0x599df1(0x1b2)]),document[_0x599df1(0x1c4)+_0x599df1(0x1c7)](_0x42b817[_0x599df1(0x21d)])[_0x599df1(0x1c9)][_0x599df1(0x22e)]=_0x42b817[_0x599df1(0x13e)],document[_0x599df1(0x1c4)+_0x599df1(0x1c7)](_0x42b817[_0x599df1(0x246)])[_0x599df1(0x1c9)][_0x599df1(0x22e)]=_0x42b817[_0x599df1(0x210)],document[_0x599df1(0x1c4)+_0x599df1(0x1c7)](_0x42b817[_0x599df1(0x1a3)])[_0x599df1(0x1c9)][_0x599df1(0x22e)]=_0x42b817[_0x599df1(0x210)],_0x42b817[_0x599df1(0x24c)](showLeaderboards),document[_0x599df1(0x1c4)+_0x599df1(0x1c7)](_0x42b817[_0x599df1(0x267)])[_0x599df1(0x1f1)]=_0x599df1(0x123)+_0x599df1(0x1b7)+_0x599df1(0x1ce)+_0x599df1(0x16c)+_0x5e75fa[-0x3a*-0x2+0x48d+-0x500][_0x599df1(0x1b2)]+(_0x599df1(0x1e0)+_0x599df1(0x18a)+_0x599df1(0x213)+_0x599df1(0x1ea))+_0x5e75fa[0x1d51+-0x1104+-0xc4c][_0x599df1(0x136)]+_0x599df1(0x1e0),document[_0x599df1(0x1c4)+_0x599df1(0x1c7)](_0x42b817[_0x599df1(0x163)])[_0x599df1(0x22b)+_0x599df1(0x1ae)](_0x42b817[_0x599df1(0x1c0)],()=>{const _0x4be9b8=_0x599df1,_0x10c702=_0x42b817[_0x4be9b8(0x225)][_0x4be9b8(0x238)]('|');let _0x5e6878=-0x694+-0x19b0+-0x1022*-0x2;while(!![]){switch(_0x10c702[_0x5e6878++]){case'0':_0x42b817[_0x4be9b8(0x24c)](runGame);continue;case'1':document[_0x4be9b8(0x1c4)+_0x4be9b8(0x1c7)](_0x42b817[_0x4be9b8(0x1a3)])[_0x4be9b8(0x1c9)][_0x4be9b8(0x22e)]=_0x42b817[_0x4be9b8(0x13e)];continue;case'2':_0x42b817[_0x4be9b8(0x254)](cactusGenerate,_0x5e75fa);continue;case'3':document[_0x4be9b8(0x1c4)+_0x4be9b8(0x1c7)](_0x42b817[_0x4be9b8(0x259)])[_0x4be9b8(0x1c9)][_0x4be9b8(0x22e)]=_0x42b817[_0x4be9b8(0x210)];continue;case'4':document[_0x4be9b8(0x1c4)+_0x4be9b8(0x1c7)](_0x42b817[_0x4be9b8(0x163)])[_0x4be9b8(0x1c9)][_0x4be9b8(0x22e)]=_0x42b817[_0x4be9b8(0x13e)];continue;case'5':_0x42b817[_0x4be9b8(0x254)](startScore,_0x5e75fa);continue;}break;}}),document[_0x599df1(0x1c4)+_0x599df1(0x1c7)](_0x42b817[_0x599df1(0x18b)])[_0x599df1(0x22b)+_0x599df1(0x1ae)](_0x42b817[_0x599df1(0x1c0)],()=>{const _0x5f3cc5=_0x599df1;_0x42b817[_0x5f3cc5(0x200)](addComment,_0x5e75fa);});}function addComment(_0x23c542){const _0x4d84da=_0x2b879f,_0x3bde2f={'DcwHw':function(_0x556587,_0x2ea9a8,_0xb45678){return _0x556587(_0x2ea9a8,_0xb45678);},'FMaEV':_0x4d84da(0x25c),'XvANb':function(_0x31a340,_0x1e3b93){return _0x31a340===_0x1e3b93;},'ayrGB':function(_0x518f41,_0x431a6e){return _0x518f41(_0x431a6e);},'cpeDN':_0x4d84da(0x1f0)+_0x4d84da(0x1a2)+'ng','mDzCg':function(_0x1a24cb,_0x85dd89,_0x3c31cc,_0xb28197){return _0x1a24cb(_0x85dd89,_0x3c31cc,_0xb28197);},'YStgf':_0x4d84da(0x198)};console[_0x4d84da(0x1bf)](_0x23c542[-0x2*-0x6a2+-0x10*0xc1+-0x1*0x133][_0x4d84da(0x1b2)]);let _0x1bd0fa=document[_0x4d84da(0x1c4)+_0x4d84da(0x1c7)](_0x3bde2f[_0x4d84da(0x1e7)])[_0x4d84da(0x190)][_0x4d84da(0x1b5)]();if(_0x3bde2f[_0x4d84da(0x1d9)](_0x1bd0fa,'')){_0x3bde2f[_0x4d84da(0x186)](alert,_0x3bde2f[_0x4d84da(0x221)]);return;}let _0x46a137={'name':_0x23c542[0x1f31+0x1*-0x180f+-0x721][_0x4d84da(0x1b2)],'comment':_0x1bd0fa};_0x3bde2f[_0x4d84da(0x1c6)](onValue,commentsInDB,function(_0x2e0614){const _0x13ca54=_0x4d84da;if(!_0x2e0614[_0x13ca54(0x187)]()){_0x3bde2f[_0x13ca54(0x19b)](push,commentsInDB,_0x46a137);return;}else{_0x3bde2f[_0x13ca54(0x19b)](push,commentsInDB,_0x46a137);return;}},{'onlyOnce':!![]}),document[_0x4d84da(0x1c4)+_0x4d84da(0x1c7)](_0x3bde2f[_0x4d84da(0x1e7)])[_0x4d84da(0x190)]='',console[_0x4d84da(0x1bf)](_0x3bde2f[_0x4d84da(0x155)]);}function showLeaderboards(){const _0x812989=_0x2b879f,_0x36fc5d={'zobuG':function(_0x2e3c05,_0x4b884d){return _0x2e3c05<_0x4b884d;},'kBkCM':_0x812989(0x1d2)+_0x812989(0x1f6),'kdGiT':_0x812989(0x1d2)+_0x812989(0x121)+_0x812989(0x129),'xijyB':function(_0x309bb1,_0x4fa628,_0x140f0b){return _0x309bb1(_0x4fa628,_0x140f0b);}};let _0x4b4237=document[_0x812989(0x1c4)+_0x812989(0x1c7)](_0x36fc5d[_0x812989(0x1ed)]);_0x4b4237[_0x812989(0x1f1)]=_0x812989(0x16a)+_0x812989(0x20d)+_0x812989(0x253)+_0x812989(0x172)+_0x812989(0x269)+_0x812989(0x1a1)+_0x812989(0x169)+_0x812989(0x1b0)+_0x812989(0x256)+_0x812989(0x248)+_0x812989(0x13a)+_0x812989(0x174)+_0x812989(0x141)+_0x812989(0x1bd)+_0x812989(0x1fa)+_0x812989(0x237)+_0x812989(0x182)+_0x812989(0x168)+_0x812989(0x15e)+_0x812989(0x1f8);let _0x22d7f2=document[_0x812989(0x1c4)+_0x812989(0x1c7)](_0x36fc5d[_0x812989(0x152)]);_0x36fc5d[_0x812989(0x1a0)](onValue,playersInDB,function(_0x429565){const _0x55726e=_0x812989;let _0x24cbaa=Object[_0x55726e(0x215)](_0x429565[_0x55726e(0x239)]());for(let _0x77f14=-0x1fd9+0x51*0x39+0x374*0x4;_0x36fc5d[_0x55726e(0x206)](_0x77f14,_0x24cbaa[_0x55726e(0x24f)]);_0x77f14++){let _0x4495f1=document[_0x55726e(0x1dc)+_0x55726e(0x137)]('tr'),_0x183e8a=document[_0x55726e(0x1dc)+_0x55726e(0x137)]('td');_0x183e8a[_0x55726e(0x1e6)]=_0x24cbaa[_0x77f14][0x2f+-0x3ec*-0x2+-0x806][_0x55726e(0x1b2)];let _0x4b884b=document[_0x55726e(0x1dc)+_0x55726e(0x137)]('td');_0x4b884b[_0x55726e(0x1e6)]=_0x24cbaa[_0x77f14][-0x7b5*-0x5+0x23b4+0x251e*-0x2][_0x55726e(0x136)],_0x22d7f2[_0x55726e(0x13f)+'d'](_0x4495f1),_0x4495f1[_0x55726e(0x13f)+'d'](_0x183e8a),_0x4495f1[_0x55726e(0x13f)+'d'](_0x4b884b);}});}function runGame(){const _0x1c6d66=_0x2b879f,_0x123df0={'fmYRq':function(_0x5afd20){return _0x5afd20();},'bgfhO':_0x1c6d66(0x214),'HPaqE':_0x1c6d66(0x150)};document[_0x1c6d66(0x1c4)+_0x1c6d66(0x1c7)](_0x123df0[_0x1c6d66(0x222)])[_0x1c6d66(0x22b)+_0x1c6d66(0x1ae)](_0x123df0[_0x1c6d66(0x207)],function(){const _0x26fa44=_0x1c6d66;_0x123df0[_0x26fa44(0x1e3)](jump);});}let dino=document[_0x2b879f(0x1c4)+_0x2b879f(0x1c7)](_0x2b879f(0x224)),dinoPos=getComputedStyle(dino),speedX=-0x4a5*0x3+0x13f3+-0x4d*0x14,dinoPositionX=parseInt(dinoPos[_0x2b879f(0x1cb)]),dinoJump=![],intervals=[];function jump(_0x1aca02){const _0x18ae36=_0x2b879f,_0x590286={'chiOo':_0x18ae36(0x12f)+'3','ecBSR':function(_0x3b8101,_0x7967fa){return _0x3b8101<=_0x7967fa;},'IjKsl':function(_0x11edbd,_0x4311af){return _0x11edbd===_0x4311af;},'dtaKq':function(_0xc49987,_0x583940){return _0xc49987>=_0x583940;},'awJOR':function(_0x458512,_0x1dcf8c){return _0x458512(_0x1dcf8c);},'rNRsr':_0x18ae36(0x214),'Cwhdp':_0x18ae36(0x205),'txvIz':function(_0x2a75a5,_0x3fc729){return _0x2a75a5+_0x3fc729;},'EeJTS':_0x18ae36(0x204),'KGXHL':_0x18ae36(0x224),'WWDdH':function(_0x117454,_0x3686af,_0x719af6){return _0x117454(_0x3686af,_0x719af6);}};document[_0x18ae36(0x1c4)+_0x18ae36(0x1c7)](_0x590286[_0x18ae36(0x19a)])[_0x18ae36(0x1c9)][_0x18ae36(0x196)+_0x18ae36(0x25e)]=_0x590286[_0x18ae36(0x1aa)],console[_0x18ae36(0x1bf)](dinoPositionX);let _0xff21e9=0x11a3+-0x44+-0x115f,_0x414af2=document[_0x18ae36(0x1c4)+_0x18ae36(0x1c7)](_0x590286[_0x18ae36(0x175)]);speedX=-(-0x1e14+-0x35*-0x6b+0x7ee);let _0x365f71=_0x590286[_0x18ae36(0x1bc)](setInterval,()=>{const _0x13df78=_0x18ae36,_0x1f5a1c=_0x590286[_0x13df78(0x25a)][_0x13df78(0x238)]('|');let _0x11d880=0x1b13*-0x1+0x20ef*0x1+-0x3*0x1f4;while(!![]){switch(_0x1f5a1c[_0x11d880++]){case'0':dinoPositionX+=speedX;continue;case'1':_0x590286[_0x13df78(0x227)](dinoPositionX,-0x2*0x32b+0x1*0x79d+-0x61)&&(speedX=0x1*-0x1b23+0xa01+0x1123,_0xff21e9++);continue;case'2':dinoJump=!![];continue;case'3':_0x590286[_0x13df78(0x22d)](_0xff21e9,-0x49+-0x765*-0x5+-0x24af)&&_0x590286[_0x13df78(0x177)](dinoPositionX,0xe71*-0x2+-0x5*-0x30e+0xeed)&&(speedX=-0x4a0+0x10fb+0xc5b*-0x1,_0x590286[_0x13df78(0x1ff)](clearInterval,_0x365f71),dinoJump=![],document[_0x13df78(0x1c4)+_0x13df78(0x1c7)](_0x590286[_0x13df78(0x19a)])[_0x13df78(0x1c9)][_0x13df78(0x196)+_0x13df78(0x25e)]=_0x590286[_0x13df78(0x23e)]);continue;case'4':intervals[_0x13df78(0x178)](_0x365f71);continue;case'5':_0x414af2[_0x13df78(0x1c9)][_0x13df78(0x1cb)]=_0x590286[_0x13df78(0x1b1)](dinoPositionX,'px');continue;}break;}},0x1417+0x2383+-0x3799);}function roundNum(_0x9a137){const _0x3edb46=_0x2b879f,_0x1392dc={'gTiyt':function(_0x1b8bbc,_0x48aec8){return _0x1b8bbc*_0x48aec8;},'vykUU':function(_0x3e05db,_0x1ec625){return _0x3e05db/_0x1ec625;}};return _0x1392dc[_0x3edb46(0x192)](Math[_0x3edb46(0x25f)](_0x1392dc[_0x3edb46(0x130)](_0x9a137,0x16d*0x7+-0x207d+0x4e*0x4a)),-0x1*0x23c9+-0x8*0x418+0x4493);}let playerScore=0x2*-0x7aa+-0x1bfa+0x2b4e,cactusSpawnTime=-0x54b*0x7+0x2*-0x105+0x1*0x2717,baseCactusSpawnTime=-0x1cb5+0x23e3*-0x1+0x6f0*0xb,creationCactus=[];function cactusGenerate(_0x4ec5a7){const _0xfb7571=_0x2b879f,_0x176cc2={'EtMlc':function(_0x4c3971,_0x3d4fa1){return _0x4c3971(_0x3d4fa1);},'hAGon':function(_0x1ed038,_0x694e24,_0x57caed){return _0x1ed038(_0x694e24,_0x57caed);}};let _0xd1b14b=_0x176cc2[_0xfb7571(0x17f)](setInterval,()=>{const _0x457b1d=_0xfb7571;creationCactus[_0x457b1d(0x178)](_0xd1b14b),_0x176cc2[_0x457b1d(0x22f)](startCactusGenerate,_0x4ec5a7);},baseCactusSpawnTime);}function startCactusGenerate(_0x5572f3){const _0x136034=_0x2b879f,_0x3000c9={'tEjqy':function(_0x1c4eea,_0x3245de){return _0x1c4eea(_0x3245de);},'ixqrV':function(_0x341438,_0x288549){return _0x341438+_0x288549;},'iZpRO':function(_0x2beac6,_0x272e4d){return _0x2beac6<=_0x272e4d;},'ddfvn':_0x136034(0x140)+_0x136034(0x132),'IcUEM':_0x136034(0x1a5),'Yycuz':_0x136034(0x204),'fZfhP':_0x136034(0x205),'ifuUJ':_0x136034(0x214),'PeJiy':_0x136034(0x20a),'eILtT':_0x136034(0x1ec),'vYDqV':function(_0x3cf917,_0x5402f9){return _0x3cf917+_0x5402f9;},'qhXob':function(_0x21eca0,_0x4795a4){return _0x21eca0*_0x4795a4;},'cmixv':function(_0x49fb78,_0x836547,_0x2d13c3){return _0x49fb78(_0x836547,_0x2d13c3);}};console[_0x136034(0x1bf)](baseCactusSpawnTime);let _0x9c139=document[_0x136034(0x1c4)+_0x136034(0x1c7)](_0x3000c9[_0x136034(0x201)]);console[_0x136034(0x1bf)](cactusSpawnTime);let _0x31bcd1=document[_0x136034(0x1dc)+_0x136034(0x137)](_0x3000c9[_0x136034(0x188)]);_0x31bcd1[_0x136034(0x19c)]=_0x3000c9[_0x136034(0x257)];let _0x336cd4=_0x3000c9[_0x136034(0x176)](Math[_0x136034(0x24a)](_0x3000c9[_0x136034(0x153)](Math[_0x136034(0x185)](),-0x1ef8+-0x16ec+0x360d)),0x15e1*0x1+-0x1a67+0x5b2);console[_0x136034(0x1bf)](_0x336cd4),_0x31bcd1[_0x136034(0x1c9)][_0x136034(0x1a6)]=_0x3000c9[_0x136034(0x1e5)](_0x336cd4,'px'),_0x9c139[_0x136034(0x13f)+'d'](_0x31bcd1);let _0x225cb1=_0x336cd4,_0x4cc2c9=-(0x1b7+0x89*0x40+-0x23f6),_0x488f45=_0x3000c9[_0x136034(0x199)](setInterval,()=>{const _0x287351=_0x136034,_0x28386d={'oIRKw':function(_0x33361b,_0x11aeaf){const _0x41f16d=_0x53a0;return _0x3000c9[_0x41f16d(0x128)](_0x33361b,_0x11aeaf);},'QwyPt':function(_0x487c1b,_0x255fd2){const _0x1e7f15=_0x53a0;return _0x3000c9[_0x1e7f15(0x128)](_0x487c1b,_0x255fd2);}};_0x225cb1+=_0x4cc2c9,_0x31bcd1[_0x287351(0x1c9)][_0x287351(0x1a6)]=_0x3000c9[_0x287351(0x1e5)](_0x225cb1,'px');_0x3000c9[_0x287351(0x14c)](_0x225cb1,-(-0x1113*0x1+0x163f+-0x4*0xce))&&_0x31bcd1[_0x287351(0x1e1)]();if(_0x3000c9[_0x287351(0x128)](collisionDetection,_0x31bcd1)){const _0x2eab47=_0x3000c9[_0x287351(0x1db)][_0x287351(0x238)]('|');let _0x7d9ce7=0xb0*-0x2+0x17ab+-0x164b;while(!![]){switch(_0x2eab47[_0x7d9ce7++]){case'0':intervals[_0x287351(0x218)](_0x327b71=>{const _0x544b25=_0x287351;_0x28386d[_0x544b25(0x17d)](clearInterval,_0x327b71);});continue;case'1':document[_0x287351(0x1c4)+_0x287351(0x1c7)](_0x3000c9[_0x287351(0x1da)])[_0x287351(0x1c9)][_0x287351(0x22e)]=_0x3000c9[_0x287351(0x145)];continue;case'2':_0x3000c9[_0x287351(0x128)](updateScore,_0x5572f3);continue;case'3':_0x3000c9[_0x287351(0x128)](clearInterval,_0x488f45);continue;case'4':return;case'5':document[_0x287351(0x1c4)+_0x287351(0x1c7)](_0x3000c9[_0x287351(0x1da)])[_0x287351(0x1c9)][_0x287351(0x196)+_0x287351(0x25e)]=_0x3000c9[_0x287351(0x1c3)];continue;case'6':creationCactus[_0x287351(0x218)](_0x5371c1=>{const _0x8bb962=_0x287351;_0x28386d[_0x8bb962(0x1de)](clearInterval,_0x5371c1);});continue;}break;}}},-0x467+0x86d+0x31*-0x15);}function newStartGame(_0x28f1d5){const _0x4dae1b=_0x2b879f,_0x232a89={'HMIPs':_0x4dae1b(0x228)+'3','ZNbvJ':function(_0x4fa8e3){return _0x4fa8e3();},'ZeumZ':_0x4dae1b(0x1d2)+_0x4dae1b(0x1f6),'ozPrP':_0x4dae1b(0x204),'qBmbg':_0x4dae1b(0x214),'AKgDC':_0x4dae1b(0x263),'CffpM':function(_0x3d9973,_0x1c78e5){return _0x3d9973(_0x1c78e5);},'RHAlJ':function(_0x32a06e,_0x30f5bf){return _0x32a06e(_0x30f5bf);},'QYYCa':_0x4dae1b(0x144)+_0x4dae1b(0x235),'PjOlN':_0x4dae1b(0x165),'TnDeg':_0x4dae1b(0x15c),'DiCVT':_0x4dae1b(0x17c),'VbXOn':_0x4dae1b(0x150),'UXSdF':_0x4dae1b(0x1b9)+_0x4dae1b(0x18f)};_0x28f1d5[_0x4dae1b(0x136)]=0x14*-0xfe+-0x1df9+0x31d1,document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x191)])[_0x4dae1b(0x1f1)]='',document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x191)])[_0x4dae1b(0x1f1)]=_0x4dae1b(0x13c)+_0x4dae1b(0x1d5)+_0x4dae1b(0x16e)+_0x4dae1b(0x131)+_0x4dae1b(0x242)+_0x4dae1b(0x139)+_0x4dae1b(0x1c8)+_0x4dae1b(0x1bd)+_0x4dae1b(0x1d8)+_0x4dae1b(0x17b)+_0x4dae1b(0x269)+_0x4dae1b(0x189)+_0x4dae1b(0x18a)+_0x4dae1b(0x1c1)+_0x4dae1b(0x1ac)+_0x4dae1b(0x126)+_0x4dae1b(0x189)+_0x4dae1b(0x18a)+_0x4dae1b(0x203)+_0x4dae1b(0x1f9)+_0x4dae1b(0x127)+_0x4dae1b(0x265)+_0x4dae1b(0x1bd)+_0x4dae1b(0x1b6)+_0x4dae1b(0x133)+_0x4dae1b(0x258)+_0x4dae1b(0x1bd)+_0x4dae1b(0x1b6)+_0x4dae1b(0x262)+_0x4dae1b(0x14a)+_0x4dae1b(0x189)+_0x4dae1b(0x266)+_0x4dae1b(0x219)+_0x4dae1b(0x1a9)+_0x4dae1b(0x120)+_0x4dae1b(0x162)+_0x4dae1b(0x202)+_0x4dae1b(0x22c)+_0x4dae1b(0x1bd)+_0x4dae1b(0x1c2)+_0x4dae1b(0x264)+_0x4dae1b(0x18c)+_0x4dae1b(0x181)+_0x4dae1b(0x15a)+_0x4dae1b(0x148)+_0x4dae1b(0x1ef)+_0x4dae1b(0x14a)+_0x4dae1b(0x243)+_0x4dae1b(0x1cd)+_0x4dae1b(0x14b)+_0x4dae1b(0x1dd)+_0x4dae1b(0x1e8)+_0x4dae1b(0x171)+_0x4dae1b(0x258)+_0x4dae1b(0x1bd)+_0x4dae1b(0x19e)+_0x4dae1b(0x160)+_0x4dae1b(0x1cd)+_0x4dae1b(0x220)+_0x4dae1b(0x1f4)+_0x4dae1b(0x1d3)+_0x4dae1b(0x15d)+_0x4dae1b(0x189)+_0x4dae1b(0x20f)+_0x4dae1b(0x18e)+_0x4dae1b(0x12c)+_0x4dae1b(0x147)+_0x4dae1b(0x244)+_0x4dae1b(0x1f3)+_0x4dae1b(0x135)+_0x4dae1b(0x1a8),document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x217)])[_0x4dae1b(0x1c9)][_0x4dae1b(0x22e)]=_0x232a89[_0x4dae1b(0x24d)],console[_0x4dae1b(0x1bf)](_0x28f1d5[-0x1*0x2585+-0x27*0x5d+0x33b1][_0x4dae1b(0x1b2)]),document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x216)])[_0x4dae1b(0x1c9)][_0x4dae1b(0x22e)]=_0x232a89[_0x4dae1b(0x24d)],document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x191)])[_0x4dae1b(0x1c9)][_0x4dae1b(0x22e)]=_0x232a89[_0x4dae1b(0x234)],document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x180)])[_0x4dae1b(0x1c9)][_0x4dae1b(0x22e)]=_0x232a89[_0x4dae1b(0x234)],_0x232a89[_0x4dae1b(0x1cf)](showLeaderboards),document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x1d7)])[_0x4dae1b(0x1f1)]=_0x4dae1b(0x123)+_0x4dae1b(0x1b7)+_0x4dae1b(0x1ce)+_0x4dae1b(0x16c)+_0x28f1d5[0x26c5+0xc85+-0x3349][_0x4dae1b(0x1b2)]+(_0x4dae1b(0x1e0)+_0x4dae1b(0x18a)+_0x4dae1b(0x213)+_0x4dae1b(0x1ea))+_0x28f1d5[-0x1a0f+0x9d2+-0x42*-0x3f][_0x4dae1b(0x136)]+_0x4dae1b(0x1e0),document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x1af)])[_0x4dae1b(0x22b)+_0x4dae1b(0x1ae)](_0x232a89[_0x4dae1b(0x146)],()=>{const _0x3ac124=_0x4dae1b,_0x365b4b=_0x232a89[_0x3ac124(0x232)][_0x3ac124(0x238)]('|');let _0x1795ff=0xa8a*-0x2+-0xe09+0x231d;while(!![]){switch(_0x365b4b[_0x1795ff++]){case'0':_0x232a89[_0x3ac124(0x1cf)](runGame);continue;case'1':document[_0x3ac124(0x1c4)+_0x3ac124(0x1c7)](_0x232a89[_0x3ac124(0x180)])[_0x3ac124(0x1c9)][_0x3ac124(0x22e)]=_0x232a89[_0x3ac124(0x24d)];continue;case'2':document[_0x3ac124(0x1c4)+_0x3ac124(0x1c7)](_0x232a89[_0x3ac124(0x217)])[_0x3ac124(0x1c9)][_0x3ac124(0x22e)]=_0x232a89[_0x3ac124(0x234)];continue;case'3':_0x232a89[_0x3ac124(0x143)](startScore,_0x28f1d5);continue;case'4':_0x232a89[_0x3ac124(0x21b)](cactusGenerate,_0x28f1d5);continue;case'5':document[_0x3ac124(0x1c4)+_0x3ac124(0x1c7)](_0x232a89[_0x3ac124(0x1af)])[_0x3ac124(0x1c9)][_0x3ac124(0x22e)]=_0x232a89[_0x3ac124(0x24d)];continue;}break;}}),document[_0x4dae1b(0x1c4)+_0x4dae1b(0x1c7)](_0x232a89[_0x4dae1b(0x247)])[_0x4dae1b(0x22b)+_0x4dae1b(0x1ae)](_0x232a89[_0x4dae1b(0x146)],()=>{const _0x43c5dd=_0x4dae1b;_0x232a89[_0x43c5dd(0x1cf)](addComment);});}function collisionDetection(_0xa168a){const _0x22c76e=_0x2b879f,_0x667caf={'tlRPC':_0x22c76e(0x224),'bxvpI':function(_0x5793d0,_0x1a271c){return _0x5793d0<_0x1a271c;},'igank':function(_0x5ef080,_0x52a383){return _0x5ef080+_0x52a383;},'fKGiJ':function(_0x555e06,_0x1eb88e){return _0x555e06>_0x1eb88e;},'WcGJq':function(_0x2a1a7a,_0x46a3a1){return _0x2a1a7a<_0x46a3a1;},'KnMSZ':function(_0x341cc0,_0x46b1df){return _0x341cc0>_0x46b1df;}};let _0x1bafe8=document[_0x22c76e(0x1c4)+_0x22c76e(0x1c7)](_0x667caf[_0x22c76e(0x23b)]),_0x2b2deb=_0x1bafe8[_0x22c76e(0x231)+_0x22c76e(0x21e)+'t'](),_0x2c5967=_0xa168a[_0x22c76e(0x231)+_0x22c76e(0x21e)+'t']();if(_0x667caf[_0x22c76e(0x125)](_0x2b2deb[_0x22c76e(0x1a6)],_0x667caf[_0x22c76e(0x124)](_0x2c5967[_0x22c76e(0x1a6)],_0x2c5967[_0x22c76e(0x1fe)]))&&_0x667caf[_0x22c76e(0x211)](_0x667caf[_0x22c76e(0x124)](_0x2b2deb[_0x22c76e(0x1a6)],_0x2b2deb[_0x22c76e(0x1fe)]),_0x2c5967[_0x22c76e(0x1a6)])&&_0x667caf[_0x22c76e(0x1fb)](_0x2b2deb[_0x22c76e(0x1cb)],_0x667caf[_0x22c76e(0x124)](_0x2c5967[_0x22c76e(0x1cb)],_0x2c5967[_0x22c76e(0x1be)]))&&_0x667caf[_0x22c76e(0x1e4)](_0x667caf[_0x22c76e(0x124)](_0x2b2deb[_0x22c76e(0x1cb)],_0x2b2deb[_0x22c76e(0x1be)]),_0x2c5967[_0x22c76e(0x1cb)]))return!![];}function startScore(_0x2820b9){const _0x21a4fd=_0x2b879f,_0x1b67c3={'bmTCZ':function(_0x3ebf10,_0x28c958){return _0x3ebf10+_0x28c958;},'QgivX':_0x21a4fd(0x151),'QLEPT':_0x21a4fd(0x14d),'XGaLW':function(_0x19cc13,_0x3697d6,_0x171936){return _0x19cc13(_0x3697d6,_0x171936);}};playerScore=_0x2820b9[_0x21a4fd(0x136)];let _0x11a658=document[_0x21a4fd(0x1c4)+_0x21a4fd(0x1c7)](_0x1b67c3[_0x21a4fd(0x194)]),_0x497451=_0x1b67c3[_0x21a4fd(0x236)](setInterval,()=>{const _0x1a33c1=_0x21a4fd;intervals[_0x1a33c1(0x178)](_0x497451),playerScore++,_0x11a658[_0x1a33c1(0x1f1)]=_0x1b67c3[_0x1a33c1(0x226)](_0x1b67c3[_0x1a33c1(0x1e2)],playerScore);},0x4ea+-0x74+-0x282);}function updateScore(_0x13b44d){const _0x112449=_0x2b879f,_0x5ce028={'VhczH':_0x112449(0x1b8)+_0x112449(0x25b)+_0x112449(0x1fc),'FZleT':_0x112449(0x183)+_0x112449(0x23a)+':','jFXxK':function(_0x47cc1a,_0x47c84d){return _0x47cc1a(_0x47c84d);},'brxJS':_0x112449(0x13d)+_0x112449(0x19d),'qMsdc':function(_0x2b4301,_0x4bf334){return _0x2b4301<_0x4bf334;},'WESqK':function(_0x465923,_0x8a8431){return _0x465923===_0x8a8431;},'lrxna':_0x112449(0x1a7)+'nd','EUiRg':function(_0x515f0b,_0x2588fe,_0x3f73d3){return _0x515f0b(_0x2588fe,_0x3f73d3);},'XCWJy':function(_0x3002f5,_0x31e722){return _0x3002f5(_0x31e722);}};console[_0x112449(0x1bf)](_0x13b44d[-0x1d*-0x67+0x2*0xcb3+-0x1288*0x2][_0x112449(0x1b2)]),console[_0x112449(0x1bf)](_0x13b44d[-0x169f+-0x18e7+0x1*0x2f87][_0x112449(0x136)]),console[_0x112449(0x1bf)](playerScore),_0x13b44d[-0x1ed2+0xe83+0x74*0x24][_0x112449(0x136)]=playerScore,console[_0x112449(0x1bf)](_0x13b44d[0x1c*-0xf+0x2082+-0x1edd][_0x112449(0x136)]),_0x5ce028[_0x112449(0x21c)](onValue,playersInDB,function(_0x578a56){const _0x1608a9=_0x112449,_0x28efe4={'FwqEY':_0x5ce028[_0x1608a9(0x16b)],'XNwqK':_0x5ce028[_0x1608a9(0x19f)]};if(!_0x578a56[_0x1608a9(0x187)]()){_0x5ce028[_0x1608a9(0x156)](alert,_0x5ce028[_0x1608a9(0x25d)]);return;}let _0x18b2c6=Object[_0x1608a9(0x215)](_0x578a56[_0x1608a9(0x239)]());console[_0x1608a9(0x1bf)](_0x18b2c6[-0x1e01+-0x83*-0x1+0x32*0x97][-0x201a+-0x4*0x73+-0xb*-0x315][_0x1608a9(0x1b2)]);for(let _0x271a9c=0x22d1+-0x3*-0x6ff+-0x37ce;_0x5ce028[_0x1608a9(0x208)](_0x271a9c,_0x18b2c6[_0x1608a9(0x24f)]);_0x271a9c++){if(_0x5ce028[_0x1608a9(0x184)](_0x13b44d[-0x24ef+-0x22ef+-0x17f5*-0x3][_0x1608a9(0x1b2)],_0x18b2c6[_0x271a9c][-0x13f*-0x17+-0x1263+-0xa45][_0x1608a9(0x1b2)])){console[_0x1608a9(0x1bf)](_0x5ce028[_0x1608a9(0x268)]);let _0x358591=_0x18b2c6[_0x271a9c][0x60+-0x1b3a*-0x1+0x1b9a*-0x1],_0x3b8f89=_0x5ce028[_0x1608a9(0x21c)](ref,database,_0x1608a9(0x1ca)+_0x358591);_0x5ce028[_0x1608a9(0x21c)](update,_0x3b8f89,{'score':_0x13b44d[0x1bb9+-0x1ea3*-0x1+-0x3a5b][_0x1608a9(0x136)]})[_0x1608a9(0x170)](()=>{const _0x479437=_0x1608a9;console[_0x479437(0x1bf)](_0x28efe4[_0x479437(0x24e)]);})[_0x1608a9(0x134)](_0x5d39d4=>{const _0x1414c0=_0x1608a9;console[_0x1414c0(0x21f)](_0x28efe4[_0x1414c0(0x17a)],_0x5d39d4);});break;}}}),_0x5ce028[_0x112449(0x14f)](newStartGame,_0x13b44d);}