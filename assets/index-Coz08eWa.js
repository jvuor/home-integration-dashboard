(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class extends Error{},t=class extends e{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},n=class extends e{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},r=class extends e{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},i=class extends e{},a=class extends e{constructor(e){super(`Invalid unit ${e}`)}},o=class extends e{},s=class extends e{constructor(){super(`Zone is an abstract class`)}},c=`numeric`,l=`short`,u=`long`,d={year:c,month:c,day:c},f={year:c,month:l,day:c},p={year:c,month:l,day:c,weekday:l},m={year:c,month:u,day:c},h={year:c,month:u,day:c,weekday:u},ee={hour:c,minute:c},te={hour:c,minute:c,second:c},ne={hour:c,minute:c,second:c,timeZoneName:l},g={hour:c,minute:c,second:c,timeZoneName:u},re={hour:c,minute:c,hourCycle:`h23`},ie={hour:c,minute:c,second:c,hourCycle:`h23`},ae={hour:c,minute:c,second:c,hourCycle:`h23`,timeZoneName:l},oe={hour:c,minute:c,second:c,hourCycle:`h23`,timeZoneName:u},_={year:c,month:c,day:c,hour:c,minute:c},se={year:c,month:c,day:c,hour:c,minute:c,second:c},ce={year:c,month:l,day:c,hour:c,minute:c},le={year:c,month:l,day:c,hour:c,minute:c,second:c},ue={year:c,month:l,day:c,weekday:l,hour:c,minute:c},de={year:c,month:u,day:c,hour:c,minute:c,timeZoneName:l},fe={year:c,month:u,day:c,hour:c,minute:c,second:c,timeZoneName:l},pe={year:c,month:u,day:c,weekday:u,hour:c,minute:c,timeZoneName:u},me={year:c,month:u,day:c,weekday:u,hour:c,minute:c,second:c,timeZoneName:u},he=class{get type(){throw new s}get name(){throw new s}get ianaName(){return this.name}get isUniversal(){throw new s}offsetName(e,t){throw new s}formatOffset(e,t){throw new s}offset(e){throw new s}equals(e){throw new s}get isValid(){throw new s}},ge=null,_e=class e extends he{static get instance(){return ge===null&&(ge=new e),ge}get type(){return`system`}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return Wt(e,t,n)}formatOffset(e,t){return Jt(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type===`system`}get isValid(){return!0}},ve=new Map;function ye(e){let t=ve.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(`en-US`,{hour12:!1,timeZone:e,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,era:`short`}),ve.set(e,t)),t}var be={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function xe(e,t){let n=e.format(t).replace(/\u200E/g,``),[,r,i,a,o,s,c,l]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n);return[a,r,i,o,s,c,l]}function Se(e,t){let n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){let{type:t,value:i}=n[e],a=be[t];t===`era`?r[a]=i:E(a)||(r[a]=parseInt(i,10))}return r}var Ce=new Map,v=class e extends he{static create(t){let n=Ce.get(t);return n===void 0&&Ce.set(t,n=new e(t)),n}static resetCache(){Ce.clear(),ve.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat(`en-US`,{timeZone:e}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=e.isValidZone(t)}get type(){return`iana`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return Wt(e,t,n,this.name)}formatOffset(e,t){return Jt(this.offset(e),t)}offset(e){if(!this.valid)return NaN;let t=new Date(e);if(isNaN(t))return NaN;let n=ye(this.name),[r,i,a,o,s,c,l]=n.formatToParts?Se(n,t):xe(n,t);o===`BC`&&(r=-Math.abs(r)+1);let u=Bt({year:r,month:i,day:a,hour:s===24?0:s,minute:c,second:l,millisecond:0}),d=+t,f=d%1e3;return d-=f>=0?f:1e3+f,(u-d)/6e4}equals(e){return e.type===`iana`&&e.name===this.name}get isValid(){return this.valid}},we={};function Te(e,t={}){let n=JSON.stringify([e,t]),r=we[n];return r||(r=new Intl.ListFormat(e,t),we[n]=r),r}var Ee=new Map;function De(e,t={}){let n=JSON.stringify([e,t]),r=Ee.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Ee.set(n,r)),r}var Oe=new Map;function ke(e,t={}){let n=JSON.stringify([e,t]),r=Oe.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Oe.set(n,r)),r}var Ae=new Map;function je(e,t={}){let{base:n,...r}=t,i=JSON.stringify([e,r]),a=Ae.get(i);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,t),Ae.set(i,a)),a}var Me=null;function Ne(){return Me||(Me=new Intl.DateTimeFormat().resolvedOptions().locale,Me)}var Pe=new Map;function Fe(e){let t=Pe.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Pe.set(e,t)),t}var Ie=new Map;function Le(e){let t=Ie.get(e);if(!t){let n=new Intl.Locale(e);t=`getWeekInfo`in n?n.getWeekInfo():n.weekInfo,`minimalDays`in t||(t={...qe,...t}),Ie.set(e,t)}return t}function Re(e){let t=e.indexOf(`-x-`);t!==-1&&(e=e.substring(0,t));let n=e.indexOf(`-u-`);if(n===-1)return[e];{let t,r;try{t=De(e).resolvedOptions(),r=e}catch{let i=e.substring(0,n);t=De(i).resolvedOptions(),r=i}let{numberingSystem:i,calendar:a}=t;return[r,i,a]}}function ze(e,t,n){return n||t?(e.includes(`-u-`)||(e+=`-u`),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`),e):e}function Be(e){let t=[];for(let n=1;n<=12;n++){let r=Y.utc(2009,n,1);t.push(e(r))}return t}function Ve(e){let t=[];for(let n=1;n<=7;n++){let r=Y.utc(2016,11,13+n);t.push(e(r))}return t}function He(e,t,n,r){let i=e.listingMode();return i===`error`?null:i===`en`?n(t):r(t)}function Ue(e){return e.numberingSystem&&e.numberingSystem!==`latn`?!1:e.numberingSystem===`latn`||!e.locale||e.locale.startsWith(`en`)||Fe(e.locale).numberingSystem===`latn`}var We=class{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let{padTo:r,floor:i,...a}=n;if(!t||Object.keys(a).length>0){let t={useGrouping:!1,...n};n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=ke(e,t)}}format(e){if(this.inf){let t=this.floor?Math.floor(e):e;return this.inf.format(t)}return A(this.floor?Math.floor(e):It(e,3),this.padTo)}},Ge=class{constructor(e,t,n){this.opts=n,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=e;else if(e.zone.type===`fixed`){let t=-1*(e.offset/60),n=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;e.offset!==0&&v.create(n).valid?(r=n,this.dt=e):(r=`UTC`,this.dt=e.offset===0?e:e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type===`system`?this.dt=e:e.zone.type===`iana`?(this.dt=e,r=e.zone.name):(r=`UTC`,this.dt=e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone);let i={...this.opts};i.timeZone=i.timeZone||r,this.dtf=De(t,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(``):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if(e.type===`timeZoneName`){let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}return e}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},Ke=class{constructor(e,t,n){this.opts={style:`long`,...n},!t&&Ot()&&(this.rtf=je(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):mn(t,e,this.opts.numeric,this.opts.style!==`long`)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}},qe={firstDay:1,minimalDays:4,weekend:[6,7]},y=class e{static fromOpts(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,a=!1){let o=t||C.defaultLocale,s=o||(a?`en-US`:Ne()),c=n||C.defaultNumberingSystem,l=r||C.defaultOutputCalendar,u=Nt(i)||C.defaultWeekSettings;return new e(s,c,l,u,o)}static resetCache(){Me=null,Ee.clear(),Oe.clear(),Ae.clear(),Pe.clear(),Ie.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return e.create(t,n,r,i)}constructor(e,t,n,r,i){let[a,o,s]=Re(e);this.locale=a,this.numberingSystem=t||o||null,this.outputCalendar=n||s||null,this.weekSettings=r,this.intl=ze(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached??=Ue(this),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem===`latn`)&&(this.outputCalendar===null||this.outputCalendar===`gregory`);return e&&t?`en`:`intl`}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Nt(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return He(this,e,$t,()=>{let n=this.intl===`ja`||this.intl.startsWith(`ja-`);t&=!n;let r=t?{month:e,day:`numeric`}:{month:e},i=t?`format`:`standalone`;if(!this.monthsCache[i][e]){let t=n?e=>this.dtFormatter(e,r).format():e=>this.extract(e,r,`month`);this.monthsCache[i][e]=Be(t)}return this.monthsCache[i][e]})}weekdays(e,t=!1){return He(this,e,rn,()=>{let n=t?{weekday:e,year:`numeric`,month:`long`,day:`numeric`}:{weekday:e},r=t?`format`:`standalone`;return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=Ve(e=>this.extract(e,n,`weekday`))),this.weekdaysCache[r][e]})}meridiems(){return He(this,void 0,()=>an,()=>{if(!this.meridiemCache){let e={hour:`numeric`,hourCycle:`h12`};this.meridiemCache=[Y.utc(2016,11,13,9),Y.utc(2016,11,13,19)].map(t=>this.extract(t,e,`dayperiod`))}return this.meridiemCache})}eras(e){return He(this,e,ln,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[Y.utc(-40,1,1),Y.utc(2017,1,1)].map(e=>this.extract(e,t,`era`))),this.eraCache[e]})}extract(e,t,n){let r=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===n);return r?r.value:null}numberFormatter(e={}){return new We(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new Ge(e,this.intl,t)}relFormatter(e={}){return new Ke(this.intl,this.isEnglish(),e)}listFormatter(e={}){return Te(this.intl,e)}isEnglish(){return this.locale===`en`||this.locale.toLowerCase()===`en-us`||Fe(this.intl).locale.startsWith(`en-us`)}getWeekSettings(){return this.weekSettings?this.weekSettings:kt()?Le(this.locale):qe}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}},Je=null,b=class e extends he{static get utcInstance(){return Je===null&&(Je=new e(0)),Je}static instance(t){return t===0?e.utcInstance:new e(t)}static parseSpecifier(t){if(t){let n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new e(Gt(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return`fixed`}get name(){return this.fixed===0?`UTC`:`UTC${Jt(this.fixed,`narrow`)}`}get ianaName(){return this.fixed===0?`Etc/UTC`:`Etc/GMT${Jt(-this.fixed,`narrow`)}`}offsetName(){return this.name}formatOffset(e,t){return Jt(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type===`fixed`&&e.fixed===this.fixed}get isValid(){return!0}},Ye=class extends he{constructor(e){super(),this.zoneName=e}get type(){return`invalid`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return``}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function x(e,t){if(E(e)||e===null)return t;if(e instanceof he)return e;if(Et(e)){let n=e.toLowerCase();return n==="default"?t:n===`local`||n===`system`?_e.instance:n===`utc`||n===`gmt`?b.utcInstance:b.parseSpecifier(n)||v.create(e)}return D(e)?b.instance(e):typeof e==`object`&&`offset`in e&&typeof e.offset==`function`?e:new Ye(e)}var Xe={arab:`[٠-٩]`,arabext:`[۰-۹]`,bali:`[᭐-᭙]`,beng:`[০-৯]`,deva:`[०-९]`,fullwide:`[０-９]`,gujr:`[૦-૯]`,hanidec:`[〇|一|二|三|四|五|六|七|八|九]`,khmr:`[០-៩]`,knda:`[೦-೯]`,laoo:`[໐-໙]`,limb:`[᥆-᥏]`,mlym:`[൦-൯]`,mong:`[᠐-᠙]`,mymr:`[၀-၉]`,orya:`[୦-୯]`,tamldec:`[௦-௯]`,telu:`[౦-౯]`,thai:`[๐-๙]`,tibt:`[༠-༩]`,latn:`\\d`},Ze={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Qe=Xe.hanidec.replace(/[\[|\]]/g,``).split(``);function $e(e){let t=parseInt(e,10);if(isNaN(t)){t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(e[n].search(Xe.hanidec)!==-1)t+=Qe.indexOf(e[n]);else for(let e in Ze){let[n,i]=Ze[e];r>=n&&r<=i&&(t+=r-n)}}return parseInt(t,10)}return t}var et=new Map;function tt(){et.clear()}function S({numberingSystem:e},t=``){let n=e||`latn`,r=et.get(n);r===void 0&&(r=new Map,et.set(n,r));let i=r.get(t);return i===void 0&&(i=RegExp(`${Xe[n]}${t}`),r.set(t,i)),i}var nt=()=>Date.now(),rt=`system`,it=null,at=null,ot=null,st=60,ct,lt=null,C=class{static get now(){return nt}static set now(e){nt=e}static set defaultZone(e){rt=e}static get defaultZone(){return x(rt,_e.instance)}static get defaultLocale(){return it}static set defaultLocale(e){it=e}static get defaultNumberingSystem(){return at}static set defaultNumberingSystem(e){at=e}static get defaultOutputCalendar(){return ot}static set defaultOutputCalendar(e){ot=e}static get defaultWeekSettings(){return lt}static set defaultWeekSettings(e){lt=Nt(e)}static get twoDigitCutoffYear(){return st}static set twoDigitCutoffYear(e){st=e%100}static get throwOnInvalid(){return ct}static set throwOnInvalid(e){ct=e}static resetCaches(){y.resetCache(),v.resetCache(),Y.resetCache(),tt()}},w=class{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},ut=[0,31,59,90,120,151,181,212,243,273,304,334],dt=[0,31,60,91,121,152,182,213,244,274,305,335];function T(e,t){return new w(`unit out of range`,`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function ft(e,t,n){let r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);let i=r.getUTCDay();return i===0?7:i}function pt(e,t,n){return n+(Lt(e)?dt:ut)[t-1]}function mt(e,t){let n=Lt(e)?dt:ut,r=n.findIndex(e=>e<t),i=t-n[r];return{month:r+1,day:i}}function ht(e,t){return(e-t+7)%7+1}function gt(e,t=4,n=1){let{year:r,month:i,day:a}=e,o=pt(r,i,a),s=ht(ft(r,i,a),n),c=Math.floor((o-s+14-t)/7),l;return c<1?(l=r-1,c=Ht(l,t,n)):c>Ht(r,t,n)?(l=r+1,c=1):l=r,{weekYear:l,weekNumber:c,weekday:s,...Yt(e)}}function _t(e,t=4,n=1){let{weekYear:r,weekNumber:i,weekday:a}=e,o=ht(ft(r,1,t),n),s=Rt(r),c=i*7+a-o-7+t,l;c<1?(l=r-1,c+=Rt(l)):c>s?(l=r+1,c-=Rt(r)):l=r;let{month:u,day:d}=mt(l,c);return{year:l,month:u,day:d,...Yt(e)}}function vt(e){let{year:t,month:n,day:r}=e;return{year:t,ordinal:pt(t,n,r),...Yt(e)}}function yt(e){let{year:t,ordinal:n}=e,{month:r,day:i}=mt(t,n);return{year:t,month:r,day:i,...Yt(e)}}function bt(e,t){if(!E(e.localWeekday)||!E(e.localWeekNumber)||!E(e.localWeekYear)){if(!E(e.weekday)||!E(e.weekNumber)||!E(e.weekYear))throw new i(`Cannot mix locale-based week fields with ISO-based week fields`);return E(e.localWeekday)||(e.weekday=e.localWeekday),E(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),E(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}return{minDaysInFirstWeek:4,startOfWeek:1}}function xt(e,t=4,n=1){let r=Tt(e.weekYear),i=k(e.weekNumber,1,Ht(e.weekYear,t,n)),a=k(e.weekday,1,7);return r?i?!a&&T(`weekday`,e.weekday):T(`week`,e.weekNumber):T(`weekYear`,e.weekYear)}function St(e){let t=Tt(e.year),n=k(e.ordinal,1,Rt(e.year));return t?!n&&T(`ordinal`,e.ordinal):T(`year`,e.year)}function Ct(e){let t=Tt(e.year),n=k(e.month,1,12),r=k(e.day,1,zt(e.year,e.month));return t?n?!r&&T(`day`,e.day):T(`month`,e.month):T(`year`,e.year)}function wt(e){let{hour:t,minute:n,second:r,millisecond:i}=e,a=k(t,0,23)||t===24&&n===0&&r===0&&i===0,o=k(n,0,59),s=k(r,0,59),c=k(i,0,999);return a?o?s?!c&&T(`millisecond`,i):T(`second`,r):T(`minute`,n):T(`hour`,t)}function E(e){return e===void 0}function D(e){return typeof e==`number`}function Tt(e){return typeof e==`number`&&e%1==0}function Et(e){return typeof e==`string`}function Dt(e){return Object.prototype.toString.call(e)===`[object Date]`}function Ot(){try{return typeof Intl<`u`&&!!Intl.RelativeTimeFormat}catch{return!1}}function kt(){try{return typeof Intl<`u`&&!!Intl.Locale&&(`weekInfo`in Intl.Locale.prototype||`getWeekInfo`in Intl.Locale.prototype)}catch{return!1}}function At(e){return Array.isArray(e)?e:[e]}function jt(e,t,n){if(e.length!==0)return e.reduce((e,r)=>{let i=[t(r),r];return e&&n(e[0],i[0])===e[0]?e:i},null)[1]}function Mt(e,t){return t.reduce((t,n)=>(t[n]=e[n],t),{})}function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Nt(e){if(e==null)return null;if(typeof e!=`object`)throw new o(`Week settings must be an object`);if(!k(e.firstDay,1,7)||!k(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!k(e,1,7)))throw new o(`Invalid week settings`);return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function k(e,t,n){return Tt(e)&&e>=t&&e<=n}function Pt(e,t){return e-t*Math.floor(e/t)}function A(e,t=2){let n=e<0,r;return r=n?`-`+(``+-e).padStart(t,`0`):(``+e).padStart(t,`0`),r}function j(e){if(!(E(e)||e===null||e===``))return parseInt(e,10)}function M(e){if(!(E(e)||e===null||e===``))return parseFloat(e)}function Ft(e){if(!(E(e)||e===null||e===``)){let t=parseFloat(`0.`+e)*1e3;return Math.floor(t)}}function It(e,t,n=`round`){let r=10**t;switch(n){case`expand`:return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case`trunc`:return Math.trunc(e*r)/r;case`round`:return Math.round(e*r)/r;case`floor`:return Math.floor(e*r)/r;case`ceil`:return Math.ceil(e*r)/r;default:throw RangeError(`Value rounding ${n} is out of range`)}}function Lt(e){return e%4==0&&(e%100!=0||e%400==0)}function Rt(e){return Lt(e)?366:365}function zt(e,t){let n=Pt(t-1,12)+1,r=e+(t-n)/12;return n===2?Lt(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Bt(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Vt(e,t,n){return-ht(ft(e,1,t),n)+t-1}function Ht(e,t=4,n=1){let r=Vt(e,t,n),i=Vt(e+1,t,n);return(Rt(e)-r+i)/7}function Ut(e){return e>99?e:e>C.twoDigitCutoffYear?1900+e:2e3+e}function Wt(e,t,n,r=null){let i=new Date(e),a={hourCycle:`h23`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};r&&(a.timeZone=r);let o={timeZoneName:t,...a},s=new Intl.DateTimeFormat(n,o).formatToParts(i).find(e=>e.type.toLowerCase()===`timezonename`);return s?s.value:null}function Gt(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);let r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Kt(e){let t=Number(e);if(typeof e==`boolean`||e===``||!Number.isFinite(t))throw new o(`Invalid unit value ${e}`);return t}function qt(e,t){let n={};for(let r in e)if(O(e,r)){let i=e[r];if(i==null)continue;n[t(r)]=Kt(i)}return n}function Jt(e,t){let n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?`+`:`-`;switch(t){case`short`:return`${i}${A(n,2)}:${A(r,2)}`;case`narrow`:return`${i}${n}${r>0?`:${r}`:``}`;case`techie`:return`${i}${A(n,2)}${A(r,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function Yt(e){return Mt(e,[`hour`,`minute`,`second`,`millisecond`])}var Xt=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],Zt=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],Qt=[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`];function $t(e){switch(e){case`narrow`:return[...Qt];case`short`:return[...Zt];case`long`:return[...Xt];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`];case`2-digit`:return[`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`];default:return null}}var en=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],tn=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],nn=[`M`,`T`,`W`,`T`,`F`,`S`,`S`];function rn(e){switch(e){case`narrow`:return[...nn];case`short`:return[...tn];case`long`:return[...en];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`];default:return null}}var an=[`AM`,`PM`],on=[`Before Christ`,`Anno Domini`],sn=[`BC`,`AD`],cn=[`B`,`A`];function ln(e){switch(e){case`narrow`:return[...cn];case`short`:return[...sn];case`long`:return[...on];default:return null}}function un(e){return an[e.hour<12?0:1]}function dn(e,t){return rn(t)[e.weekday-1]}function fn(e,t){return $t(t)[e.month-1]}function pn(e,t){return ln(t)[e.year<0?0:1]}function mn(e,t,n=`always`,r=!1){let i={years:[`year`,`yr.`],quarters:[`quarter`,`qtr.`],months:[`month`,`mo.`],weeks:[`week`,`wk.`],days:[`day`,`day`,`days`],hours:[`hour`,`hr.`],minutes:[`minute`,`min.`],seconds:[`second`,`sec.`]},a=[`hours`,`minutes`,`seconds`].indexOf(e)===-1;if(n===`auto`&&a){let n=e===`days`;switch(t){case 1:return n?`tomorrow`:`next ${i[e][0]}`;case-1:return n?`yesterday`:`last ${i[e][0]}`;case 0:return n?`today`:`this ${i[e][0]}`}}let o=Object.is(t,-0)||t<0,s=Math.abs(t),c=s===1,l=i[e],u=r?c?l[1]:l[2]||l[1]:c?i[e][0]:e;return o?`${s} ${u} ago`:`in ${s} ${u}`}function hn(e,t){let n=``;for(let r of e)r.literal?n+=r.val:n+=t(r.val);return n}var gn={D:d,DD:f,DDD:m,DDDD:h,t:ee,tt:te,ttt:ne,tttt:g,T:re,TT:ie,TTT:ae,TTTT:oe,f:_,ff:ce,fff:de,ffff:pe,F:se,FF:le,FFF:fe,FFFF:me},N=class e{static create(t,n={}){return new e(t,n)}static parseFormat(e){let t=null,n=``,r=!1,i=[];for(let a=0;a<e.length;a++){let o=e.charAt(a);o===`'`?((n.length>0||r)&&i.push({literal:r||/^\s+$/.test(n),val:n===``?`'`:n}),t=null,n=``,r=!r):r||o===t?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,t=o)}return n.length>0&&i.push({literal:r||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return gn[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,n=void 0){if(this.opts.forceSimple)return A(e,t);let r={...this.opts};return t>0&&(r.padTo=t),n&&(r.signDisplay=n),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(t,n){let r=this.loc.listingMode()===`en`,i=this.loc.outputCalendar&&this.loc.outputCalendar!==`gregory`,a=(e,n)=>this.loc.extract(t,e,n),o=e=>t.isOffsetFixed&&t.offset===0&&e.allowZ?`Z`:t.isValid?t.zone.formatOffset(t.ts,e.format):``,s=()=>r?un(t):a({hour:`numeric`,hourCycle:`h12`},`dayperiod`),c=(e,n)=>r?fn(t,e):a(n?{month:e}:{month:e,day:`numeric`},`month`),l=(e,n)=>r?dn(t,e):a(n?{weekday:e}:{weekday:e,month:`long`,day:`numeric`},`weekday`),u=n=>{let r=e.macroTokenToFormatOpts(n);return r?this.formatWithSystemDefault(t,r):n},d=e=>r?pn(t,e):a({era:e},`era`);return hn(e.parseFormat(n),e=>{switch(e){case`S`:return this.num(t.millisecond);case`u`:case`SSS`:return this.num(t.millisecond,3);case`s`:return this.num(t.second);case`ss`:return this.num(t.second,2);case`uu`:return this.num(Math.floor(t.millisecond/10),2);case`uuu`:return this.num(Math.floor(t.millisecond/100));case`m`:return this.num(t.minute);case`mm`:return this.num(t.minute,2);case`h`:return this.num(t.hour%12==0?12:t.hour%12);case`hh`:return this.num(t.hour%12==0?12:t.hour%12,2);case`H`:return this.num(t.hour);case`HH`:return this.num(t.hour,2);case`Z`:return o({format:`narrow`,allowZ:this.opts.allowZ});case`ZZ`:return o({format:`short`,allowZ:this.opts.allowZ});case`ZZZ`:return o({format:`techie`,allowZ:this.opts.allowZ});case`ZZZZ`:return t.zone.offsetName(t.ts,{format:`short`,locale:this.loc.locale});case`ZZZZZ`:return t.zone.offsetName(t.ts,{format:`long`,locale:this.loc.locale});case`z`:return t.zoneName;case`a`:return s();case`d`:return i?a({day:`numeric`},`day`):this.num(t.day);case`dd`:return i?a({day:`2-digit`},`day`):this.num(t.day,2);case`c`:return this.num(t.weekday);case`ccc`:return l(`short`,!0);case`cccc`:return l(`long`,!0);case`ccccc`:return l(`narrow`,!0);case`E`:return this.num(t.weekday);case`EEE`:return l(`short`,!1);case`EEEE`:return l(`long`,!1);case`EEEEE`:return l(`narrow`,!1);case`L`:return i?a({month:`numeric`,day:`numeric`},`month`):this.num(t.month);case`LL`:return i?a({month:`2-digit`,day:`numeric`},`month`):this.num(t.month,2);case`LLL`:return c(`short`,!0);case`LLLL`:return c(`long`,!0);case`LLLLL`:return c(`narrow`,!0);case`M`:return i?a({month:`numeric`},`month`):this.num(t.month);case`MM`:return i?a({month:`2-digit`},`month`):this.num(t.month,2);case`MMM`:return c(`short`,!1);case`MMMM`:return c(`long`,!1);case`MMMMM`:return c(`narrow`,!1);case`y`:return i?a({year:`numeric`},`year`):this.num(t.year);case`yy`:return i?a({year:`2-digit`},`year`):this.num(t.year.toString().slice(-2),2);case`yyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,4);case`yyyyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,6);case`G`:return d(`short`);case`GG`:return d(`long`);case`GGGGG`:return d(`narrow`);case`kk`:return this.num(t.weekYear.toString().slice(-2),2);case`kkkk`:return this.num(t.weekYear,4);case`W`:return this.num(t.weekNumber);case`WW`:return this.num(t.weekNumber,2);case`n`:return this.num(t.localWeekNumber);case`nn`:return this.num(t.localWeekNumber,2);case`ii`:return this.num(t.localWeekYear.toString().slice(-2),2);case`iiii`:return this.num(t.localWeekYear,4);case`o`:return this.num(t.ordinal);case`ooo`:return this.num(t.ordinal,3);case`q`:return this.num(t.quarter);case`qq`:return this.num(t.quarter,2);case`X`:return this.num(Math.floor(t.ts/1e3));case`x`:return this.num(t.ts);default:return u(e)}})}formatDurationFromString(t,n){let r=this.opts.signMode===`negativeLargestOnly`?-1:1,i=e=>{switch(e[0]){case`S`:return`milliseconds`;case`s`:return`seconds`;case`m`:return`minutes`;case`h`:return`hours`;case`d`:return`days`;case`w`:return`weeks`;case`M`:return`months`;case`y`:return`years`;default:return null}},a=(e,t)=>n=>{let a=i(n);if(a){let i=t.isNegativeDuration&&a!==t.largestUnit?r:1,o;return o=this.opts.signMode===`negativeLargestOnly`&&a!==t.largestUnit?`never`:this.opts.signMode===`all`?`always`:`auto`,this.num(e.get(a)*i,n.length,o)}return n},o=e.parseFormat(n),s=o.reduce((e,{literal:t,val:n})=>t?e:e.concat(n),[]),c=t.shiftTo(...s.map(i).filter(e=>e));return hn(o,a(c,{isNegativeDuration:c<0,largestUnit:Object.keys(c.values)[0]}))}},_n=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function P(...e){let t=e.reduce((e,t)=>e+t.source,``);return RegExp(`^${t}$`)}function F(...e){return t=>e.reduce(([e,n,r],i)=>{let[a,o,s]=i(t,r);return[{...e,...a},o||n,s]},[{},null,1]).slice(0,2)}function I(e,...t){if(e==null)return[null,null];for(let[n,r]of t){let t=n.exec(e);if(t)return r(t)}return[null,null]}function vn(...e){return(t,n)=>{let r={},i;for(i=0;i<e.length;i++)r[e[i]]=j(t[n+i]);return[r,null,n+i]}}var yn=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,bn=`(?:${yn.source}?(?:\\[(${_n.source})\\])?)?`,xn=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Sn=RegExp(`${xn.source}${bn}`),Cn=RegExp(`(?:[Tt]${Sn.source})?`),wn=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Tn=/(\d{4})-?W(\d\d)(?:-?(\d))?/,En=/(\d{4})-?(\d{3})/,Dn=vn(`weekYear`,`weekNumber`,`weekDay`),On=vn(`year`,`ordinal`),kn=/(\d{4})-(\d\d)-(\d\d)/,An=RegExp(`${xn.source} ?(?:${yn.source}|(${_n.source}))?`),jn=RegExp(`(?: ${An.source})?`);function L(e,t,n){let r=e[t];return E(r)?n:j(r)}function Mn(e,t){return[{year:L(e,t),month:L(e,t+1,1),day:L(e,t+2,1)},null,t+3]}function R(e,t){return[{hours:L(e,t,0),minutes:L(e,t+1,0),seconds:L(e,t+2,0),milliseconds:Ft(e[t+3])},null,t+4]}function Nn(e,t){let n=!e[t]&&!e[t+1],r=Gt(e[t+1],e[t+2]);return[{},n?null:b.instance(r),t+3]}function Pn(e,t){return[{},e[t]?v.create(e[t]):null,t+1]}var Fn=RegExp(`^T?${xn.source}$`),In=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Ln(e){let[t,n,r,i,a,o,s,c,l]=e,u=t[0]===`-`,d=c&&c[0]===`-`,f=(e,t=!1)=>e!==void 0&&(t||e&&u)?-e:e;return[{years:f(M(n)),months:f(M(r)),weeks:f(M(i)),days:f(M(a)),hours:f(M(o)),minutes:f(M(s)),seconds:f(M(c),c===`-0`),milliseconds:f(Ft(l),d)}]}var Rn={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function zn(e,t,n,r,i,a,o){let s={year:t.length===2?Ut(j(t)):j(t),month:Zt.indexOf(n)+1,day:j(r),hour:j(i),minute:j(a)};return o&&(s.second=j(o)),e&&(s.weekday=e.length>3?en.indexOf(e)+1:tn.indexOf(e)+1),s}var Bn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Vn(e){let[,t,n,r,i,a,o,s,c,l,u,d]=e,f=zn(t,i,r,n,a,o,s),p;return p=c?Rn[c]:l?0:Gt(u,d),[f,new b(p)]}function Hn(e){return e.replace(/\([^()]*\)|[\n\t]/g,` `).replace(/(\s\s+)/g,` `).trim()}var Un=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Wn=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Gn=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Kn(e){let[,t,n,r,i,a,o,s]=e;return[zn(t,i,r,n,a,o,s),b.utcInstance]}function qn(e){let[,t,n,r,i,a,o,s]=e;return[zn(t,s,n,r,i,a,o),b.utcInstance]}var Jn=P(wn,Cn),Yn=P(Tn,Cn),Xn=P(En,Cn),Zn=P(Sn),Qn=F(Mn,R,Nn,Pn),$n=F(Dn,R,Nn,Pn),er=F(On,R,Nn,Pn),tr=F(R,Nn,Pn);function nr(e){return I(e,[Jn,Qn],[Yn,$n],[Xn,er],[Zn,tr])}function rr(e){return I(Hn(e),[Bn,Vn])}function ir(e){return I(e,[Un,Kn],[Wn,Kn],[Gn,qn])}function ar(e){return I(e,[In,Ln])}var or=F(R);function sr(e){return I(e,[Fn,or])}var cr=P(kn,jn),lr=P(An),ur=F(R,Nn,Pn);function dr(e){return I(e,[cr,Qn],[lr,ur])}var fr=`Invalid Duration`,pr={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},mr={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...pr},z=146097/400,B=146097/4800,hr={years:{quarters:4,months:12,weeks:z/7,days:z,hours:z*24,minutes:z*24*60,seconds:z*24*60*60,milliseconds:z*24*60*60*1e3},quarters:{months:3,weeks:z/28,days:z/4,hours:z*24/4,minutes:z*24*60/4,seconds:z*24*60*60/4,milliseconds:z*24*60*60*1e3/4},months:{weeks:B/7,days:B,hours:B*24,minutes:B*24*60,seconds:B*24*60*60,milliseconds:B*24*60*60*1e3},...pr},V=[`years`,`quarters`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`],gr=V.slice(0).reverse();function H(e,t,n=!1){return new U({values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function _r(e,t){let n=t.milliseconds??0;for(let r of gr.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function vr(e,t){let n=_r(e,t)<0?-1:1;V.reduceRight((r,i)=>{if(E(t[i]))return r;if(r){let a=t[r]*n,o=e[i][r],s=Math.floor(a/o);t[i]+=s*n,t[r]-=s*o*n}return i},null),V.reduce((n,r)=>{if(E(t[r]))return n;if(n){let i=t[n]%1;t[n]-=i,t[r]+=i*e[n][r]}return r},null)}function yr(e){let t={};for(let[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}var U=class e{constructor(e){let t=e.conversionAccuracy===`longterm`||!1,n=t?hr:mr;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||y.create(),this.conversionAccuracy=t?`longterm`:`casual`,this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,n){return e.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(typeof t!=`object`||!t)throw new o(`Duration.fromObject: argument expected to be an object, got ${t===null?`null`:typeof t}`);return new e({values:qt(t,e.normalizeUnit),loc:y.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(D(t))return e.fromMillis(t);if(e.isDuration(t))return t;if(typeof t==`object`)return e.fromObject(t);throw new o(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){let[r]=ar(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){let[r]=sr(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new o(`need to specify a reason the Duration is invalid`);let i=t instanceof w?t:new w(t,n);if(C.throwOnInvalid)throw new r(i);return new e({invalid:i})}static normalizeUnit(e){let t={year:`years`,years:`years`,quarter:`quarters`,quarters:`quarters`,month:`months`,months:`months`,week:`weeks`,weeks:`weeks`,day:`days`,days:`days`,hour:`hours`,hours:`hours`,minute:`minutes`,minutes:`minutes`,second:`seconds`,seconds:`seconds`,millisecond:`milliseconds`,milliseconds:`milliseconds`}[e&&e.toLowerCase()];if(!t)throw new a(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?N.create(this.loc,n).formatDurationFromString(this,e):fr}toHuman(e={}){if(!this.isValid)return fr;let t=e.showZeros!==!1,n=V.map(n=>{let r=this.values[n];return E(r)||r===0&&!t?null:this.loc.numberFormatter({style:`unit`,unitDisplay:`long`,...e,unit:n.slice(0,-1)}).format(r)}).filter(e=>e);return this.loc.listFormatter({type:`conjunction`,style:e.listStyle||`narrow`,...e}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e=`P`;return this.years!==0&&(e+=this.years+`Y`),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+`M`),this.weeks!==0&&(e+=this.weeks+`W`),this.days!==0&&(e+=this.days+`D`),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+=`T`),this.hours!==0&&(e+=this.hours+`H`),this.minutes!==0&&(e+=this.minutes+`M`),(this.seconds!==0||this.milliseconds!==0)&&(e+=It(this.seconds+this.milliseconds/1e3,3)+`S`),e===`P`&&(e+=`T0S`),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:`extended`,...e,includeOffset:!1},Y.fromMillis(t,{zone:`UTC`}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?_r(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t),r={};for(let e of V)(O(n.values,e)||O(this.values,e))&&(r[e]=n.get(e)+this.get(e));return H(this,{values:r},!0)}minus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let n of Object.keys(this.values))t[n]=Kt(e(this.values[n],n));return H(this,{values:t},!0)}get(t){return this[e.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let n={...this.values,...qt(t,e.normalizeUnit)};return H(this,{values:n})}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){let i={loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n};return H(this,i)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return vr(this.matrix,e),H(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=yr(this.normalize().shiftToAll().toObject());return H(this,{values:e},!0)}shiftTo(...t){if(!this.isValid||t.length===0)return this;t=t.map(t=>e.normalizeUnit(t));let n={},r={},i=this.toObject(),a;for(let e of V)if(t.indexOf(e)>=0){a=e;let t=0;for(let n in r)t+=this.matrix[n][e]*r[n],r[n]=0;D(i[e])&&(t+=i[e]);let o=Math.trunc(t);n[e]=o,r[e]=(t*1e3-o*1e3)/1e3}else D(i[e])&&(r[e]=i[e]);for(let e in r)r[e]!==0&&(n[a]+=e===a?r[e]:r[e]/this.matrix[a][e]);return vr(this.matrix,n),H(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo(`years`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=this.values[t]===0?0:-this.values[t];return H(this,{values:e},!0)}removeZeros(){if(!this.isValid)return this;let e=yr(this.values);return H(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function t(e,t){return e===void 0||e===0?t===void 0||t===0:e===t}for(let n of V)if(!t(this.values[n],e.values[n]))return!1;return!0}},W=`Invalid Interval`;function br(e,t){return!e||!e.isValid?xr.invalid(`missing or invalid start`):!t||!t.isValid?xr.invalid(`missing or invalid end`):t<e?xr.invalid(`end before start`,`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}var xr=class e{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new o(`need to specify a reason the Interval is invalid`);let i=t instanceof w?t:new w(t,r);if(C.throwOnInvalid)throw new n(i);return new e({invalid:i})}static fromDateTimes(t,n){let r=bi(t),i=bi(n);return br(r,i)??new e({start:r,end:i})}static after(t,n){let r=U.fromDurationLike(n),i=bi(t);return e.fromDateTimes(i,i.plus(r))}static before(t,n){let r=U.fromDurationLike(n),i=bi(t);return e.fromDateTimes(i.minus(r),i)}static fromISO(t,n){let[r,i]=(t||``).split(`/`,2);if(r&&i){let t,a;try{t=Y.fromISO(r,n),a=t.isValid}catch{a=!1}let o,s;try{o=Y.fromISO(i,n),s=o.isValid}catch{s=!1}if(a&&s)return e.fromDateTimes(t,o);if(a){let r=U.fromISO(i,n);if(r.isValid)return e.after(t,r)}else if(s){let t=U.fromISO(r,n);if(t.isValid)return e.before(o,t)}}return e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e=`milliseconds`){return this.isValid?this.toDuration(e).get(e):NaN}count(e=`milliseconds`,t){if(!this.isValid)return NaN;let n=this.start.startOf(e,t),r;return r=t?.useLocaleWeeks?this.end.reconfigure({locale:n.locale}):this.end,r=r.startOf(e,t),Math.floor(r.diff(n,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:t,end:n}={}){return this.isValid?e.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];let n=t.map(bi).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:i}=this,a=0;for(;i<this.e;){let t=n[a]||this.e,o=+t>+this.e?this.e:t;r.push(e.fromDateTimes(i,o)),i=o,a+=1}return r}splitBy(t){let n=U.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as(`milliseconds`)===0)return[];let{s:r}=this,i=1,a,o=[];for(;r<this.e;){let t=this.start.plus(n.mapUnits(e=>e*i));a=+t>+this.e?this.e:t,o.push(e.fromDateTimes(r,a)),r=a,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(t){if(!this.isValid)return this;let n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:e.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;let n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return e.fromDateTimes(n,r)}static merge(e){let[t,n]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n],[[],null]);return n&&t.push(n),t}static xor(t){let n=null,r=0,i=[],a=t.map(e=>[{time:e.s,type:`s`},{time:e.e,type:`e`}]),o=Array.prototype.concat(...a).sort((e,t)=>e.time-t.time);for(let t of o)r+=t.type===`s`?1:-1,r===1?n=t.time:(n&&+n!=+t.time&&i.push(e.fromDateTimes(n,t.time)),n=null);return e.merge(i)}difference(...t){return e.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:W}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=d,t={}){return this.isValid?N.create(this.s.loc.clone(t),e).formatInterval(this):W}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:W}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:W}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:W}toFormat(e,{separator:t=` – `}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:W}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):U.invalid(this.invalidReason)}mapEndpoints(t){return e.fromDateTimes(t(this.s),t(this.e))}},Sr=class{static hasDST(e=C.defaultZone){let t=Y.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return v.isValidZone(e)}static normalizeZone(e){return x(e,C.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||y.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||y.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||y.create(e)).getWeekendDays().slice()}static months(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||y.create(t,n,i)).months(e)}static monthsFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||y.create(t,n,i)).months(e,!0)}static weekdays(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||y.create(t,n,null)).weekdays(e)}static weekdaysFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||y.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return y.create(e).meridiems()}static eras(e=`short`,{locale:t=null}={}){return y.create(t,null,`gregory`).eras(e)}static features(){return{relative:Ot(),localeWeek:kt()}}};function Cr(e,t){let n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf(`day`).valueOf(),r=n(t)-n(e);return Math.floor(U.fromMillis(r).as(`days`))}function wr(e,t,n){let r=[[`years`,(e,t)=>t.year-e.year],[`quarters`,(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],[`months`,(e,t)=>t.month-e.month+(t.year-e.year)*12],[`weeks`,(e,t)=>{let n=Cr(e,t);return(n-n%7)/7}],[`days`,Cr]],i={},a=e,o,s;for(let[c,l]of r)n.indexOf(c)>=0&&(o=c,i[c]=l(e,t),s=a.plus(i),s>t?(i[c]--,e=a.plus(i),e>t&&(s=e,i[c]--,e=a.plus(i))):e=s);return[e,i,s,o]}function Tr(e,t,n,r){let[i,a,o,s]=wr(e,t,n),c=t-i,l=n.filter(e=>[`hours`,`minutes`,`seconds`,`milliseconds`].indexOf(e)>=0);l.length===0&&(o<t&&(o=i.plus({[s]:1})),o!==i&&(a[s]=(a[s]||0)+c/(o-i)));let u=U.fromObject(a,r);return l.length>0?U.fromMillis(c,r).shiftTo(...l).plus(u):u}var Er=`missing Intl.DateTimeFormat.formatToParts support`;function G(e,t=e=>e){return{regex:e,deser:([e])=>t($e(e))}}var Dr=`[ \xA0]`,Or=new RegExp(Dr,`g`);function kr(e){return e.replace(/\./g,`\\.?`).replace(Or,Dr)}function Ar(e){return e.replace(/\./g,``).replace(Or,` `).toLowerCase()}function K(e,t){return e===null?null:{regex:RegExp(e.map(kr).join(`|`)),deser:([n])=>e.findIndex(e=>Ar(n)===Ar(e))+t}}function jr(e,t){return{regex:e,deser:([,e,t])=>Gt(e,t),groups:t}}function Mr(e){return{regex:e,deser:([e])=>e}}function Nr(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,`\\$&`)}function Pr(e,t){let n=S(t),r=S(t,`{2}`),i=S(t,`{3}`),a=S(t,`{4}`),o=S(t,`{6}`),s=S(t,`{1,2}`),c=S(t,`{1,3}`),l=S(t,`{1,6}`),u=S(t,`{1,9}`),d=S(t,`{2,4}`),f=S(t,`{4,6}`),p=e=>({regex:RegExp(Nr(e.val)),deser:([e])=>e,literal:!0}),m=(m=>{if(e.literal)return p(m);switch(m.val){case`G`:return K(t.eras(`short`),0);case`GG`:return K(t.eras(`long`),0);case`y`:return G(l);case`yy`:return G(d,Ut);case`yyyy`:return G(a);case`yyyyy`:return G(f);case`yyyyyy`:return G(o);case`M`:return G(s);case`MM`:return G(r);case`MMM`:return K(t.months(`short`,!0),1);case`MMMM`:return K(t.months(`long`,!0),1);case`L`:return G(s);case`LL`:return G(r);case`LLL`:return K(t.months(`short`,!1),1);case`LLLL`:return K(t.months(`long`,!1),1);case`d`:return G(s);case`dd`:return G(r);case`o`:return G(c);case`ooo`:return G(i);case`HH`:return G(r);case`H`:return G(s);case`hh`:return G(r);case`h`:return G(s);case`mm`:return G(r);case`m`:return G(s);case`q`:return G(s);case`qq`:return G(r);case`s`:return G(s);case`ss`:return G(r);case`S`:return G(c);case`SSS`:return G(i);case`u`:return Mr(u);case`uu`:return Mr(s);case`uuu`:return G(n);case`a`:return K(t.meridiems(),0);case`kkkk`:return G(a);case`kk`:return G(d,Ut);case`W`:return G(s);case`WW`:return G(r);case`E`:case`c`:return G(n);case`EEE`:return K(t.weekdays(`short`,!1),1);case`EEEE`:return K(t.weekdays(`long`,!1),1);case`ccc`:return K(t.weekdays(`short`,!0),1);case`cccc`:return K(t.weekdays(`long`,!0),1);case`Z`:case`ZZ`:return jr(RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case`ZZZ`:return jr(RegExp(`([+-]${s.source})(${r.source})?`),2);case`z`:return Mr(/[a-z_+-/]{1,256}?/i);case` `:return Mr(/[^\S\n\r]/);default:return p(m)}})(e)||{invalidReason:Er};return m.token=e,m}var Fr={year:{"2-digit":`yy`,numeric:`yyyyy`},month:{numeric:`M`,"2-digit":`MM`,short:`MMM`,long:`MMMM`},day:{numeric:`d`,"2-digit":`dd`},weekday:{short:`EEE`,long:`EEEE`},dayperiod:`a`,dayPeriod:`a`,hour12:{numeric:`h`,"2-digit":`hh`},hour24:{numeric:`H`,"2-digit":`HH`},minute:{numeric:`m`,"2-digit":`mm`},second:{numeric:`s`,"2-digit":`ss`},timeZoneName:{long:`ZZZZZ`,short:`ZZZ`}};function Ir(e,t,n){let{type:r,value:i}=e;if(r===`literal`){let e=/^\s+$/.test(i);return{literal:!e,val:e?` `:i}}let a=t[r],o=r;r===`hour`&&(o=t.hour12==null?t.hourCycle==null?n.hour12?`hour12`:`hour24`:t.hourCycle===`h11`||t.hourCycle===`h12`?`hour12`:`hour24`:t.hour12?`hour12`:`hour24`);let s=Fr[o];if(typeof s==`object`&&(s=s[a]),s)return{literal:!1,val:s}}function Lr(e){return[`^${e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,``)}$`,e]}function Rr(e,t,n){let r=e.match(t);if(r){let e={},t=1;for(let i in n)if(O(n,i)){let a=n[i],o=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(r.slice(t,t+o))),t+=o}return[r,e]}return[r,{}]}function zr(e){let t=e=>{switch(e){case`S`:return`millisecond`;case`s`:return`second`;case`m`:return`minute`;case`h`:case`H`:return`hour`;case`d`:return`day`;case`o`:return`ordinal`;case`L`:case`M`:return`month`;case`y`:return`year`;case`E`:case`c`:return`weekday`;case`W`:return`weekNumber`;case`k`:return`weekYear`;case`q`:return`quarter`;default:return null}},n=null,r;return E(e.z)||(n=v.create(e.z)),E(e.Z)||(n||=new b(e.Z),r=e.Z),E(e.q)||(e.M=(e.q-1)*3+1),E(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),E(e.u)||(e.S=Ft(e.u)),[Object.keys(e).reduce((n,r)=>{let i=t(r);return i&&(n[i]=e[r]),n},{}),n,r]}var Br=null;function Vr(){return Br||=Y.fromMillis(1555555555555),Br}function Hr(e,t){if(e.literal)return e;let n=qr(N.macroTokenToFormatOpts(e.val),t);return n==null||n.includes(void 0)?e:n}function Ur(e,t){return Array.prototype.concat(...e.map(e=>Hr(e,t)))}var Wr=class{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=Ur(N.parseFormat(t),e),this.units=this.tokens.map(t=>Pr(t,e)),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){let[e,t]=Lr(this.units);this.regex=RegExp(e,`i`),this.handlers=t}}explainFromTokens(e){if(this.isValid){let[t,n]=Rr(e,this.regex,this.handlers),[r,a,o]=n?zr(n):[null,null,void 0];if(O(n,`a`)&&O(n,`H`))throw new i(`Can't include meridiem when specifying 24-hour format`);return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:r,zone:a,specificOffset:o}}return{input:e,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}};function Gr(e,t,n){return new Wr(e,n).explainFromTokens(t)}function Kr(e,t,n){let{result:r,zone:i,specificOffset:a,invalidReason:o}=Gr(e,t,n);return[r,i,a,o]}function qr(e,t){if(!e)return null;let n=N.create(t,e).dtFormatter(Vr()),r=n.formatToParts(),i=n.resolvedOptions();return r.map(t=>Ir(t,e,i))}var Jr=`Invalid DateTime`,Yr=864e13;function Xr(e){return new w(`unsupported zone`,`the zone "${e.name}" is not supported`)}function Zr(e){return e.weekData===null&&(e.weekData=gt(e.c)),e.weekData}function Qr(e){return e.localWeekData===null&&(e.localWeekData=gt(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function q(e,t){let n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Y({...n,...t,old:n})}function $r(e,t,n){let r=e-t*60*1e3,i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;let a=n.offset(r);return i===a?[r,i]:[e-Math.min(i,a)*60*1e3,Math.max(i,a)]}function ei(e,t){e+=t*60*1e3;let n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function ti(e,t,n){return $r(Bt(e),t,n)}function ni(e,t){let n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,a={...e.c,year:r,month:i,day:Math.min(e.c.day,zt(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=U.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as(`milliseconds`),[s,c]=$r(Bt(a),n,e.zone);return o!==0&&(s+=o,c=e.zone.offset(s)),{ts:s,o:c}}function J(e,t,n,r,i,a){let{setZone:o,zone:s}=n;if(e&&Object.keys(e).length!==0||t){let r=t||s,i=Y.fromObject(e,{...n,zone:r,specificOffset:a});return o?i:i.setZone(s)}return Y.invalid(new w(`unparsable`,`the input "${i}" can't be parsed as ${r}`))}function ri(e,t,n=!0){return e.isValid?N.create(y.create(`en-US`),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function ii(e,t,n){let r=e.c.year>9999||e.c.year<0,i=``;if(r&&e.c.year>=0&&(i+=`+`),i+=A(e.c.year,r?6:4),n===`year`)return i;if(t){if(i+=`-`,i+=A(e.c.month),n===`month`)return i;i+=`-`}else if(i+=A(e.c.month),n===`month`)return i;return i+=A(e.c.day),i}function ai(e,t,n,r,i,a,o){let s=!n||e.c.millisecond!==0||e.c.second!==0,c=``;switch(o){case`day`:case`month`:case`year`:break;default:if(c+=A(e.c.hour),o===`hour`)break;if(t){if(c+=`:`,c+=A(e.c.minute),o===`minute`)break;s&&(c+=`:`,c+=A(e.c.second))}else{if(c+=A(e.c.minute),o===`minute`)break;s&&(c+=A(e.c.second))}if(o===`second`)break;s&&(!r||e.c.millisecond!==0)&&(c+=`.`,c+=A(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!a?c+=`Z`:e.o<0?(c+=`-`,c+=A(Math.trunc(-e.o/60)),c+=`:`,c+=A(Math.trunc(-e.o%60))):(c+=`+`,c+=A(Math.trunc(e.o/60)),c+=`:`,c+=A(Math.trunc(e.o%60)))),a&&(c+=`[`+e.zone.ianaName+`]`),c}var oi={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},si={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ci={ordinal:1,hour:0,minute:0,second:0,millisecond:0},li=[`year`,`month`,`day`,`hour`,`minute`,`second`,`millisecond`],ui=[`weekYear`,`weekNumber`,`weekday`,`hour`,`minute`,`second`,`millisecond`],di=[`year`,`ordinal`,`hour`,`minute`,`second`,`millisecond`];function fi(e){let t={year:`year`,years:`year`,month:`month`,months:`month`,day:`day`,days:`day`,hour:`hour`,hours:`hour`,minute:`minute`,minutes:`minute`,quarter:`quarter`,quarters:`quarter`,second:`second`,seconds:`second`,millisecond:`millisecond`,milliseconds:`millisecond`,weekday:`weekday`,weekdays:`weekday`,weeknumber:`weekNumber`,weeksnumber:`weekNumber`,weeknumbers:`weekNumber`,weekyear:`weekYear`,weekyears:`weekYear`,ordinal:`ordinal`}[e.toLowerCase()];if(!t)throw new a(e);return t}function pi(e){switch(e.toLowerCase()){case`localweekday`:case`localweekdays`:return`localWeekday`;case`localweeknumber`:case`localweeknumbers`:return`localWeekNumber`;case`localweekyear`:case`localweekyears`:return`localWeekYear`;default:return fi(e)}}function mi(e){if(vi===void 0&&(vi=C.now()),e.type!==`iana`)return e.offset(vi);let t=e.name,n=yi.get(t);return n===void 0&&(n=e.offset(vi),yi.set(t,n)),n}function hi(e,t){let n=x(t.zone,C.defaultZone);if(!n.isValid)return Y.invalid(Xr(n));let r=y.fromObject(t),i,a;if(E(e.year))i=C.now();else{for(let t of li)E(e[t])&&(e[t]=oi[t]);let t=Ct(e)||wt(e);if(t)return Y.invalid(t);let r=mi(n);[i,a]=ti(e,r,n)}return new Y({ts:i,zone:n,loc:r,o:a})}function gi(e,t,n){let r=E(n.round)?!0:n.round,i=E(n.rounding)?`trunc`:n.rounding,a=(e,a)=>(e=It(e,r||n.calendary?0:2,n.calendary?`round`:i),t.loc.clone(n).relFormatter(n).format(e,a)),o=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return a(o(n.unit),n.unit);for(let e of n.units){let t=o(e);if(Math.abs(t)>=1)return a(t,e)}return a(e>t?-0:0,n.units[n.units.length-1])}function _i(e){let t={},n;return e.length>0&&typeof e[e.length-1]==`object`?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}var vi,yi=new Map,Y=class e{constructor(e){let t=e.zone||C.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new w(`invalid input`):null)||(t.isValid?null:Xr(t));this.ts=E(e.ts)?C.now():e.ts;let r=null,i=null;if(!n){if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,i]=[e.old.c,e.old.o];else{let a=D(e.o)&&!e.old?e.o:t.offset(this.ts);r=ei(this.ts,a),n=Number.isNaN(r.year)?new w(`invalid input`):null,r=n?null:r,i=n?null:a}}this._zone=t,this.loc=e.loc||y.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}static now(){return new e({})}static local(){let[e,t]=_i(arguments),[n,r,i,a,o,s,c]=t;return hi({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static utc(){let[e,t]=_i(arguments),[n,r,i,a,o,s,c]=t;return e.zone=b.utcInstance,hi({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static fromJSDate(t,n={}){let r=Dt(t)?t.valueOf():NaN;if(Number.isNaN(r))return e.invalid(`invalid input`);let i=x(n.zone,C.defaultZone);return i.isValid?new e({ts:r,zone:i,loc:y.fromObject(n)}):e.invalid(Xr(i))}static fromMillis(t,n={}){if(!D(t))throw new o(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`);return t<-864e13||t>Yr?e.invalid(`Timestamp out of range`):new e({ts:t,zone:x(n.zone,C.defaultZone),loc:y.fromObject(n)})}static fromSeconds(t,n={}){if(D(t))return new e({ts:t*1e3,zone:x(n.zone,C.defaultZone),loc:y.fromObject(n)});throw new o(`fromSeconds requires a numerical input`)}static fromObject(t,n={}){t||={};let r=x(n.zone,C.defaultZone);if(!r.isValid)return e.invalid(Xr(r));let a=y.fromObject(n),o=qt(t,pi),{minDaysInFirstWeek:s,startOfWeek:c}=bt(o,a),l=C.now(),u=E(n.specificOffset)?r.offset(l):n.specificOffset,d=!E(o.ordinal),f=!E(o.year),p=!E(o.month)||!E(o.day),m=f||p,h=o.weekYear||o.weekNumber;if((m||d)&&h)throw new i(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(p&&d)throw new i(`Can't mix ordinal dates with month/day`);let ee=h||o.weekday&&!m,te,ne,g=ei(l,u);ee?(te=ui,ne=si,g=gt(g,s,c)):d?(te=di,ne=ci,g=vt(g)):(te=li,ne=oi);let re=!1;for(let e of te){let t=o[e];E(t)?o[e]=re?ne[e]:g[e]:re=!0}let ie=(ee?xt(o,s,c):d?St(o):Ct(o))||wt(o);if(ie)return e.invalid(ie);let[ae,oe]=ti(ee?_t(o,s,c):d?yt(o):o,u,r),_=new e({ts:ae,zone:r,o:oe,loc:a});return o.weekday&&m&&t.weekday!==_.weekday?e.invalid(`mismatched weekday`,`you can't specify both a weekday of ${o.weekday} and a date of ${_.toISO()}`):_.isValid?_:e.invalid(_.invalid)}static fromISO(e,t={}){let[n,r]=nr(e);return J(n,r,t,`ISO 8601`,e)}static fromRFC2822(e,t={}){let[n,r]=rr(e);return J(n,r,t,`RFC 2822`,e)}static fromHTTP(e,t={}){let[n,r]=ir(e);return J(n,r,t,`HTTP`,t)}static fromFormat(t,n,r={}){if(E(t)||E(n))throw new o(`fromFormat requires an input string and a format`);let{locale:i=null,numberingSystem:a=null}=r,[s,c,l,u]=Kr(y.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0}),t,n);return u?e.invalid(u):J(s,c,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return e.fromFormat(t,n,r)}static fromSQL(e,t={}){let[n,r]=dr(e);return J(n,r,t,`SQL`,e)}static invalid(n,r=null){if(!n)throw new o(`need to specify a reason the DateTime is invalid`);let i=n instanceof w?n:new w(n,r);if(C.throwOnInvalid)throw new t(i);return new e({invalid:i})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let n=qr(e,y.fromObject(t));return n?n.map(e=>e?e.val:null).join(``):null}static expandFormat(e,t={}){return Ur(N.parseFormat(e),y.fromObject(t)).map(e=>e.val).join(``)}static resetCache(){vi=void 0,yi.clear()}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Zr(this).weekYear:NaN}get weekNumber(){return this.isValid?Zr(this).weekNumber:NaN}get weekday(){return this.isValid?Zr(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Qr(this).weekday:NaN}get localWeekNumber(){return this.isValid?Qr(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Qr(this).weekYear:NaN}get ordinal(){return this.isValid?vt(this.c).ordinal:NaN}get monthShort(){return this.isValid?Sr.months(`short`,{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Sr.months(`long`,{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Sr.weekdays(`short`,{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Sr.weekdays(`long`,{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:`short`,locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:`long`,locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,t=6e4,n=Bt(this.c),r=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-r*t),o=this.zone.offset(n-i*t);if(a===o)return[this];let s=n-a*t,c=n-o*t,l=ei(s,a),u=ei(c,o);return l.hour===u.hour&&l.minute===u.minute&&l.second===u.second&&l.millisecond===u.millisecond?[q(this,{ts:s}),q(this,{ts:c})]:[this]}get isInLeapYear(){return Lt(this.year)}get daysInMonth(){return zt(this.year,this.month)}get daysInYear(){return this.isValid?Rt(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ht(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Ht(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:n,calendar:r}=N.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(b.instance(e),t)}toLocal(){return this.setZone(C.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=x(t,C.defaultZone),t.equals(this.zone))return this;if(t.isValid){let e=this.ts;if(n||r){let n=t.offset(this.ts),r=this.toObject();[e]=ti(r,n,t)}return q(this,{ts:e,zone:t})}return e.invalid(Xr(t))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){let r=this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n});return q(this,{loc:r})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let t=qt(e,pi),{minDaysInFirstWeek:n,startOfWeek:r}=bt(t,this.loc),a=!E(t.weekYear)||!E(t.weekNumber)||!E(t.weekday),o=!E(t.ordinal),s=!E(t.year),c=!E(t.month)||!E(t.day),l=s||c,u=t.weekYear||t.weekNumber;if((l||o)&&u)throw new i(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(c&&o)throw new i(`Can't mix ordinal dates with month/day`);let d;a?d=_t({...gt(this.c,n,r),...t},n,r):E(t.ordinal)?(d={...this.toObject(),...t},E(t.day)&&(d.day=Math.min(zt(d.year,d.month),d.day))):d=yt({...vt(this.c),...t});let[f,p]=ti(d,this.o,this.zone);return q(this,{ts:f,o:p})}plus(e){if(!this.isValid)return this;let t=U.fromDurationLike(e);return q(this,ni(this,t))}minus(e){if(!this.isValid)return this;let t=U.fromDurationLike(e).negate();return q(this,ni(this,t))}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let n={},r=U.normalizeUnit(e);switch(r){case`years`:n.month=1;case`quarters`:case`months`:n.day=1;case`weeks`:case`days`:n.hour=0;case`hours`:n.minute=0;case`minutes`:n.second=0;case`seconds`:n.millisecond=0}if(r===`weeks`){if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(n.weekNumber=this.weekNumber-1),n.weekday=e}else n.weekday=1}return r===`quarters`&&(n.month=(Math.ceil(this.month/3)-1)*3+1),this.set(n)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?N.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Jr}toLocaleString(e=d,t={}){return this.isValid?N.create(this.loc.clone(t),e).formatDateTime(this):Jr}toLocaleParts(e={}){return this.isValid?N.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e=`extended`,suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:i=!1,precision:a=`milliseconds`}={}){if(!this.isValid)return null;a=fi(a);let o=e===`extended`,s=ii(this,o,a);return li.indexOf(a)>=3&&(s+=`T`),s+=ai(this,o,t,n,r,i,a),s}toISODate({format:e=`extended`,precision:t=`day`}={}){return this.isValid?ii(this,e===`extended`,fi(t)):null}toISOWeekDate(){return ri(this,`kkkk-'W'WW-c`)}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:i=!1,format:a=`extended`,precision:o=`milliseconds`}={}){return this.isValid?(o=fi(o),(r&&li.indexOf(o)>=3?`T`:``)+ai(this,a===`extended`,t,e,n,i,o)):null}toRFC2822(){return ri(this,`EEE, dd LLL yyyy HH:mm:ss ZZZ`,!1)}toHTTP(){return ri(this.toUTC(),`EEE, dd LLL yyyy HH:mm:ss 'GMT'`)}toSQLDate(){return this.isValid?ii(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r=`HH:mm:ss.SSS`;return(t||e)&&(n&&(r+=` `),t?r+=`z`:e&&(r+=`ZZ`)),ri(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Jr}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t=`milliseconds`,n={}){if(!this.isValid||!e.isValid)return U.invalid(`created by diffing an invalid DateTime`);let r={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=At(t).map(U.normalizeUnit),a=e.valueOf()>this.valueOf(),o=Tr(a?this:e,a?e:this,i,r);return a?o.negate():o}diffNow(t=`milliseconds`,n={}){return this.diff(e.now(),t,n)}until(e){return this.isValid?xr.fromDateTimes(this,e):this}hasSame(e,t,n){if(!this.isValid)return!1;let r=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(t,n)<=r&&r<=i.endOf(t,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(t={}){if(!this.isValid)return null;let n=t.base||e.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0,i=[`years`,`months`,`days`,`hours`,`minutes`,`seconds`],a=t.unit;return Array.isArray(t.unit)&&(i=t.unit,a=void 0),gi(n,this.plus(r),{...t,numeric:`always`,units:i,unit:a})}toRelativeCalendar(t={}){return this.isValid?gi(t.base||e.fromObject({},{zone:this.zone}),this,{...t,numeric:`auto`,units:[`years`,`months`,`days`],calendary:!0}):null}static min(...t){if(!t.every(e.isDateTime))throw new o(`min requires all arguments be DateTimes`);return jt(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(e.isDateTime))throw new o(`max requires all arguments be DateTimes`);return jt(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,n={}){let{locale:r=null,numberingSystem:i=null}=n;return Gr(y.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),e,t)}static fromStringExplain(t,n,r={}){return e.fromFormatExplain(t,n,r)}static buildFormatParser(e,t={}){let{locale:n=null,numberingSystem:r=null}=t;return new Wr(y.fromOpts({locale:n,numberingSystem:r,defaultToEN:!0}),e)}static fromFormatParser(t,n,r={}){if(E(t)||E(n))throw new o(`fromFormatParser requires an input string and a format parser`);let{locale:i=null,numberingSystem:a=null}=r,s=y.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0});if(!s.equals(n.locale))throw new o(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);let{result:c,zone:l,specificOffset:u,invalidReason:d}=n.explainFromTokens(t);return d?e.invalid(d):J(c,l,r,`format ${n.format}`,t,u)}static get DATE_SHORT(){return d}static get DATE_MED(){return f}static get DATE_MED_WITH_WEEKDAY(){return p}static get DATE_FULL(){return m}static get DATE_HUGE(){return h}static get TIME_SIMPLE(){return ee}static get TIME_WITH_SECONDS(){return te}static get TIME_WITH_SHORT_OFFSET(){return ne}static get TIME_WITH_LONG_OFFSET(){return g}static get TIME_24_SIMPLE(){return re}static get TIME_24_WITH_SECONDS(){return ie}static get TIME_24_WITH_SHORT_OFFSET(){return ae}static get TIME_24_WITH_LONG_OFFSET(){return oe}static get DATETIME_SHORT(){return _}static get DATETIME_SHORT_WITH_SECONDS(){return se}static get DATETIME_MED(){return ce}static get DATETIME_MED_WITH_SECONDS(){return le}static get DATETIME_MED_WITH_WEEKDAY(){return ue}static get DATETIME_FULL(){return de}static get DATETIME_FULL_WITH_SECONDS(){return fe}static get DATETIME_HUGE(){return pe}static get DATETIME_HUGE_WITH_SECONDS(){return me}};function bi(e){if(Y.isDateTime(e))return e;if(e&&e.valueOf&&D(e.valueOf()))return Y.fromJSDate(e);if(e&&typeof e==`object`)return Y.fromObject(e);throw new o(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var xi=`885134291034-bqut6fllb38d4gm8hh006d3g7tfjq5r7.apps.googleusercontent.com`,Si=`https://hometemp-dash-c3fymlvendly2.azurewebsites.net/api`,Ci=`https://accounts.google.com/gsi/client`,wi,Ti=`koti.idToken`,Ei=30,Di={read(){try{return window.localStorage.getItem(Ti)??void 0}catch{return}},write(e){try{window.localStorage.setItem(Ti,e)}catch{}},clear(){try{window.localStorage.removeItem(Ti)}catch{}}},Oi=()=>new Promise((e,t)=>{if(window.google?.accounts?.id){e();return}let n=document.querySelector(`script[src="${Ci}"]`);if(!n){t(Error(`the Google sign-in script tag is missing from the page`));return}n.addEventListener(`load`,()=>e(),{once:!0}),n.addEventListener(`error`,()=>t(Error(`the Google sign-in script could not be loaded`)),{once:!0})}),ki=async(e,t)=>{await Oi(),google.accounts.id.initialize({client_id:xi,callback:e=>{wi=e.credential,Di.write(e.credential),t(ji(e.credential)??`your Google account`)}}),e.replaceChildren(),google.accounts.id.renderButton(e,{type:`standard`,theme:`outline`,size:`large`,text:`signin_with`})},Ai=e=>{let t=e.split(`.`)[1];if(t)try{let e=atob(t.replace(/-/g,`+`).replace(/_/g,`/`)),n=JSON.parse(e);return typeof n==`object`&&n&&!Array.isArray(n)?n:void 0}catch{return}},ji=e=>{let t=Ai(e)?.email;return typeof t==`string`?t:void 0},Mi=(e,t=Date.now())=>{let n=Ai(e)?.exp;return typeof n!=`number`||!Number.isFinite(n)||n*1e3-Ei*1e3<=t},Ni=()=>{let e=Di.read();if(e!==void 0){if(Mi(e)){Di.clear();return}return wi=e,ji(e)}},Pi=e=>wi===void 0?void 0:e(wi),Fi=()=>{wi=void 0,Di.clear(),window.google?.accounts?.id?.disableAutoSelect()},X=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Ii=e=>Array.isArray(e)&&e.every(e=>typeof e==`string`),Li=e=>X(e)&&typeof e.id==`string`&&typeof e.label==`string`&&Ii(e.locations)&&Ii(e.measures),Ri=e=>X(e)&&typeof e.date==`string`&&typeof e.from==`string`&&typeof e.to==`string`&&typeof e.hours==`number`&&X(e.cells)&&Object.values(e.cells).every(X)&&(e.forecast===void 0||X(e.forecast)),zi=e=>X(e)&&typeof e.hour==`string`&&X(e.cells)&&Object.values(e.cells).every(X),Bi=e=>X(e)&&typeof e.from==`string`&&typeof e.to==`string`&&typeof e.hours==`number`,Vi=e=>X(e)&&typeof e.signedInAs==`string`&&typeof e.generatedAt==`string`&&Bi(e.window)&&typeof e.timeZone==`string`&&Array.isArray(e.zones)&&e.zones.every(Li)&&Array.isArray(e.days)&&e.days.every(Ri)&&Array.isArray(e.hours)&&e.hours.every(zi),Hi=async e=>{let t=await e.text();try{return JSON.parse(t)}catch{return}},Ui=async()=>{let e=Pi(e=>fetch(`${Si}/latest`,{method:`GET`,headers:{Authorization:`Bearer ${e}`},credentials:`omit`}));if(!e)return{kind:`signed-out`};let t;try{t=await e}catch(e){return{kind:`error`,detail:Wi(e)}}if(t.status===401)return{kind:`expired`};if(t.status===403)return{kind:`forbidden`};if(!t.ok)return{kind:`error`,detail:`the API returned ${t.status}`};let n=await Hi(t);return Vi(n)?{kind:`ok`,payload:n}:{kind:`error`,detail:`the API returned a response this page did not understand`}},Wi=e=>e instanceof Error?e.message:`the API could not be reached`,Gi=36e5,Ki=(e,t,n)=>{let r=Date.parse(e),i=t===void 0?NaN:Date.parse(t),a=n===void 0?NaN:Date.parse(n);if(!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a))return;let o=r+Gi;return i>=r&&i<o?`dawn`:a>=r&&a<o?`dusk`:r>=i&&r<a?`day`:`night`},qi={night:`Night`,dawn:`Dawn`,day:`Day`,dusk:`Dusk`},Ji=e=>qi[e],Z=(e,t)=>({description:e,icon:t}),Yi={1:Z(`Clear`,`clear-{}`),2:Z(`Mostly clear`,`mostly-clear-{}`),4:Z(`Partly cloudy`,`partly-cloudy-{}`),6:Z(`Mostly cloudy`,`overcast-{}`),7:Z(`Overcast`,`overcast`),9:Z(`Fog`,`fog`),11:Z(`Drizzle`,`drizzle`),14:Z(`Freezing drizzle`,`drizzle`),17:Z(`Freezing rain`,`rain`),21:Z(`Isolated showers`,`partly-cloudy-{}-rain`),24:Z(`Scattered showers`,`overcast-{}-rain`),27:Z(`Showers`,`overcast-rain`),31:Z(`Partly cloudy and periods of light rain`,`partly-cloudy-{}-drizzle`),32:Z(`Partly cloudy and periods of moderate rain`,`partly-cloudy-{}-rain`),33:Z(`Partly cloudy and periods of heavy rain`,`extreme-{}-rain`),34:Z(`Mostly cloudy and periods of light rain`,`overcast-{}-drizzle`),35:Z(`Mostly cloudy and periods of moderate rain`,`overcast-{}-rain`),36:Z(`Mostly cloudy and periods of heavy rain`,`extreme-{}-rain`),37:Z(`Light rain`,`rain`),38:Z(`Moderate rain`,`overcast-rain`),39:Z(`Heavy rain`,`extreme-rain`),41:Z(`Isolated light sleet showers`,`partly-cloudy-{}-sleet`),42:Z(`Isolated moderate sleet showers`,`partly-cloudy-{}-sleet`),43:Z(`Isolated heavy sleet showers`,`extreme-{}-sleet`),44:Z(`Scattered light sleet showers`,`overcast-{}-sleet`),45:Z(`Scattered moderate sleet showers`,`overcast-{}-sleet`),46:Z(`Scattered heavy sleet showers`,`extreme-{}-sleet`),47:Z(`Light sleet`,`sleet`),48:Z(`Moderate sleet`,`overcast-sleet`),49:Z(`Heavy sleet`,`extreme-sleet`),51:Z(`Isolated light snow showers`,`partly-cloudy-{}-snow`),52:Z(`Isolated moderate snow showers`,`partly-cloudy-{}-snow`),53:Z(`Isolated heavy snow showers`,`extreme-{}-snow`),54:Z(`Scattered light snow showers`,`overcast-{}-snow`),55:Z(`Scattered moderate snow showers`,`overcast-{}-snow`),56:Z(`Scattered heavy snow showers`,`extreme-{}-snow`),57:Z(`Light snowfall`,`snow`),58:Z(`Moderate snowfall`,`overcast-snow`),59:Z(`Heavy snowfall`,`extreme-snow`),61:Z(`Isolated hail showers`,`partly-cloudy-{}-hail`),64:Z(`Scattered hail showers`,`overcast-{}-hail`),67:Z(`Hail showers`,`hail`),71:Z(`Isolated thundershowers`,`thunderstorms-{}`),74:Z(`Scattered thundershowers`,`thunderstorms-{}-rain`),77:Z(`Thundershowers`,`thunderstorms-rain`)},Xi=`fmi-smartsymbol`,Zi=Object.fromEntries(Object.entries({clear:[1,2,4],cloud:[6,7,9],light:[11,21,31,34,37,41,44,47,51,54,57],moderate:[14,24,32,35,38,42,45,48,52,55,58,61,71],heavy:[17,27,33,36,39,43,46,49,53,56,59,64,67,74,77]}).flatMap(([e,t])=>t.map(t=>[t,e]))),Qi=100,$i=(e,t)=>{if(t!==Xi||typeof e!=`number`||!Number.isInteger(e))return;let n=e>=Qi,r=n?e-Qi:e,i=Yi[r],a=Zi[r];if(i!==void 0&&a!==void 0)return{description:i.description,icon:i.icon.replace(`{}`,n?`night`:`day`),severity:a}},ea=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="clear-day">
<g id="Sun">
<circle id="Core" cx="64" cy="63.9999" r="19.5" fill="url(#paint0_linear_1802_5186)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M61 19C61 17.3431 62.3431 16 64 16C65.6568 16 67 17.3431 67 19V33C67 34.6569 65.6568 36 64 36C62.3431 36 61 34.6569 61 33V19Z" fill="#F8AF18"/>
<path d="M93.6985 30.0589C94.87 28.8873 96.7696 28.8873 97.9411 30.0589C99.1127 31.2304 99.1127 33.1299 97.9411 34.3015L88.0416 44.201C86.8701 45.3726 84.9706 45.3726 83.799 44.201C82.6274 43.0294 82.6274 41.1299 83.799 39.9584L93.6985 30.0589Z" fill="#F8AF18"/>
<path d="M109 61C110.657 61 112 62.3432 112 64C112 65.6569 110.657 67 109 67H95C93.3431 67 92 65.6569 92 64C92 62.3432 93.3431 61 95 61H109Z" fill="#F8AF18"/>
<path d="M97.9411 93.6985C99.1127 94.8701 99.1127 96.7696 97.9411 97.9411C96.7696 99.1127 94.8701 99.1127 93.6985 97.9411L83.799 88.0416C82.6274 86.8701 82.6274 84.9706 83.799 83.799C84.9706 82.6274 86.8701 82.6274 88.0416 83.799L97.9411 93.6985Z" fill="#F8AF18"/>
<path d="M61 95C61 93.3431 62.3431 92 64 92C65.6568 92 67 93.3431 67 95V109C67 110.657 65.6568 112 64 112C62.3431 112 61 110.657 61 109V95Z" fill="#F8AF18"/>
<path d="M39.9584 83.799C41.1299 82.6274 43.0294 82.6274 44.201 83.799C45.3726 84.9706 45.3726 86.8701 44.201 88.0416L34.3015 97.9411C33.1299 99.1127 31.2304 99.1127 30.0589 97.9411C28.8873 96.7696 28.8873 94.87 30.0589 93.6985L39.9584 83.799Z" fill="#F8AF18"/>
<path d="M33 61C34.6569 61 36 62.3431 36 64C36 65.6568 34.6569 67 33 67H19C17.3431 67 16 65.6568 16 64C16 62.3431 17.3431 61 19 61H33Z" fill="#F8AF18"/>
<path d="M44.201 39.9584C45.3726 41.1299 45.3726 43.0294 44.201 44.201C43.0294 45.3726 41.1299 45.3726 39.9584 44.201L30.0589 34.3015C28.8873 33.1299 28.8873 31.2305 30.0589 30.0589C31.2305 28.8873 33.1299 28.8873 34.3015 30.0589L44.201 39.9584Z" fill="#F8AF18"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1802_5186" x1="64" y1="43.9999" x2="64" y2="83.9999" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
</defs>
</svg>`,ta=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="clear-night">
<g id="Moon">
<path id="Moon_2" d="M60.3018 32.582C55.2817 53.6999 73.6001 74.3477 95.3252 72.5146C91.5193 85.7702 79.1986 95.4998 64.5361 95.5C46.8375 95.5 32.5001 81.3444 32.5 63.8984C32.5 47.8688 44.6066 34.6278 60.3018 32.582Z" fill="url(#paint0_linear_1837_5080)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1837_5080" x1="64" y1="32" x2="64" y2="96" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
</defs>
</svg>`,na=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="drizzle" clip-path="url(#clip0_1858_8512)">
<g id="Sky">
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint0_linear_1858_8512)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8512" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8512">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ra=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-day-rain" clip-path="url(#clip0_1858_8384)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8384)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8384)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8384)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8384" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8384" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8384" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_8384">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ia=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-day-sleet" clip-path="url(#clip0_1858_9111)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_9111)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_9111)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_9111)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9111" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9111" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_9111" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_9111">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,aa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-day-snow" clip-path="url(#clip0_1858_8881)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8881)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8881)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8881)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8881" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8881" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8881" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_8881">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,oa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-night-rain" clip-path="url(#clip0_1858_8386)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8386)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8386)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8386)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8386" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8386" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8386" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_8386">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,sa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-night-sleet" clip-path="url(#clip0_1858_9114)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_9114)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_9114)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_9114)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9114" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9114" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_9114" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_9114">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ca=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-night-snow" clip-path="url(#clip0_1858_8884)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8884)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8884)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8884)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8884" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8884" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8884" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_8884">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,la=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-rain" clip-path="url(#clip0_1858_8382)">
<g id="Sky">
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint0_linear_1858_8382)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8382)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8382" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8382" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_8382">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ua=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-sleet" clip-path="url(#clip0_1858_9108)">
<g id="Sky">
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint0_linear_1858_9108)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_9108)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9108" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9108" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_9108">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,da=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="extreme-snow" clip-path="url(#clip0_1858_8878)">
<g id="Sky">
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint0_linear_1858_8878)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8878)" stroke="#64748B" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8878" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8878" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#7C8CA2"/>
<stop offset="1" stop-color="#64748B"/>
</linearGradient>
<clipPath id="clip0_1858_8878">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,fa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="fog" clip-path="url(#clip0_1858_9374)">
<g id="Sky">
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint0_linear_1858_9374)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<path id="Line 2" d="M40 95H88" stroke="#E2E8F0" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path id="Line 1" d="M40 103H88" stroke="#E2E8F0" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9374" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_9374">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,pa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="hail" clip-path="url(#clip0_1858_8718)">
<g id="Sky">
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint0_linear_1858_8718)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Ice balls">
<path id="Ice Ball 1" d="M52 86C51.4067 86 50.8266 86.1759 50.3333 86.5056C49.8399 86.8352 49.4554 87.3038 49.2283 87.852C49.0013 88.4001 48.9419 89.0033 49.0577 89.5853C49.1734 90.1672 49.4591 90.7018 49.8787 91.1213C50.2983 91.5409 50.8329 91.8266 51.4148 91.9424C51.9968 92.0581 52.5998 91.9987 53.148 91.7716C53.6961 91.5446 54.1647 91.1601 54.4944 90.6667C54.824 90.1734 55 89.5933 55 89C55 88.2044 54.6839 87.4413 54.1213 86.8787C53.5587 86.3161 52.7957 86 52 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Ice Ball 2" d="M64 86C63.4067 86 62.8266 86.1759 62.3333 86.5056C61.8399 86.8352 61.4554 87.3038 61.2283 87.852C61.0013 88.4001 60.9419 89.0033 61.0577 89.5853C61.1734 90.1672 61.4591 90.7018 61.8787 91.1213C62.2983 91.5409 62.8329 91.8266 63.4148 91.9424C63.9968 92.0581 64.5998 91.9987 65.148 91.7716C65.6961 91.5446 66.1647 91.1601 66.4944 90.6667C66.824 90.1734 67 89.5933 67 89C67 88.2044 66.6839 87.4413 66.1213 86.8787C65.5587 86.3161 64.7957 86 64 86Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Ice Ball 3" d="M76 86C75.4067 86 74.8266 86.1759 74.3333 86.5056C73.8399 86.8352 73.4554 87.3038 73.2283 87.852C73.0013 88.4001 72.9419 89.0033 73.0577 89.5853C73.1734 90.1672 73.4591 90.7018 73.8787 91.1213C74.2983 91.5409 74.8329 91.8266 75.4148 91.9424C75.9968 92.0581 76.5998 91.9987 77.148 91.7716C77.6961 91.5446 78.1647 91.1601 78.4944 90.6667C78.824 90.1734 79 89.5933 79 89C79 88.2044 78.6839 87.4413 78.1213 86.8787C77.5587 86.3161 76.7957 86 76 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8718" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8718">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ma=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="mostly-clear-day" clip-path="url(#clip0_1858_8340)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="50" cy="62" r="12.5" fill="url(#paint0_linear_1858_8340)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M48 32C48 30.8954 48.8954 30 50 30C51.1046 30 52 30.8954 52 32V41.3333C52 42.4379 51.1046 43.3333 50 43.3333C48.8954 43.3333 48 42.4379 48 41.3333V32Z" fill="#F8AF18"/>
<path d="M69.799 39.3726C70.58 38.5915 71.8464 38.5915 72.6274 39.3726C73.4085 40.1536 73.4085 41.42 72.6274 42.201L66.0278 48.8007C65.2467 49.5817 63.9804 49.5817 63.1993 48.8007C62.4183 48.0196 62.4183 46.7533 63.1993 45.9722L69.799 39.3726Z" fill="#F8AF18"/>
<path d="M80 60C81.1046 60 82 60.8954 82 62C82 63.1046 81.1046 64 80 64H70.6667C69.5621 64 68.6667 63.1046 68.6667 62C68.6667 60.8954 69.5621 60 70.6667 60H80Z" fill="#F8AF18"/>
<path d="M72.6274 81.799C73.4085 82.58 73.4085 83.8464 72.6274 84.6274C71.8464 85.4085 70.58 85.4085 69.799 84.6274L63.1993 78.0278C62.4183 77.2467 62.4183 75.9804 63.1993 75.1993C63.9804 74.4183 65.2467 74.4183 66.0278 75.1993L72.6274 81.799Z" fill="#F8AF18"/>
<path d="M48 82.6667C48 81.5621 48.8954 80.6667 50 80.6667C51.1046 80.6667 52 81.5621 52 82.6667V92C52 93.1046 51.1046 94 50 94C48.8954 94 48 93.1046 48 92V82.6667Z" fill="#F8AF18"/>
<path d="M33.9722 75.1993C34.7533 74.4183 36.0196 74.4183 36.8007 75.1993C37.5817 75.9804 37.5817 77.2467 36.8007 78.0278L30.201 84.6274C29.42 85.4085 28.1536 85.4085 27.3726 84.6274C26.5915 83.8464 26.5915 82.58 27.3726 81.799L33.9722 75.1993Z" fill="#F8AF18"/>
<path d="M29.3333 60C30.4379 60 31.3333 60.8954 31.3333 62C31.3333 63.1046 30.4379 64 29.3333 64H20C18.8954 64 18 63.1046 18 62C18 60.8954 18.8954 60 20 60H29.3333Z" fill="#F8AF18"/>
<path d="M36.8007 45.9722C37.5817 46.7533 37.5817 48.0196 36.8007 48.8007C36.0196 49.5817 34.7533 49.5817 33.9722 48.8007L27.3726 42.201C26.5915 41.42 26.5915 40.1536 27.3726 39.3726C28.1536 38.5915 29.42 38.5915 30.201 39.3726L36.8007 45.9722Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M58.0142 59.8887C61.3363 54.3602 68.3655 51.9679 74.3082 54.5254C80.2917 57.1004 83.5145 63.9169 81.9859 70.2227L81.8297 70.8701L82.4947 70.8408C87.4096 70.6202 91.4996 74.7706 91.4996 79.6602C91.4994 84.3966 87.6454 88.499 82.8834 88.499C70.5117 88.4877 58.1362 88.5 45.7672 88.5C40.9829 88.5012 36.9766 84.6313 36.5406 79.8877C36.104 75.1358 39.3371 70.5714 44.0406 69.6572L44.5181 69.5635L44.438 69.084C43.8797 65.7473 45.2907 62.2583 48.063 60.3203C50.7976 58.4089 54.4855 58.3015 57.3228 60.0566L57.7535 60.3223L58.0142 59.8887Z" fill="url(#paint1_linear_1858_8340)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8340" x1="50" y1="49" x2="50" y2="75" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8340" x1="64.0008" y1="53" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8340">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ha=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="mostly-clear-night" clip-path="url(#clip0_1858_8342)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M52.2529 42.5869C48.9384 57.2007 61.6736 71.1024 76.3213 70.0273C73.6524 78.9635 65.298 85.5 55.3682 85.5C43.2847 85.4999 33.5 75.8355 33.5 63.9297C33.5002 53.0673 41.6473 44.0798 52.2529 42.5869Z" fill="url(#paint0_linear_1858_8342)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M58.0142 59.8887C61.3363 54.3602 68.3655 51.9679 74.3082 54.5254C80.2917 57.1004 83.5145 63.9169 81.9859 70.2227L81.8297 70.8701L82.4947 70.8408C87.4096 70.6202 91.4996 74.7706 91.4996 79.6602C91.4994 84.3966 87.6454 88.499 82.8834 88.499C70.5117 88.4877 58.1362 88.5 45.7672 88.5C40.9829 88.5012 36.9766 84.6313 36.5406 79.8877C36.104 75.1358 39.3371 70.5714 44.0406 69.6572L44.5181 69.5635L44.438 69.084C43.8797 65.7473 45.2907 62.2583 48.063 60.3203C50.7976 58.4089 54.4855 58.3015 57.3228 60.0566L57.7535 60.3223L58.0142 59.8887Z" fill="url(#paint1_linear_1858_8342)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8342" x1="55" y1="42" x2="55" y2="86" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8342" x1="64.0008" y1="53" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8342">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ga=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast" clip-path="url(#clip0_1858_8153)">
<g id="Sky">
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint0_linear_1858_8153)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8153)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8153" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8153" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8153">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,_a=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-day" clip-path="url(#clip0_1858_8265)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8265)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8265)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8265)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8265" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8265" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8265" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8265">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,va=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-day-drizzle" clip-path="url(#clip0_1858_8524)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8524)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8524)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8524)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8524" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8524" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8524" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8524">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ya=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-day-hail" clip-path="url(#clip0_1858_8730)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8730)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8730)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8730)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Ice balls">
<path id="Ice Ball 1" d="M52 86C51.4067 86 50.8266 86.1759 50.3333 86.5056C49.8399 86.8352 49.4554 87.3038 49.2283 87.852C49.0013 88.4001 48.9419 89.0033 49.0577 89.5853C49.1734 90.1672 49.4591 90.7018 49.8787 91.1213C50.2983 91.5409 50.8329 91.8266 51.4148 91.9424C51.9968 92.0581 52.5998 91.9987 53.148 91.7716C53.6961 91.5446 54.1647 91.1601 54.4944 90.6667C54.824 90.1734 55 89.5933 55 89C55 88.2044 54.6839 87.4413 54.1213 86.8787C53.5587 86.3161 52.7957 86 52 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Ice Ball 2" d="M64 86C63.4067 86 62.8266 86.1759 62.3333 86.5056C61.8399 86.8352 61.4554 87.3038 61.2283 87.852C61.0013 88.4001 60.9419 89.0033 61.0577 89.5853C61.1734 90.1672 61.4591 90.7018 61.8787 91.1213C62.2983 91.5409 62.8329 91.8266 63.4148 91.9424C63.9968 92.0581 64.5998 91.9987 65.148 91.7716C65.6961 91.5446 66.1647 91.1601 66.4944 90.6667C66.824 90.1734 67 89.5933 67 89C67 88.2044 66.6839 87.4413 66.1213 86.8787C65.5587 86.3161 64.7957 86 64 86Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Ice Ball 3" d="M76 86C75.4067 86 74.8266 86.1759 74.3333 86.5056C73.8399 86.8352 73.4554 87.3038 73.2283 87.852C73.0013 88.4001 72.9419 89.0033 73.0577 89.5853C73.1734 90.1672 73.4591 90.7018 73.8787 91.1213C74.2983 91.5409 74.8329 91.8266 75.4148 91.9424C75.9968 92.0581 76.5998 91.9987 77.148 91.7716C77.6961 91.5446 78.1647 91.1601 78.4944 90.6667C78.824 90.1734 79 89.5933 79 89C79 88.2044 78.6839 87.4413 78.1213 86.8787C77.5587 86.3161 76.7957 86 76 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8730" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8730" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8730" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8730">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ba=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-day-rain" clip-path="url(#clip0_1858_8378)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8378)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8378)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8378)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8378" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8378" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8378" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8378">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,xa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-day-sleet" clip-path="url(#clip0_1858_9102)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_9102)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_9102)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_9102)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9102" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9102" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_9102" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_9102">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Sa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-day-snow" clip-path="url(#clip0_1858_8872)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8872)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8872)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8872)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8872" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8872" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8872" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8872">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ca=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-night" clip-path="url(#clip0_1858_8272)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8272)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8272)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8272)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8272" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8272" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8272" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8272">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,wa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-night-drizzle" clip-path="url(#clip0_1858_8527)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8527)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8527)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8527)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8527" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8527" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8527" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8527">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ta=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-night-hail" clip-path="url(#clip0_1858_8733)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8733)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8733)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8733)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Ice balls">
<path id="Ice Ball 1" d="M52 86C51.4067 86 50.8266 86.1759 50.3333 86.5056C49.8399 86.8352 49.4554 87.3038 49.2283 87.852C49.0013 88.4001 48.9419 89.0033 49.0577 89.5853C49.1734 90.1672 49.4591 90.7018 49.8787 91.1213C50.2983 91.5409 50.8329 91.8266 51.4148 91.9424C51.9968 92.0581 52.5998 91.9987 53.148 91.7716C53.6961 91.5446 54.1647 91.1601 54.4944 90.6667C54.824 90.1734 55 89.5933 55 89C55 88.2044 54.6839 87.4413 54.1213 86.8787C53.5587 86.3161 52.7957 86 52 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Ice Ball 2" d="M64 86C63.4067 86 62.8266 86.1759 62.3333 86.5056C61.8399 86.8352 61.4554 87.3038 61.2283 87.852C61.0013 88.4001 60.9419 89.0033 61.0577 89.5853C61.1734 90.1672 61.4591 90.7018 61.8787 91.1213C62.2983 91.5409 62.8329 91.8266 63.4148 91.9424C63.9968 92.0581 64.5998 91.9987 65.148 91.7716C65.6961 91.5446 66.1647 91.1601 66.4944 90.6667C66.824 90.1734 67 89.5933 67 89C67 88.2044 66.6839 87.4413 66.1213 86.8787C65.5587 86.3161 64.7957 86 64 86Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Ice Ball 3" d="M76 86C75.4067 86 74.8266 86.1759 74.3333 86.5056C73.8399 86.8352 73.4554 87.3038 73.2283 87.852C73.0013 88.4001 72.9419 89.0033 73.0577 89.5853C73.1734 90.1672 73.4591 90.7018 73.8787 91.1213C74.2983 91.5409 74.8329 91.8266 75.4148 91.9424C75.9968 92.0581 76.5998 91.9987 77.148 91.7716C77.6961 91.5446 78.1647 91.1601 78.4944 90.6667C78.824 90.1734 79 89.5933 79 89C79 88.2044 78.6839 87.4413 78.1213 86.8787C77.5587 86.3161 76.7957 86 76 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8733" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8733" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8733" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8733">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ea=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-night-rain" clip-path="url(#clip0_1858_8380)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8380)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8380)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8380)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8380" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8380" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8380" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8380">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Da=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-night-sleet" clip-path="url(#clip0_1858_9105)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_9105)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_9105)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_9105)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9105" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9105" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_9105" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_9105">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Oa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-night-snow" clip-path="url(#clip0_1858_8875)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8875)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint1_linear_1858_8875)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint2_linear_1858_8875)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8875" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8875" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_8875" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8875">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ka=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-rain" clip-path="url(#clip0_1858_8376)">
<g id="Sky">
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint0_linear_1858_8376)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8376)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8376" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8376" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8376">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Aa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-sleet" clip-path="url(#clip0_1858_9099)">
<g id="Sky">
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint0_linear_1858_9099)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_9099)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9099" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9099" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_9099">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,ja=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="overcast-snow" clip-path="url(#clip0_1858_8869)">
<g id="Sky">
<g id="Clouds">
<g id="Secondary Cloud">
<path id="Cloud" d="M83.8392 48.6934C86.2444 44.9584 91.2146 43.529 95.3177 45.1768C99.3609 46.8006 101.814 51.1888 100.71 55.4365L100.54 56.0898L101.215 56.0615C104.496 55.924 107.5 58.4646 107.5 61.7744C107.5 64.9759 104.669 67.4999 101.489 67.5H74.9769C71.7679 67.5008 68.8449 65.1182 68.5287 61.9072C68.2136 58.7068 70.6168 55.8414 73.764 55.2705L74.2552 55.1816L74.1674 54.6904C73.7734 52.4931 74.8117 50.2493 76.6849 49.0273C78.6105 47.7713 81.177 47.7069 83.1683 48.8564L83.5814 49.0938L83.8392 48.6934Z" fill="url(#paint0_linear_1858_8869)" stroke="#94A3B8" stroke-miterlimit="10"/>
</g>
<g id="Cloud_2">
<path id="Cloud_3" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8869)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8869" x1="88.0002" y1="44" x2="88.0002" y2="68" gradientUnits="userSpaceOnUse">
<stop stop-color="#B0BCCD"/>
<stop offset="1" stop-color="#94A3B8"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8869" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8869">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ma=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-day" clip-path="url(#clip0_1858_8241)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8241)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8241)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8241" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8241" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8241">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Na=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-day-drizzle" clip-path="url(#clip0_1858_8515)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8515)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8515)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8515" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8515" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8515">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Pa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-day-hail" clip-path="url(#clip0_1858_8721)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8721)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8721)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Ice balls">
<path id="Ice Ball 1" d="M52 86C51.4067 86 50.8266 86.1759 50.3333 86.5056C49.8399 86.8352 49.4554 87.3038 49.2283 87.852C49.0013 88.4001 48.9419 89.0033 49.0577 89.5853C49.1734 90.1672 49.4591 90.7018 49.8787 91.1213C50.2983 91.5409 50.8329 91.8266 51.4148 91.9424C51.9968 92.0581 52.5998 91.9987 53.148 91.7716C53.6961 91.5446 54.1647 91.1601 54.4944 90.6667C54.824 90.1734 55 89.5933 55 89C55 88.2044 54.6839 87.4413 54.1213 86.8787C53.5587 86.3161 52.7957 86 52 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Ice Ball 2" d="M64 86C63.4067 86 62.8266 86.1759 62.3333 86.5056C61.8399 86.8352 61.4554 87.3038 61.2283 87.852C61.0013 88.4001 60.9419 89.0033 61.0577 89.5853C61.1734 90.1672 61.4591 90.7018 61.8787 91.1213C62.2983 91.5409 62.8329 91.8266 63.4148 91.9424C63.9968 92.0581 64.5998 91.9987 65.148 91.7716C65.6961 91.5446 66.1647 91.1601 66.4944 90.6667C66.824 90.1734 67 89.5933 67 89C67 88.2044 66.6839 87.4413 66.1213 86.8787C65.5587 86.3161 64.7957 86 64 86Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Ice Ball 3" d="M76 86C75.4067 86 74.8266 86.1759 74.3333 86.5056C73.8399 86.8352 73.4554 87.3038 73.2283 87.852C73.0013 88.4001 72.9419 89.0033 73.0577 89.5853C73.1734 90.1672 73.4591 90.7018 73.8787 91.1213C74.2983 91.5409 74.8329 91.8266 75.4148 91.9424C75.9968 92.0581 76.5998 91.9987 77.148 91.7716C77.6961 91.5446 78.1647 91.1601 78.4944 90.6667C78.824 90.1734 79 89.5933 79 89C79 88.2044 78.6839 87.4413 78.1213 86.8787C77.5587 86.3161 76.7957 86 76 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8721" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8721" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8721">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Fa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-day-rain" clip-path="url(#clip0_1858_8372)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8372)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8372)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8372" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8372" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8372">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ia=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-day-sleet" clip-path="url(#clip0_1858_9093)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_9093)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_9093)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9093" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9093" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_9093">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,La=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-day-snow" clip-path="url(#clip0_1858_8863)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_8863)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8863)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8863" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8863" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8863">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ra=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-night" clip-path="url(#clip0_1858_8252)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8252)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8252)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8252" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8252" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8252">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,za=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-night-drizzle" clip-path="url(#clip0_1858_8518)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8518)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8518)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 87V90" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8518" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8518" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8518">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ba=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-night-hail" clip-path="url(#clip0_1858_8724)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8724)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8724)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Ice balls">
<path id="Ice Ball 1" d="M52 86C51.4067 86 50.8266 86.1759 50.3333 86.5056C49.8399 86.8352 49.4554 87.3038 49.2283 87.852C49.0013 88.4001 48.9419 89.0033 49.0577 89.5853C49.1734 90.1672 49.4591 90.7018 49.8787 91.1213C50.2983 91.5409 50.8329 91.8266 51.4148 91.9424C51.9968 92.0581 52.5998 91.9987 53.148 91.7716C53.6961 91.5446 54.1647 91.1601 54.4944 90.6667C54.824 90.1734 55 89.5933 55 89C55 88.2044 54.6839 87.4413 54.1213 86.8787C53.5587 86.3161 52.7957 86 52 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Ice Ball 2" d="M64 86C63.4067 86 62.8266 86.1759 62.3333 86.5056C61.8399 86.8352 61.4554 87.3038 61.2283 87.852C61.0013 88.4001 60.9419 89.0033 61.0577 89.5853C61.1734 90.1672 61.4591 90.7018 61.8787 91.1213C62.2983 91.5409 62.8329 91.8266 63.4148 91.9424C63.9968 92.0581 64.5998 91.9987 65.148 91.7716C65.6961 91.5446 66.1647 91.1601 66.4944 90.6667C66.824 90.1734 67 89.5933 67 89C67 88.2044 66.6839 87.4413 66.1213 86.8787C65.5587 86.3161 64.7957 86 64 86Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Ice Ball 3" d="M76 86C75.4067 86 74.8266 86.1759 74.3333 86.5056C73.8399 86.8352 73.4554 87.3038 73.2283 87.852C73.0013 88.4001 72.9419 89.0033 73.0577 89.5853C73.1734 90.1672 73.4591 90.7018 73.8787 91.1213C74.2983 91.5409 74.8329 91.8266 75.4148 91.9424C75.9968 92.0581 76.5998 91.9987 77.148 91.7716C77.6961 91.5446 78.1647 91.1601 78.4944 90.6667C78.824 90.1734 79 89.5933 79 89C79 88.2044 78.6839 87.4413 78.1213 86.8787C77.5587 86.3161 76.7957 86 76 86Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8724" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8724" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8724">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Va=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-night-rain" clip-path="url(#clip0_1858_8374)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8374)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8374)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8374" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8374" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8374">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ha=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-night-sleet" clip-path="url(#clip0_1858_9096)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_9096)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_9096)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9096" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9096" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_9096">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ua=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="partly-cloudy-night-snow" clip-path="url(#clip0_1858_8866)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_8866)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint1_linear_1858_8866)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8866" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_8866" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8866">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Wa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="rain" clip-path="url(#clip0_1858_8370)">
<g id="Sky">
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint0_linear_1858_8370)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8370" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8370">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ga=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="sleet" clip-path="url(#clip0_1858_9090)">
<g id="Sky">
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint0_linear_1858_9090)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 16)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
</g>
<g id="Raindrops">
<path id="Raindrop 1" d="M52 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
<path id="Raindrop 2" d="M64 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 88V91" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 16)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9090" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_9090">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ka=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="snow" clip-path="url(#clip0_1858_8860)">
<g id="Sky">
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2623 48.4746C60.1227 40.6111 70.2975 37.38 78.8151 40.9434C87.3214 44.5023 92.138 54.0026 89.903 62.9648L89.7418 63.6143L90.4108 63.585C97.4203 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7717 88.4997 90.9772 88.5H37.9537C31.1275 88.5018 25.2029 83.1709 24.5592 76.3604C23.9158 69.5518 28.7369 63.2124 35.443 61.9453L35.9264 61.8535L35.8424 61.3691C35.0256 56.6239 37.1258 51.7168 41.1051 49.0127C45.0951 46.3014 50.4459 46.1537 54.5797 48.6396L55.0026 48.8945L55.2623 48.4746Z" fill="url(#paint0_linear_1858_8860)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Snowflakes">
<path id="Snowflake 1" d="M52.5781 90.366L51.3735 89.6775C51.4794 89.2326 51.4786 88.7687 51.3708 88.3241L52.5781 87.6345C52.6738 87.5805 52.7577 87.5079 52.8252 87.421C52.8926 87.3342 52.9423 87.2347 52.9711 87.1284C52.9998 87.0221 53.0071 86.9112 52.9926 86.802C52.9782 86.6928 52.9422 86.5876 52.8868 86.4926C52.7732 86.2998 52.5886 86.1597 52.3728 86.1025C52.157 86.0452 51.9276 86.0754 51.7339 86.1866L50.5278 86.8763C50.1931 86.5586 49.7868 86.3264 49.3437 86.1995V84.8202C49.3368 84.6003 49.245 84.3918 49.0875 84.2387C48.93 84.0856 48.7192 84 48.4998 84C48.2805 84 48.0699 84.0856 47.9124 84.2387C47.7548 84.3918 47.6628 84.6003 47.656 84.8202V86.1995C47.214 86.3289 46.8081 86.5598 46.4706 86.874L45.2662 86.1853C45.0724 86.0742 44.8428 86.044 44.627 86.1013C44.4113 86.1585 44.2267 86.2986 44.113 86.4913C44.0576 86.5864 44.0217 86.6916 44.0072 86.8007C43.9928 86.9099 44 87.0209 44.0288 87.1271C44.0575 87.2334 44.1072 87.3329 44.1747 87.4198C44.2421 87.5067 44.326 87.5792 44.4217 87.6332L45.6264 88.3216C45.5204 88.7666 45.5213 89.2305 45.629 89.675L44.4217 90.3647C44.326 90.4187 44.2421 90.4912 44.1747 90.5781C44.1072 90.665 44.0575 90.7645 44.0288 90.8708C44 90.9771 43.9928 91.088 44.0072 91.1972C44.0217 91.3063 44.0576 91.4115 44.113 91.5066C44.2267 91.6992 44.4113 91.8392 44.627 91.8965C44.8428 91.9537 45.0724 91.9236 45.2662 91.8126L46.4721 91.1229C46.8063 91.4409 47.2128 91.6726 47.6562 91.7979V93.1798C47.6631 93.3997 47.755 93.6082 47.9126 93.7613C48.0701 93.9144 48.2807 94 48.5 94C48.7194 94 48.9302 93.9144 49.0877 93.7613C49.2452 93.6082 49.337 93.3997 49.3439 93.1798V91.7975C49.7853 91.6683 50.1907 91.4378 50.5278 91.1242L51.7341 91.8138C51.9278 91.9248 52.1573 91.955 52.373 91.8977C52.5888 91.8405 52.7733 91.7005 52.887 91.5079C52.9424 91.4128 52.9784 91.3076 52.9928 91.1984C53.0073 91.0892 52.9998 90.9783 52.9711 90.872C52.9423 90.7657 52.8929 90.6662 52.8254 90.5793C52.7579 90.4925 52.6738 90.4199 52.5781 90.366ZM47.8664 90.0861C47.7229 90.005 47.5968 89.8961 47.4956 89.7657C47.3944 89.6353 47.3202 89.486 47.2771 89.3266C47.2339 89.1671 47.2228 89.0007 47.2443 88.8369C47.2658 88.6731 47.3197 88.5152 47.4026 88.3724C47.5735 88.084 47.8503 87.8743 48.1736 87.7883C48.497 87.7023 48.8411 87.747 49.1321 87.9126C49.2756 87.9938 49.4016 88.1027 49.5028 88.2331C49.604 88.3635 49.6782 88.5127 49.7214 88.6722C49.7645 88.8316 49.7757 88.9981 49.7541 89.1619C49.7326 89.3257 49.6787 89.4836 49.5958 89.6263C49.425 89.9149 49.1482 90.1247 48.8248 90.2108C48.5014 90.2969 48.1574 90.2523 47.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
<path id="Snowflake 2" d="M67.5781 90.366L66.3735 89.6775C66.4794 89.2326 66.4786 88.7687 66.3708 88.3241L67.5781 87.6345C67.6738 87.5805 67.7577 87.5079 67.8252 87.421C67.8926 87.3342 67.9423 87.2347 67.9711 87.1284C67.9998 87.0221 68.0071 86.9112 67.9926 86.802C67.9782 86.6928 67.9422 86.5876 67.8868 86.4926C67.7732 86.2998 67.5886 86.1597 67.3728 86.1025C67.157 86.0452 66.9276 86.0754 66.7339 86.1866L65.5278 86.8763C65.1931 86.5586 64.7868 86.3264 64.3437 86.1995V84.8202C64.3368 84.6003 64.245 84.3918 64.0875 84.2387C63.93 84.0856 63.7192 84 63.4998 84C63.2805 84 63.0699 84.0856 62.9124 84.2387C62.7548 84.3918 62.6628 84.6003 62.656 84.8202V86.1995C62.214 86.3289 61.8081 86.5598 61.4706 86.874L60.2662 86.1853C60.0724 86.0742 59.8428 86.044 59.627 86.1013C59.4113 86.1585 59.2267 86.2986 59.113 86.4913C59.0576 86.5864 59.0217 86.6916 59.0072 86.8007C58.9928 86.9099 59 87.0209 59.0288 87.1271C59.0575 87.2334 59.1072 87.3329 59.1747 87.4198C59.2421 87.5067 59.326 87.5792 59.4217 87.6332L60.6264 88.3216C60.5204 88.7666 60.5213 89.2305 60.629 89.675L59.4217 90.3647C59.326 90.4187 59.2421 90.4912 59.1747 90.5781C59.1072 90.665 59.0575 90.7645 59.0288 90.8708C59 90.9771 58.9928 91.088 59.0072 91.1972C59.0217 91.3063 59.0576 91.4115 59.113 91.5066C59.2267 91.6992 59.4113 91.8392 59.627 91.8965C59.8428 91.9537 60.0724 91.9236 60.2662 91.8126L61.4721 91.1229C61.8063 91.4409 62.2128 91.6726 62.6562 91.7979V93.1798C62.6631 93.3997 62.755 93.6082 62.9126 93.7613C63.0701 93.9144 63.2807 94 63.5 94C63.7194 94 63.9302 93.9144 64.0877 93.7613C64.2452 93.6082 64.337 93.3997 64.3439 93.1798V91.7975C64.7853 91.6683 65.1907 91.4378 65.5278 91.1242L66.7341 91.8138C66.9278 91.9248 67.1573 91.955 67.373 91.8977C67.5888 91.8405 67.7733 91.7005 67.887 91.5079C67.9424 91.4128 67.9784 91.3076 67.9928 91.1984C68.0073 91.0892 67.9998 90.9783 67.9711 90.872C67.9423 90.7657 67.8929 90.6662 67.8254 90.5793C67.7579 90.4925 67.6738 90.4199 67.5781 90.366ZM62.8664 90.0861C62.7229 90.005 62.5968 89.8961 62.4956 89.7657C62.3944 89.6353 62.3202 89.486 62.2771 89.3266C62.2339 89.1671 62.2228 89.0007 62.2443 88.8369C62.2658 88.6731 62.3197 88.5152 62.4026 88.3724C62.5735 88.084 62.8503 87.8743 63.1736 87.7883C63.497 87.7023 63.8411 87.747 64.1321 87.9126C64.2756 87.9938 64.4016 88.1027 64.5028 88.2331C64.604 88.3635 64.6782 88.5127 64.7214 88.6722C64.7645 88.8316 64.7757 88.9981 64.7541 89.1619C64.7326 89.3257 64.6787 89.4836 64.5958 89.6263C64.425 89.9149 64.1482 90.1247 63.8248 90.2108C63.5014 90.2969 63.1574 90.2523 62.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 0)"/>
<path id="Snowflake 3" d="M82.5781 90.366L81.3735 89.6775C81.4794 89.2326 81.4786 88.7687 81.3708 88.3241L82.5781 87.6345C82.6738 87.5805 82.7577 87.5079 82.8252 87.421C82.8926 87.3342 82.9423 87.2347 82.9711 87.1284C82.9998 87.0221 83.0071 86.9112 82.9926 86.802C82.9782 86.6928 82.9422 86.5876 82.8868 86.4926C82.7732 86.2998 82.5886 86.1597 82.3728 86.1025C82.157 86.0452 81.9276 86.0754 81.7339 86.1866L80.5278 86.8763C80.1931 86.5586 79.7868 86.3264 79.3437 86.1995V84.8202C79.3368 84.6003 79.245 84.3918 79.0875 84.2387C78.93 84.0856 78.7192 84 78.4998 84C78.2805 84 78.0699 84.0856 77.9124 84.2387C77.7548 84.3918 77.6628 84.6003 77.656 84.8202V86.1995C77.214 86.3289 76.8081 86.5598 76.4706 86.874L75.2662 86.1853C75.0724 86.0742 74.8428 86.044 74.627 86.1013C74.4113 86.1585 74.2267 86.2986 74.113 86.4913C74.0576 86.5864 74.0217 86.6916 74.0072 86.8007C73.9928 86.9099 74 87.0209 74.0288 87.1271C74.0575 87.2334 74.1072 87.3329 74.1747 87.4198C74.2421 87.5067 74.326 87.5792 74.4217 87.6332L75.6264 88.3216C75.5204 88.7666 75.5213 89.2305 75.629 89.675L74.4217 90.3647C74.326 90.4187 74.2421 90.4912 74.1747 90.5781C74.1072 90.665 74.0575 90.7645 74.0288 90.8708C74 90.9771 73.9928 91.088 74.0072 91.1972C74.0217 91.3063 74.0576 91.4115 74.113 91.5066C74.2267 91.6992 74.4113 91.8392 74.627 91.8965C74.8428 91.9537 75.0724 91.9236 75.2662 91.8126L76.4721 91.1229C76.8063 91.4409 77.2128 91.6726 77.6562 91.7979V93.1798C77.6631 93.3997 77.755 93.6082 77.9126 93.7613C78.0701 93.9144 78.2807 94 78.5 94C78.7194 94 78.9302 93.9144 79.0877 93.7613C79.2452 93.6082 79.337 93.3997 79.3439 93.1798V91.7975C79.7853 91.6683 80.1907 91.4378 80.5278 91.1242L81.7341 91.8138C81.9278 91.9248 82.1573 91.955 82.373 91.8977C82.5888 91.8405 82.7733 91.7005 82.887 91.5079C82.9424 91.4128 82.9784 91.3076 82.9928 91.1984C83.0073 91.0892 82.9998 90.9783 82.9711 90.872C82.9423 90.7657 82.8929 90.6662 82.8254 90.5793C82.7579 90.4925 82.6738 90.4199 82.5781 90.366ZM77.8664 90.0861C77.7229 90.005 77.5968 89.8961 77.4956 89.7657C77.3944 89.6353 77.3202 89.486 77.2771 89.3266C77.2339 89.1671 77.2228 89.0007 77.2443 88.8369C77.2658 88.6731 77.3197 88.5152 77.4026 88.3724C77.5735 88.084 77.8503 87.8743 78.1736 87.7883C78.497 87.7023 78.8411 87.747 79.1321 87.9126C79.2756 87.9938 79.4016 88.1027 79.5028 88.2331C79.604 88.3635 79.6782 88.5127 79.7214 88.6722C79.7645 88.8316 79.7757 88.9981 79.7541 89.1619C79.7326 89.3257 79.6787 89.4836 79.5958 89.6263C79.425 89.9149 79.1482 90.1247 78.8248 90.2108C78.5014 90.2969 78.1574 90.2523 77.8664 90.0867V90.0861Z" fill="#86C3DB" transform="translate(0, 8)"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_8860" x1="64.0008" y1="39" x2="64.0008" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<clipPath id="clip0_1858_8860">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,qa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="thunderstorms-day" clip-path="url(#clip0_1858_9913)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_9913)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2625 48.4746C60.1228 40.6111 70.2976 37.38 78.8152 40.9434C87.3215 44.5023 92.1381 54.0026 89.9031 62.9648L89.7419 63.6143L90.4109 63.585C97.4205 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7719 88.4997 90.9773 88.5H37.9539C31.1276 88.5018 25.203 83.1709 24.5593 76.3604C23.9159 69.5518 28.7371 63.2124 35.4431 61.9453L35.9265 61.8535L35.8425 61.3691C35.0258 56.6239 37.1259 51.7168 41.1052 49.0127C45.0952 46.3014 50.4461 46.1537 54.5798 48.6396L55.0027 48.8945L55.2625 48.4746Z" fill="url(#paint1_linear_1858_9913)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Lightning">
<path id="Lightning Bolt" d="M71.1729 68.5L63.5566 83.041L63.1729 83.7725H75.002L56.9521 107.892L60.4893 91.0117L60.6162 90.4092H52.7041L60.3555 68.5H71.1729Z" fill="url(#paint2_linear_1858_9913)" stroke="#F6A823" stroke-miterlimit="10"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9913" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9913" x1="64.0009" y1="39" x2="64.0009" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_9913" x1="64.528" y1="66.0377" x2="84.4144" y2="77.4572" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7B23B"/>
<stop offset="1" stop-color="#F6A823"/>
</linearGradient>
<clipPath id="clip0_1858_9913">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ja=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="thunderstorms-day-rain" clip-path="url(#clip0_1858_9936)">
<g id="Sky">
<g id="Sun">
<circle id="Core" cx="39" cy="51" r="8.5" fill="url(#paint0_linear_1858_9936)" stroke="#F8AF18"/>
<g id="Rays">
<path d="M37.6875 31.3125C37.6875 30.5876 38.2751 30 39 30C39.7249 30 40.3125 30.5876 40.3125 31.3125V37.4375C40.3125 38.1624 39.7249 38.75 39 38.75C38.2751 38.75 37.6875 38.1624 37.6875 37.4375V31.3125Z" fill="#F8AF18"/>
<path d="M51.9931 36.1508C52.5056 35.6382 53.3367 35.6382 53.8492 36.1508C54.3618 36.6633 54.3618 37.4943 53.8492 38.0069L49.5182 42.3379C49.0056 42.8505 48.1746 42.8505 47.6621 42.3379C47.1495 41.8254 47.1495 40.9944 47.6621 40.4818L51.9931 36.1508Z" fill="#F8AF18"/>
<path d="M58.6875 49.6875C59.4124 49.6875 60 50.2751 60 51C60 51.7249 59.4124 52.3125 58.6875 52.3125H52.5625C51.8376 52.3125 51.25 51.7249 51.25 51C51.25 50.2751 51.8376 49.6875 52.5625 49.6875H58.6875Z" fill="#F8AF18"/>
<path d="M53.8492 63.9931C54.3618 64.5057 54.3618 65.3367 53.8492 65.8492C53.3367 66.3618 52.5056 66.3618 51.9931 65.8492L47.6621 61.5182C47.1495 61.0057 47.1495 60.1746 47.6621 59.6621C48.1746 59.1495 49.0057 59.1495 49.5182 59.6621L53.8492 63.9931Z" fill="#F8AF18"/>
<path d="M37.6875 64.5625C37.6875 63.8376 38.2751 63.25 39 63.25C39.7249 63.25 40.3125 63.8376 40.3125 64.5625V70.6875C40.3125 71.4124 39.7249 72 39 72C38.2751 72 37.6875 71.4124 37.6875 70.6875V64.5625Z" fill="#F8AF18"/>
<path d="M28.4818 59.6621C28.9943 59.1495 29.8254 59.1495 30.3379 59.6621C30.8505 60.1746 30.8505 61.0056 30.3379 61.5182L26.0069 65.8492C25.4943 66.3618 24.6633 66.3618 24.1508 65.8492C23.6382 65.3367 23.6382 64.5056 24.1508 63.9931L28.4818 59.6621Z" fill="#F8AF18"/>
<path d="M25.4375 49.6875C26.1624 49.6875 26.75 50.2751 26.75 51C26.75 51.7249 26.1624 52.3125 25.4375 52.3125H19.3125C18.5876 52.3125 18 51.7249 18 51C18 50.2751 18.5876 49.6875 19.3125 49.6875H25.4375Z" fill="#F8AF18"/>
<path d="M30.3379 40.4818C30.8505 40.9944 30.8505 41.8254 30.3379 42.3379C29.8254 42.8505 28.9944 42.8505 28.4818 42.3379L24.1508 38.0069C23.6382 37.4944 23.6382 36.6633 24.1508 36.1508C24.6633 35.6382 25.4944 35.6382 26.0069 36.1508L30.3379 40.4818Z" fill="#F8AF18"/>
</g>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2625 48.4746C60.1228 40.6111 70.2976 37.38 78.8152 40.9434C87.3215 44.5023 92.1381 54.0026 89.9031 62.9648L89.7419 63.6143L90.4109 63.585C97.4205 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7719 88.4997 90.9773 88.5H37.9539C31.1276 88.5018 25.203 83.1709 24.5593 76.3604C23.9159 69.5518 28.7371 63.2124 35.4431 61.9453L35.9265 61.8535L35.8425 61.3691C35.0258 56.6239 37.1259 51.7168 41.1052 49.0127C45.0952 46.3014 50.4461 46.1537 54.5798 48.6396L55.0027 48.8945L55.2625 48.4746Z" fill="url(#paint1_linear_1858_9936)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
<g id="Lightning">
<path id="Lightning Bolt" d="M71.1729 68.5L63.5566 83.041L63.1729 83.7725H75.002L56.9521 107.892L60.4893 91.0117L60.6162 90.4092H52.7041L60.3555 68.5H71.1729Z" fill="url(#paint2_linear_1858_9936)" stroke="#F6A823" stroke-miterlimit="10"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9936" x1="39" y1="42" x2="39" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBBF24"/>
<stop offset="1" stop-color="#F8AF18"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9936" x1="64.0009" y1="39" x2="64.0009" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_9936" x1="64.528" y1="66.0377" x2="84.4144" y2="77.4572" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7B23B"/>
<stop offset="1" stop-color="#F6A823"/>
</linearGradient>
<clipPath id="clip0_1858_9936">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Ya=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="thunderstorms-night" clip-path="url(#clip0_1858_9915)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_9915)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2625 48.4746C60.1228 40.6111 70.2976 37.38 78.8152 40.9434C87.3215 44.5023 92.1381 54.0026 89.9031 62.9648L89.7419 63.6143L90.4109 63.585C97.4205 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7719 88.4997 90.9773 88.5H37.9539C31.1276 88.5018 25.203 83.1709 24.5593 76.3604C23.9159 69.5518 28.7371 63.2124 35.4431 61.9453L35.9265 61.8535L35.8425 61.3691C35.0258 56.6239 37.1259 51.7168 41.1052 49.0127C45.0952 46.3014 50.4461 46.1537 54.5798 48.6396L55.0027 48.8945L55.2625 48.4746Z" fill="url(#paint1_linear_1858_9915)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Lightning">
<path id="Lightning Bolt" d="M71.1729 68.5L63.5566 83.041L63.1729 83.7725H75.002L56.9521 107.892L60.4893 91.0117L60.6162 90.4092H52.7041L60.3555 68.5H71.1729Z" fill="url(#paint2_linear_1858_9915)" stroke="#F6A823" stroke-miterlimit="10"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9915" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9915" x1="64.0009" y1="39" x2="64.0009" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_9915" x1="64.528" y1="66.0377" x2="84.4144" y2="77.4572" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7B23B"/>
<stop offset="1" stop-color="#F6A823"/>
</linearGradient>
<clipPath id="clip0_1858_9915">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Xa=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="thunderstorms-night-rain" clip-path="url(#clip0_1858_9939)">
<g id="Sky">
<g id="Moon">
<path id="Moon_2" d="M35.1152 34.5947C33.3777 43.1625 40.7532 51.2141 49.3135 50.7832C47.6732 55.8338 42.8891 59.4999 37.2178 59.5C30.188 59.5 24.5002 53.8786 24.5 46.959C24.5 40.7451 29.0879 35.5838 35.1152 34.5947Z" fill="url(#paint0_linear_1858_9939)" stroke="#72B9D5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2625 48.4746C60.1228 40.6111 70.2976 37.38 78.8152 40.9434C87.3215 44.5023 92.1381 54.0026 89.9031 62.9648L89.7419 63.6143L90.4109 63.585C97.4205 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7719 88.4997 90.9773 88.5H37.9539C31.1276 88.5018 25.203 83.1709 24.5593 76.3604C23.9159 69.5518 28.7371 63.2124 35.4431 61.9453L35.9265 61.8535L35.8425 61.3691C35.0258 56.6239 37.1259 51.7168 41.1052 49.0127C45.0952 46.3014 50.4461 46.1537 54.5798 48.6396L55.0027 48.8945L55.2625 48.4746Z" fill="url(#paint1_linear_1858_9939)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
<g id="Lightning">
<path id="Lightning Bolt" d="M71.1729 68.5L63.5566 83.041L63.1729 83.7725H75.002L56.9521 107.892L60.4893 91.0117L60.6162 90.4092H52.7041L60.3555 68.5H71.1729Z" fill="url(#paint2_linear_1858_9939)" stroke="#F6A823" stroke-miterlimit="10"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9939" x1="37" y1="34" x2="37" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#86C3DB"/>
<stop offset="1" stop-color="#72B9D5"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9939" x1="64.0009" y1="39" x2="64.0009" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<linearGradient id="paint2_linear_1858_9939" x1="64.528" y1="66.0377" x2="84.4144" y2="77.4572" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7B23B"/>
<stop offset="1" stop-color="#F6A823"/>
</linearGradient>
<clipPath id="clip0_1858_9939">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Za=`<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="thunderstorms-rain" clip-path="url(#clip0_1858_9933)">
<g id="Sky">
<g id="Clouds">
<g id="Cloud">
<path id="Cloud_2" d="M55.2625 48.4746C60.1228 40.6111 70.2976 37.38 78.8152 40.9434C87.3215 44.5023 92.1381 54.0026 89.9031 62.9648L89.7419 63.6143L90.4109 63.585C97.4205 63.2791 103.5 68.9917 103.5 76.0283C103.5 82.8395 97.7719 88.4997 90.9773 88.5H37.9539C31.1276 88.5018 25.203 83.1709 24.5593 76.3604C23.9159 69.5518 28.7371 63.2124 35.4431 61.9453L35.9265 61.8535L35.8425 61.3691C35.0258 56.6239 37.1259 51.7168 41.1052 49.0127C45.0952 46.3014 50.4461 46.1537 54.5798 48.6396L55.0027 48.8945L55.2625 48.4746Z" fill="url(#paint0_linear_1858_9933)" stroke="#E6EFFC" stroke-miterlimit="10"/>
</g>
</g>
</g>
<g id="Precipitation">
<g id="Raindrops">
<path id="Raindrop 1" d="M52 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
<path id="Raindrop 2" d="M64 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 0)"/>
<path id="Raindrop 3" d="M76 83V95" stroke="#0A5AD4" stroke-width="4" stroke-linecap="round" transform="translate(0, 8)"/>
</g>
</g>
<g id="Lightning">
<path id="Lightning Bolt" d="M71.1729 68.5L63.5566 83.041L63.1729 83.7725H75.002L56.9521 107.892L60.4893 91.0117L60.6162 90.4092H52.7041L60.3555 68.5H71.1729Z" fill="url(#paint1_linear_1858_9933)" stroke="#F6A823" stroke-miterlimit="10"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1858_9933" x1="64.0009" y1="39" x2="64.0009" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#F3F7FE"/>
<stop offset="1" stop-color="#E6EFFC"/>
</linearGradient>
<linearGradient id="paint1_linear_1858_9933" x1="64.528" y1="66.0377" x2="84.4144" y2="77.4572" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7B23B"/>
<stop offset="1" stop-color="#F6A823"/>
</linearGradient>
<clipPath id="clip0_1858_9933">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>`,Qa=`modulepreload`,$a=function(e){return`/`+e},eo={},Q=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=$a(t,n),t=s(t),t in eo)return;eo[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Qa,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},to={"clear-day":ea,"clear-night":ta,drizzle:na,"extreme-day-rain":ra,"extreme-day-sleet":ia,"extreme-day-snow":aa,"extreme-night-rain":oa,"extreme-night-sleet":sa,"extreme-night-snow":ca,"extreme-rain":la,"extreme-sleet":ua,"extreme-snow":da,fog:fa,hail:pa,"mostly-clear-day":ma,"mostly-clear-night":ha,overcast:ga,"overcast-day":_a,"overcast-day-drizzle":va,"overcast-day-hail":ya,"overcast-day-rain":ba,"overcast-day-sleet":xa,"overcast-day-snow":Sa,"overcast-night":Ca,"overcast-night-drizzle":wa,"overcast-night-hail":Ta,"overcast-night-rain":Ea,"overcast-night-sleet":Da,"overcast-night-snow":Oa,"overcast-rain":ka,"overcast-sleet":Aa,"overcast-snow":ja,"partly-cloudy-day":Ma,"partly-cloudy-day-drizzle":Na,"partly-cloudy-day-hail":Pa,"partly-cloudy-day-rain":Fa,"partly-cloudy-day-sleet":Ia,"partly-cloudy-day-snow":La,"partly-cloudy-night":Ra,"partly-cloudy-night-drizzle":za,"partly-cloudy-night-hail":Ba,"partly-cloudy-night-rain":Va,"partly-cloudy-night-sleet":Ha,"partly-cloudy-night-snow":Ua,rain:Wa,sleet:Ga,snow:Ka,"thunderstorms-day":qa,"thunderstorms-day-rain":Ja,"thunderstorms-night":Ya,"thunderstorms-night-rain":Xa,"thunderstorms-rain":Za},no={"clear-day":()=>Q(()=>import(`./clear-day-W8xUrAbl.js`),[]),"clear-night":()=>Q(()=>import(`./clear-night-ERuziogw.js`),[]),drizzle:()=>Q(()=>import(`./drizzle-B-mdkDKV.js`),[]),"extreme-day-rain":()=>Q(()=>import(`./extreme-day-rain-CqJljsOE.js`),[]),"extreme-day-sleet":()=>Q(()=>import(`./extreme-day-sleet-DK30zVEI.js`),[]),"extreme-day-snow":()=>Q(()=>import(`./extreme-day-snow-Crt8GNYt.js`),[]),"extreme-night-rain":()=>Q(()=>import(`./extreme-night-rain-DxDvXCZk.js`),[]),"extreme-night-sleet":()=>Q(()=>import(`./extreme-night-sleet-_y0iDa2z.js`),[]),"extreme-night-snow":()=>Q(()=>import(`./extreme-night-snow-KCg5fOpV.js`),[]),"extreme-rain":()=>Q(()=>import(`./extreme-rain-VvBF2tyU.js`),[]),"extreme-sleet":()=>Q(()=>import(`./extreme-sleet-DbMWnPSh.js`),[]),"extreme-snow":()=>Q(()=>import(`./extreme-snow-B4EMeJRc.js`),[]),fog:()=>Q(()=>import(`./fog-B9t3CvN-.js`),[]),hail:()=>Q(()=>import(`./hail-B5Na8e8Y.js`),[]),"mostly-clear-day":()=>Q(()=>import(`./mostly-clear-day-Bvk0BpwY.js`),[]),"mostly-clear-night":()=>Q(()=>import(`./mostly-clear-night-mvthHvXX.js`),[]),overcast:()=>Q(()=>import(`./overcast-CMtY0c0f.js`),[]),"overcast-day":()=>Q(()=>import(`./overcast-day-BtLf-YUT.js`),[]),"overcast-day-drizzle":()=>Q(()=>import(`./overcast-day-drizzle-Bv3o5bNE.js`),[]),"overcast-day-hail":()=>Q(()=>import(`./overcast-day-hail-DlS-TanQ.js`),[]),"overcast-day-rain":()=>Q(()=>import(`./overcast-day-rain-BRggCxbW.js`),[]),"overcast-day-sleet":()=>Q(()=>import(`./overcast-day-sleet-B4iUNUVb.js`),[]),"overcast-day-snow":()=>Q(()=>import(`./overcast-day-snow-B0KCHrT6.js`),[]),"overcast-night":()=>Q(()=>import(`./overcast-night-D9_0Fwti.js`),[]),"overcast-night-drizzle":()=>Q(()=>import(`./overcast-night-drizzle-BA1q5KsE.js`),[]),"overcast-night-hail":()=>Q(()=>import(`./overcast-night-hail-DDcSkLFy.js`),[]),"overcast-night-rain":()=>Q(()=>import(`./overcast-night-rain-CQpZq0O5.js`),[]),"overcast-night-sleet":()=>Q(()=>import(`./overcast-night-sleet-BruqxHC2.js`),[]),"overcast-night-snow":()=>Q(()=>import(`./overcast-night-snow-DiojAL35.js`),[]),"overcast-rain":()=>Q(()=>import(`./overcast-rain-CHwRaR5x.js`),[]),"overcast-sleet":()=>Q(()=>import(`./overcast-sleet-B3Jzd1IZ.js`),[]),"overcast-snow":()=>Q(()=>import(`./overcast-snow-CnF79X4o.js`),[]),"partly-cloudy-day":()=>Q(()=>import(`./partly-cloudy-day-BcpYfVzw.js`),[]),"partly-cloudy-day-drizzle":()=>Q(()=>import(`./partly-cloudy-day-drizzle-C8qubFyr.js`),[]),"partly-cloudy-day-hail":()=>Q(()=>import(`./partly-cloudy-day-hail-DgQ8FTCK.js`),[]),"partly-cloudy-day-rain":()=>Q(()=>import(`./partly-cloudy-day-rain-Cn74CguE.js`),[]),"partly-cloudy-day-sleet":()=>Q(()=>import(`./partly-cloudy-day-sleet-Bd6--kVL.js`),[]),"partly-cloudy-day-snow":()=>Q(()=>import(`./partly-cloudy-day-snow-Cf-kcepI.js`),[]),"partly-cloudy-night":()=>Q(()=>import(`./partly-cloudy-night-D-Px8OfN.js`),[]),"partly-cloudy-night-drizzle":()=>Q(()=>import(`./partly-cloudy-night-drizzle-C_JX8In6.js`),[]),"partly-cloudy-night-hail":()=>Q(()=>import(`./partly-cloudy-night-hail-Ct20n1aa.js`),[]),"partly-cloudy-night-rain":()=>Q(()=>import(`./partly-cloudy-night-rain-5nspUSy_.js`),[]),"partly-cloudy-night-sleet":()=>Q(()=>import(`./partly-cloudy-night-sleet-BEOig6ge.js`),[]),"partly-cloudy-night-snow":()=>Q(()=>import(`./partly-cloudy-night-snow-nHvU_LLs.js`),[]),rain:()=>Q(()=>import(`./rain-COEEnFep.js`),[]),sleet:()=>Q(()=>import(`./sleet-CRXoISID.js`),[]),snow:()=>Q(()=>import(`./snow-D7MzHW2L.js`),[]),"thunderstorms-day":()=>Q(()=>import(`./thunderstorms-day-iBMQSL-O.js`),[]),"thunderstorms-day-rain":()=>Q(()=>import(`./thunderstorms-day-rain-CAx45eX5.js`),[]),"thunderstorms-night":()=>Q(()=>import(`./thunderstorms-night-B2zJei_2.js`),[]),"thunderstorms-night-rain":()=>Q(()=>import(`./thunderstorms-night-rain-DEPkyXQg.js`),[]),"thunderstorms-rain":()=>Q(()=>import(`./thunderstorms-rain-dSfC7d8p.js`),[])},ro=(e,t)=>{let n=new Set;for(let[,e]of t.matchAll(/\bid="([^"]+)"/g))n.add(e);if(n.size===0)return t;let r=t=>`${e}-${t}`;return t.replace(/\bid="([^"]+)"/g,(e,t)=>n.has(t)?`id="${r(t)}"`:e).replace(/url\(#([^)"']+)\)/g,(e,t)=>n.has(t)?`url(#${r(t)})`:e).replace(/\b(xlink:href|href)="#([^"]+)"/g,(e,t,i)=>n.has(i)?`${t}="#${r(i)}"`:e)},io=/#E6EFFC|#E2E8F0/gi,ao=e=>e.replace(io,`var(--icon-cloud)`),oo=new Map,so=(e,t)=>{let n=oo.get(e);if(n!==void 0)return n.cloneNode(!0);let r=new DOMParser().parseFromString(ao(ro(e,t)),`image/svg+xml`).documentElement;if(r.namespaceURI!==`http://www.w3.org/2000/svg`||r.localName!==`svg`)return;let i=document.importNode(r,!0);return i.setAttribute(`class`,`weather-icon`),i.removeAttribute(`width`),i.removeAttribute(`height`),i.setAttribute(`aria-hidden`,`true`),i.setAttribute(`focusable`,`false`),oo.set(e,i),i.cloneNode(!0)},co=e=>{let t=to[e];return t===void 0?void 0:so(e,t)},lo=()=>{try{return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}},uo=e=>{let t=co(e);if(t===void 0)return;t.classList.add(`card-icon`);let n=no[e];return n===void 0||lo()||n().then(n=>{let r=so(`${e}-animated`,n.default);r&&t.isConnected&&(r.classList.add(`card-icon`),t.replaceWith(r))}).catch(()=>{}),t},fo=()=>{let e=document.querySelector(`#status`),t=document.querySelector(`#signin`),n=document.querySelector(`#reload`),r=document.querySelector(`#payload`),i=document.querySelector(`#account`);return e&&t&&n&&r&&i?{status:e,signIn:t,reload:n,payload:r,account:i}:void 0},po=(e,t,n)=>{e.status.textContent=n,e.status.dataset.tone=t},$=(e,t)=>{e.hidden=!t},mo=(e,t)=>{e.reload.textContent=t,$(e.reload,!0)},ho=(e,t)=>{e.account.textContent=t===void 0?``:`Signed in as ${t}`,$(e.account,t!==void 0)},go=(e,t)=>{let n=Co(e,t);if(!n.isValid)return e;let r=n.toRelative(),i=n.toFormat(`d.M.yyyy HH:mm:ss`);return r?`${i} (${r})`:i},_o={temperatureC:`Temp °C`,humidityPct:`RH %`,precipitationMm:`Rain mm`},vo=`precipitationMm`,yo=e=>_o[e]??e,bo=e=>e.measures.length>0?e.measures:[``],xo=(e,t)=>{let n=e?.[t];return typeof n==`number`&&Number.isFinite(n)?n:void 0},So=(e,t)=>{let n=[];t.samples>1&&n.push(`Mean of ${t.samples} readings`);let r=new Set(t.locations),i=e.locations.filter(e=>!r.has(e));return i.length>0&&n.push(`No reading from ${i.join(`, `)}`),n.length>0?n.join(`. `):void 0},Co=(e,t)=>{let n=Y.fromISO(e,{zone:t});return n.isValid?n:Y.fromISO(e)},wo=(e,t)=>{let n=Co(e,t);return n.isValid?{time:n.toFormat(`HH:mm`),valid:!0}:{time:e,valid:!1}},To=(e,t)=>{let n=Y.fromISO(e,{zone:t});return n.isValid?n.toFormat(`ccc d.M.`):e},Eo=(e,t)=>{for(let n of e){let e=t.cells[n.id],r=$i(e?.weatherCode,e?.weatherCodeScheme);if(r!==void 0)return{symbol:r,label:n.label}}},Do=(e,t)=>{let n=Date.parse(t);return n>=Date.parse(e.from)&&n<Date.parse(e.to)},Oo=(e,t,n)=>{let r=new Map;return n.forEach(n=>{let i=Eo(e,n),a=t.find(e=>Do(e,n.hour)),o=Ki(n.hour,a?.forecast?.sunrise,a?.forecast?.sunset);r.set(n.hour,{...i===void 0?{}:{symbol:i.symbol,label:i.label},...o===void 0?{}:{band:o}})}),r},ko=e=>{let t=document.createElement(`span`);if(t.classList.add(`symbol`),e.symbol===void 0)return t;t.dataset.severity=e.symbol.severity,t.title=e.label?`${e.label}: ${e.symbol.description}`:e.symbol.description;let n=document.createElement(`span`);n.classList.add(`visually-hidden`),n.textContent=t.title;let r=co(e.symbol.icon);return t.append(...r===void 0?[n]:[r,n]),t},Ao=e=>{let t=document.createElement(`td`);t.classList.add(`empty`),e&&(t.title=e);let n=document.createElement(`span`);return n.classList.add(`visually-hidden`),n.textContent=e?`No reading. ${e}`:`No reading`,t.append(n),t},jo=()=>{let e=document.createElement(`td`);e.classList.add(`empty`);let t=document.createElement(`span`);return t.classList.add(`visually-hidden`),t.textContent=`No rain`,e.append(t),e},Mo=e=>{let t=document.createElement(`thead`),n=document.createElement(`tr`),r=document.createElement(`th`);r.scope=`col`,r.setAttribute(`rowspan`,`2`),r.classList.add(`hour`),r.textContent=`Hour`,n.append(r);let i=document.createElement(`tr`);return e.forEach(e=>{let t=document.createElement(`th`);t.scope=`colgroup`;let r=bo(e);t.setAttribute(`colspan`,String(r.length)),t.textContent=e.label,n.append(t),r.forEach(e=>{let t=document.createElement(`th`);t.scope=`col`,t.textContent=yo(e),i.append(t)})}),t.append(n,i),t},No=(e,t)=>{for(let n=t.length-1;n>=0;--n){let r=t[n],i=r?.cells[e.id];if(r&&i&&bo(e).some(e=>xo(i,e)!==void 0))return{hour:r.hour,cell:i}}},Po=(e,t)=>e===`temperatureC`?`${t.toFixed(1)} °C`:e===`humidityPct`?`${t.toFixed(1)} % RH`:e===vo?`${t.toFixed(1)} mm`:`${t.toFixed(1)} ${e}`,Fo=(e,t,n)=>{let r=document.createElement(`div`);return r.classList.add(`cards`),e.forEach(e=>{let i=document.createElement(`article`);i.classList.add(`card`);let a=document.createElement(`h2`);a.textContent=e.label,i.append(a);let o=No(e,t);if(o===void 0){let e=document.createElement(`p`);e.classList.add(`nothing`),e.textContent=`No readings`;let t=document.createElement(`p`);t.classList.add(`when`),t.textContent=`yesterday or today`,i.append(e,t),r.append(i);return}let s=bo(e).map(e=>({measure:e,value:xo(o.cell,e)})).filter(e=>e.value!==void 0).filter(e=>e.measure!==vo||e.value!==0),c=$i(o.cell.weatherCode,o.cell.weatherCodeScheme),[l,...u]=s;if(l){let e=document.createElement(`p`);e.classList.add(`reading`);let t=c?uo(c.icon):void 0;t&&e.append(t);let n=document.createElement(`span`);n.textContent=Po(l.measure,l.value),e.append(n),i.append(e)}if(u.length>0){let e=document.createElement(`p`);e.classList.add(`secondary`),e.textContent=u.map(e=>Po(e.measure,e.value)).join(` · `),i.append(e)}if(c){let e=document.createElement(`p`);e.classList.add(`condition`),e.textContent=c.description,i.append(e)}let d=document.createElement(`p`);d.classList.add(`when`);let{time:f}=wo(o.hour,n);d.textContent=`${To(o.hour,n)} ${f}`;let p=So(e,o.cell);p&&(d.title=p,d.classList.add(`noted`)),i.append(d),r.append(i)}),r},Io=(e,t,n,r,i,a)=>[...t].reverse().map((t,o)=>{let s=document.createElement(`tbody`),c=`day-${t.date}`;s.id=c;let l=o===0;s.classList.toggle(`collapsed`,!l);let u=document.createElement(`tr`);u.classList.add(`day`);let d=document.createElement(`th`);d.scope=`colgroup`,d.setAttribute(`colspan`,String(r));let f=n.filter(e=>Do(t,e.hour)).reverse(),p=document.createElement(`button`);p.type=`button`,p.setAttribute(`aria-expanded`,String(l)),p.setAttribute(`aria-controls`,c);let m=document.createElement(`span`);m.classList.add(`day-name`),m.textContent=To(t.date,i);let h=document.createElement(`span`);return h.classList.add(`day-count`),h.textContent=`${f.length} ${f.length===1?`hour`:`hours`}`,p.append(m,h),p.addEventListener(`click`,()=>{let e=s.classList.toggle(`collapsed`)===!1;p.setAttribute(`aria-expanded`,String(e))}),d.append(p),u.append(d),s.append(u,Lo(e,t)),f.forEach(t=>{s.append(Ro(e,t,i,a.get(t.hour)))}),s}),Lo=(e,t)=>{let n=document.createElement(`tr`);n.classList.add(`day-mean`);let r=document.createElement(`th`);return r.scope=`row`,r.classList.add(`hour`),r.textContent=`Mean`,n.append(r),e.forEach(e=>{let r=t.cells[e.id],i=r?So(e,r):void 0;bo(e).forEach(e=>{let t=xo(r,e);if(t===void 0){n.append(Ao(i));return}if(e===vo&&t===0){n.append(jo());return}let a=document.createElement(`td`);a.textContent=t.toFixed(1);let o=(e===vo?[`Total for the day`,i]:[i]).filter(e=>!!e).join(`. `);o&&(a.title=o),e===vo&&a.classList.add(`total`),n.append(a)})}),n},Ro=(e,t,n,r)=>{let i=document.createElement(`tr`),{time:a}=wo(t.hour,n),o=document.createElement(`th`);o.scope=`row`,o.classList.add(`hour`);let s=document.createElement(`span`);if(s.textContent=a,o.append(s),o.append(ko(r??{})),r?.band!==void 0){o.dataset.band=r.band;let e=document.createElement(`span`);e.classList.add(`visually-hidden`),e.textContent=Ji(r.band),o.append(e)}return i.append(o),e.forEach(e=>{let n=t.cells[e.id],r=n?So(e,n):void 0;bo(e).forEach(e=>{let t=xo(n,e);if(t===void 0){i.append(Ao(r));return}if(e===vo&&t===0){i.append(jo());return}let a=document.createElement(`td`);a.textContent=t.toFixed(1),r&&(a.title=r,(n?.samples??0)>1&&a.classList.add(`mean`)),i.append(a)})}),i},zo=(e,t)=>{e.payload.replaceChildren();let n=Oo(t.zones,t.days,t.hours),r=Fo(t.zones,t.hours,t.timeZone),i=document.createElement(`p`);i.classList.add(`meta`),i.textContent=`Yesterday and today, hourly. Updated ${go(t.generatedAt,t.timeZone)}.`;let a=document.createElement(`table`),o=document.createElement(`caption`);o.classList.add(`visually-hidden`),o.textContent=`Readings by hour, yesterday and today`;let s=1+t.zones.reduce((e,t)=>e+bo(t).length,0);a.append(o,Mo(t.zones),...Io(t.zones,t.days,t.hours,s,t.timeZone,n));let c=document.createElement(`div`);c.classList.add(`scroller`),c.tabIndex=0,c.setAttribute(`role`,`region`),c.setAttribute(`aria-label`,`Hourly readings`),c.append(a),e.payload.append(r,i,c),$(e.payload,!0)},Bo=(e,t,n)=>{po(e,n,t),$(e.signIn,!0),$(e.reload,!1),$(e.payload,!1),ho(e)},Vo=(e,t)=>{switch(t.kind){case`ok`:po(e,`info`,``),$(e.signIn,!1),$(e.reload,!1),zo(e,t.payload),ho(e,t.payload.signedInAs);return;case`signed-out`:Bo(e,`Sign in with Google to continue.`,`info`);return;case`expired`:Fi(),Bo(e,`Your sign-in has expired. Sign in again to continue.`,`problem`);return;case`forbidden`:{let t=Pi(ji);Fi(),Bo(e,t?`${t} is not allowed to read this dashboard. Sign in with a different account if you have one.`:`This account is not allowed to read this dashboard.`,`problem`);return}case`error`:po(e,`problem`,`Could not load the readings: ${t.detail}.`),$(e.signIn,!1),mo(e,`Try again`),$(e.payload,!1),ho(e);return}},Ho=async e=>{po(e,`info`,`Loading...`),$(e.signIn,!1),$(e.reload,!1),$(e.payload,!1),ho(e),Vo(e,await Ui())};(async()=>{let e=fo();if(!e)return;e.reload.addEventListener(`click`,()=>{Ho(e)});let t=Ni();t===void 0?Bo(e,`Sign in with Google to continue.`,`info`):Ho(e);try{await ki(e.signIn,()=>void Ho(e))}catch(n){if(t!==void 0)return;$(e.signIn,!1),po(e,`problem`,n instanceof Error?`Google sign-in is unavailable: ${n.message}.`:`Google sign-in is unavailable.`)}})();