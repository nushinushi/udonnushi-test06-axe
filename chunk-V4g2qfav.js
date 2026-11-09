import{i as H}from"./chunk-BUu2EFhi.js";import{d as gt,f as ht,g as ot,l as dt,t as F,y as ut}from"./chunk-wcfR79QF.js";import{s as x}from"./chunk-Bp7YJnwy.js";var y={"&":`&amp;`,"'":`&#x27;`,"`":`&#x60;`,'"':`&quot;`,"<":`&lt;`,">":`&gt;`};var C=class a{static{this.STYLE_BLOCK=`<style>.m{display:flex;align-items:flex-start;margin:2px 0;line-height:1.5}.tb{flex:0 0 auto;color:#888;font-size:.85em;margin-right:4px;padding-top:11px}.tm{flex:0 0 auto;width:48px;color:#888;font-size:.85em;padding-top:11px}.tc{flex:0 0 auto;margin-right:4px;padding-top:11px}.av{display:inline-block;width:40px;height:40px;vertical-align:middle;margin-right:6px}.ap{border:1px solid #ccc;border-radius:4px;background:#fff;object-fit:cover;object-position:50% 0}.ct{flex:1 1 auto;min-width:0}.bq{margin:0 4px 0 0;padding:2px 8px;border-left:3px solid #aaa;color:#666;font-size:.9em;background:#f7f7f7;display:inline-block;max-width:70%;vertical-align:middle}.bn{font-weight:bold;margin-right:4px}.ai{max-width:180px;max-height:120px;width:auto;height:auto;object-fit:contain;border:1px solid #ccc;border-radius:4px;background:#fff;vertical-align:top;margin:2px 4px 2px 0}.aw{display:block;margin-top:6px;white-space:normal}`+dt+`</style>
`}static escapeHtml(e){return typeof e!=`string`?String(e):ot(e,n=>n.replace(/[&'`"<>]/g,o=>y[o]??o)).replace(/\s/g,` `)}static escapeHtmlLines(e){let t=n=>a.escapeHtml(x(n));return gt(F(e.replace(/\r\n/g,`
`)),t,ht).split(`
`).join(`<br>`)}static formatMessageStandard(e,t,n,o,s,i,c){if(!n)return``;let r=`<div class="m">`;if(t&&(r+=`<span class="tb">[${a.escapeHtml(t)}]</span>`),e){let m=new Date(n.timestamp),d=`${(`00`+m.getHours()).slice(-2)}:${(`00`+m.getMinutes()).slice(-2)}`;r+=`<span class="tm">${d}</span>`}r+=a.formatPortraitImage(n,s),r+=`<div class="ct">`,r+=a.formatReferenceBlock(n,o,i),r+=`<font color='`,n.messColor&&(r+=n.messColor.toLowerCase()),r+=`'>`;let l=a.decode(n.name,i);r+=`<b>`,l&&(r+=a.escapeHtml(l)),r+=`</b>`;let p=a.canSee(n,o);if(r+=`：`,!n.isSecret||p){let m=H(n.vnEmote,a.decode(n.text,i));m&&(r+=a.escapeHtmlLines(m)),r+=a.formatAttachmentImages(n,s);let d=a.reactionSummary(n,c);d&&(r+=` \u3014${a.escapeHtml(d)}\u3015`)}else r+=`（シークレットダイス）`;return n.fixd&&(r+=` (編集済)`),n.isPseudoDeleted&&(r+=` (削除済)`),r+=`</font>`,r+=`</div></div>
`,r}static formatMessageCoc(e,t,n,o,s){if(!t)return``;let i=``;i+=`    <div class="m" style="color:${t.messColor.toLowerCase()}">
`,i+=`      <span class="tc"> [${e}]</span>
`,i+=`      ${a.formatPortraitImage(t,o)}
`,i+=`      <div class="ct">
`,i+=`        `;let c=a.formatReferenceBlock(t,n,s);c&&(i+=c);let r=a.decode(t.name,s);i+=`<span>${a.escapeHtml(r).replace(`<`,``).replace(`>`,``)}</span> `;let l=a.canSee(t,n);if(!t.isSecret||l){let p=H(t.vnEmote,a.decode(t.text,s));p&&(i+=a.escapeHtmlLines(p).replace(/→/g,`＞`)),i+=a.formatAttachmentImages(t,o)}else i+=`（シークレットダイス）`;return t.fixd&&(i+=` (編集済)`),t.isPseudoDeleted&&(i+=` (削除済)`),i+=`
`,i+=`      </div>
`,i+=`    </div>
`,i+=`    
`,i}static decode(e,t){return e==null?``:t?t(e):e}static canSee(e,t){return t!=null?e.isSentBy(t):e.isSendFromSelf}static isSealed(e,t){return e.isSecret&&!a.canSee(e,t)}static exportTabHtml(e,t,n,o,s){let i=`<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' lang='ja'>
  <head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <title>\u30C1\u30E3\u30C3\u30C8\u30ED\u30B0\uFF1A${a.escapeHtml(e.name)}</title>
    ${a.STYLE_BLOCK}  </head>
  <body>
`,c=[];for(let r of e.chatMessages)a.isVisibleMessage(r,t)&&c.push(a.formatMessageStandard(!0,``,r,t,n,o,s));return i+c.join(``)+`
  </body>
</html>`}static exportTabHtmlCoc(e,t,n,o){let s=`<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Udonalium Axe - logs</title>
    ${a.STYLE_BLOCK}  </head>
  <body>

`,i=[];for(let c of e.chatMessages)a.isVisibleMessage(c,t)&&i.push(a.formatMessageCoc(a.escapeHtml(e.name),c,t,n,o));return s+i.join(``)+`  </body>
</html>`}static exportAllTabsHtml(e,t,n,o,s,i){return`<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' lang='ja'>
  <head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <title>\u30C1\u30E3\u30C3\u30C8\u30ED\u30B0\uFF1A\u5168\u30BF\u30D6</title>
    ${a.STYLE_BLOCK}  </head>
  <body>
`+a.mergeTabMessages(a.spokenTabs(e),(l,p)=>a.formatMessageStandard(!!t,l,p,n,o,s,i),n)+`
  </body>
</html>`}static exportAllTabsHtmlCoc(e,t,n,o){return`<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Udonalium Axe - logs</title>
    ${a.STYLE_BLOCK}  </head>
  <body>

`+a.mergeTabMessages(a.spokenTabs(e),(c,r)=>a.formatMessageCoc(c,r,t,n,o),t)+`  </body>
</html>`}static spokenTabs(e){return e.filter(t=>!t.isSystemTab)}static isVisibleMessage(e,t){let n=e.to;return n?t!=null?n===t||e.from===t:e.isDisplayable:!0}static mergeEntries(e,t){if(!e||e.length===0)return[];let n=e.length,o=new Array(n).fill(0),s=[];for(;;){let i=-1,c=-1;for(let l=0;l<n;l++){if(e[l].chatMessages.length<=o[l])continue;let p=e[l].chatMessages[o[l]].placedAt;(c===-1||p<c)&&(c=p,i=l)}if(i===-1)break;let r=e[i].chatMessages[o[i]];a.isVisibleMessage(r,t)&&s.push({tab:e[i],tabIndex:i,message:r}),o[i]++}return s}static mergeTabMessages(e,t,n){return a.mergeEntries(e,n).map(o=>t(o.tab.name,o.message)).join(``)}static formatPortraitImage(e,t){let n=e.image,o=n?t?.(n)??n.url:``;if(!n||!o)return`<span class="av"></span>`;let s=e.name||`portrait`;return`<img data-img-key="${a.escapeAttribute(o)}" alt="${a.escapeAttribute(s)}" class="av ap" />`}static formatReferenceBlock(e,t,n){let o=a.referencedLine(e.quoteOf?e.quoteOfMessage:null,t),s=a.referencedLine(e.replyTo?e.replyToMessage:null,t);if(!o&&!s)return``;let i=[];return o&&i.push(a.formatReferenceBlockBody({label:`引用`,icon:`❝`,target:o,maxTextLength:280,userId:t,textDecoder:n})),s&&i.push(a.formatReferenceBlockBody({label:`返信先`,icon:`↩`,target:s,maxTextLength:120,userId:t,textDecoder:n})),i.join(``)}static referencedLine(e,t){return!e||e.isPseudoDeleted?null:a.isVisibleMessage(e,t)?e:null}static reactionSummary(e,t){return!t||!e.identifier?``:t(e.identifier).map(n=>`${n.label}\xD7${n.count}`).join(` `)}static withoutDeleted(e){return e.map(t=>({name:t.name,isSystemTab:t.isSystemTab,chatMessages:t.chatMessages.filter(n=>!n.isPseudoDeleted)}))}static referenceExcerpt(e,t,n){let o=ut(H(e.vnEmote,a.decode(e.text,n))).replace(/\s+/g,` `).trim();return o.length>t?o.slice(0,t)+`…`:o}static formatReferenceBlockBody(e){let{label:t,icon:n,target:o,maxTextLength:s,userId:i,textDecoder:c}=e,r=a.decode(o.name,c),l=a.isSealed(o,i)?`（シークレットダイス）`:a.referenceExcerpt(o,s,c);return`<blockquote class="bq"><span class="bn">${n} ${a.escapeHtml(r||t)}</span><span>${a.escapeHtml(l)}</span></blockquote><br>`}static formatAttachmentImages(e,t){let n=e.attachmentImages??[];if(n.length<1)return``;let o=n.map(s=>{let i=t?.(s)??s.url;if(!i)return``;let c=s.name||`添付画像`;return`<img data-img-key="${a.escapeAttribute(i)}" alt="${a.escapeAttribute(c)}" class="ai" />`}).filter(s=>s.length>0).join(``);return o?`<span class="aw">${o}</span>`:``}static escapeAttribute(e){return e.replace(/[&'`"<>]/g,t=>y[t]??t)}};export{C as t};