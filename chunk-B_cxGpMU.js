import{n as F,s as K$1,t as E$1}from"./chunk-LK6SWMBe.js";import{Cr as w,Zt as _b,dr as se}from"./chunk-DOY0w_Yg.js";import{n as S}from"./chunk-D-U39Me2.js";import{I as N$1,N as M$1,Qt as x,St as ii,T as I,Yt as w$1,Z as Ve,d as De,ht as g$1,n as A$1,pt as f,u as D$1}from"./chunk-CBbmLgyK.js";import{a as m}from"./chunk-2M3b2eA_.js";import{D as d,u as M$2,x as Z}from"./chunk-DeU8dxlx.js";import{Ot as h$1,Tt as g$2,Wt as p,Zt as s,j as M$3,k as L}from"./chunk-DZbF4nj0.js";import{c as f$1,d as q,f as w$2,l,s as d$1,u as p$1}from"./chunk-D0RlKH9O.js";import{n as i}from"./chunk-B8QUe8eZ.js";import{t as c}from"./chunk-sFJ-2RYK.js";import{n as e}from"./chunk-eHxWsxHW.js";import{s as u$1}from"./chunk-BaF8fnbM.js";import{a as O$1,m as n}from"./chunk-CH9g8J6G.js";import{i as _,o as k,r as U,s as u$2}from"./chunk-CYaPF-c7.js";import{t as a}from"./chunk-BrdvMrTM.js";import{T as o,w as ht$1}from"./chunk-40yUipqh.js";import{n as O$2}from"./chunk-CzS4IYy9.js";import{t as s$1}from"./chunk-D7nCb7m6.js";import{r as i$1}from"./chunk-bj-w7Q1T.js";import{n as I$1}from"./chunk-CJOgQVVj.js";import{n as r}from"./chunk-vLpsBzQ5.js";import{D as s$2,g as c$1,k as u$3,l as Nt$1,p as Xt}from"./chunk-efrUIzdd.js";import{c as s$3}from"./chunk-DwyMcBRX.js";import{t as r$1}from"./chunk--6QM4TqK.js";import{n as N$2,t as B}from"./chunk-B5J_6dty.js";import{n as r$2,t as l$1}from"./chunk-B94ICTT9.js";import{t as r$3}from"./chunk-CuJAZo1b.js";import{n as p$2,t as n$1}from"./chunk-BcwK1pS5.js";import{n as Jt$1,r as Kt$1,t as Jr}from"./chunk-DIDdKQKV.js";import{r as z}from"./chunk-aJKrk3T7.js";import{c as lt,o as f$2,r as St$1}from"./chunk-C-Yubn1s.js";import{n as a$1,t as F$1}from"./chunk-C0Fv_wXc.js";var Et=/<[^>]*>|[^<]+/g;function ft(a,t={}){let e=t.indentation??`  `,r=t.lineSeparator??`
`,o=[],i=0,n=null,c=``,d=l=>{n!==null&&(o.push(e.repeat(i)+n+c+(l??``)),l===void 0&&(i+=1),n=null,c=``)};for(let l of a.match(Et)??[]){if(!l.startsWith(`<`)){n!==null&&(c+=l.trim());continue}if(Mt(l)){if(n!==null){d(l);continue}i=Math.max(0,i-1),o.push(e.repeat(i)+l);continue}if(d(),jt(l)){o.push(e.repeat(i)+l);continue}n=l}return d(),o.join(r)}function Mt(a){return a.startsWith(`</`)}function jt(a){return a.startsWith(`<?`)||a.startsWith(`<!`)||a.endsWith(`/>`)}var mt=`
:root{--gap:2px;--msg-pad:10px 14px;--msg-bg:transparent;--radius:6px;--radius-sm:4px;--pt-radius:50%;--pt-border:0;--head-bg:var(--paper);--head-border:1px solid var(--line);--head-shadow:none;--title:var(--ink);--name-mix:85%;--oc-ink:#fff;--flavor:none}
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--font-body);font-size:15px;line-height:1.85;-webkit-font-smoothing:antialiased}
[hidden]{display:none!important}
.log{--pt:48px;max-width:860px;margin:0 auto;padding:56px 28px 72px}
.head{position:relative;margin:0 0 36px;padding:36px 28px 30px;text-align:center;background:var(--head-bg);border:var(--head-border);border-radius:var(--radius);box-shadow:var(--head-shadow)}
.head::before{content:var(--flavor);display:block;margin-bottom:12px;color:var(--accent);font-family:var(--font-mono);font-size:11px;letter-spacing:.42em}
.kicker{margin:0 0 6px;color:var(--muted);font-size:13px;letter-spacing:.14em}
.title{margin:0;color:var(--title);font-family:var(--font-head);font-size:clamp(26px,4.6vw,40px);font-weight:700;line-height:1.3;letter-spacing:.08em;overflow-wrap:anywhere}
.meta{display:flex;flex-wrap:wrap;justify-content:center;gap:4px 20px;margin:14px 0 0;color:var(--muted);font-family:var(--font-mono);font-size:12.5px;letter-spacing:.04em}
.msg,.cast li{--name:color-mix(in oklab,var(--c) var(--name-mix),var(--ink))}
.cast{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin:18px 0 0;padding:0;list-style:none}
.cast li{display:inline-flex;align-items:center;gap:7px;padding:1px 11px;border:1px solid var(--line);border-radius:999px;background:var(--chip);font-size:12.5px;line-height:1.9}
.cast li::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--c)}
.tabs{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin:20px 0 0}
.tabs button{padding:3px 13px;border:1px solid var(--line);border-radius:999px;background:transparent;color:var(--muted);font:inherit;font-size:12.5px;cursor:pointer}
.tabs button:hover{border-color:var(--accent);color:var(--ink)}
.tabs button[aria-pressed="true"]{border-color:var(--accent);background:var(--accent);color:var(--accent-ink)}
.body{display:flex;flex-direction:column;gap:var(--gap)}
.day{display:flex;align-items:center;gap:16px;margin:26px 0 10px;color:var(--muted);font-family:var(--font-mono);font-size:12px;letter-spacing:.24em}
.day::before,.day::after{content:"";flex:1;height:1px;background:var(--line)}
.msg{position:relative;display:grid;grid-template-columns:var(--pt) minmax(0,1fr);gap:0 14px;padding:var(--msg-pad);background:var(--msg-bg);border-radius:var(--radius)}
.msg.cont{padding-top:0}
.cont .pt{height:0;visibility:hidden}
.cont .hd{display:none}
.pt{display:grid;place-items:center;width:var(--pt);height:var(--pt);overflow:hidden;border:var(--pt-border);border-radius:var(--pt-radius);background:var(--chip)}
.pt img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 0}
.ini{color:var(--name);font-family:var(--font-head);font-size:calc(var(--pt) * .42);font-weight:700}
.bd{min-width:0}
.hd{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 10px;margin:0 0 2px}
.nm{color:var(--name);font-family:var(--font-head);font-weight:700;letter-spacing:.04em}
.tg{padding:0 8px;border:1px solid var(--line);border-radius:999px;color:var(--muted);font-size:11px;line-height:1.7}
.hd time{margin-left:auto;color:var(--muted);font-family:var(--font-mono);font-size:11.5px;letter-spacing:.04em}
.tx{overflow-wrap:anywhere}
.tx rt{font-size:.5em}
.ed{margin-left:8px;color:var(--muted);font-size:11px}
.ref{display:flex;gap:8px;max-width:100%;margin:4px 0 6px;padding:5px 12px;border-left:3px solid var(--accent);border-radius:0 var(--radius-sm) var(--radius-sm) 0;background:var(--quote-bg);color:var(--muted);font-size:13px;line-height:1.6}
.rn{flex:none;font-weight:700}
.rt{display:-webkit-box;min-width:0;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}
.att{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.rx{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}
.rx span{font-size:.78em;line-height:1.6;padding:0 8px;border:1px solid var(--line);border-radius:999px;opacity:.85}
.att img{display:block;max-width:min(100%,320px);max-height:260px;border:1px solid var(--line);border-radius:var(--radius-sm)}
.ooc{opacity:.7}
.ooc .tx{font-size:.92em}
.seal{color:var(--muted);letter-spacing:.2em}
.sys{margin:8px 0;padding:0 8%;color:var(--muted);font-size:12.5px;line-height:1.7;text-align:center}
.sys span{display:inline-block;padding:3px 16px;border-radius:999px;background:var(--chip)}
.roll{grid-template-columns:24px minmax(0,1fr);gap:0 10px;margin-left:calc(var(--pt) + 14px);padding:8px 14px;background:var(--roll-bg);border:var(--roll-border);border-radius:var(--radius-sm)}
.roll .pt{width:24px;height:24px;border:0;border-radius:0;background:none;color:var(--accent)}
.roll .pt svg{width:22px;height:22px}
.roll .tx{font-family:var(--font-mono);font-size:13.5px;line-height:1.7}
.res{padding:0 2px;color:var(--ink);font-size:1.3em;font-weight:700}
.crit{--oc:var(--crit)}
.fumble{--oc:var(--fumble)}
.ok{--oc:var(--ok)}
.ng{--oc:var(--ng)}
.crit .res,.fumble .res{color:var(--oc)}
.oc{padding:0 9px;border-radius:999px;background:var(--oc);color:var(--oc-ink);font-size:11px;font-weight:700;letter-spacing:.1em;line-height:1.8}
.foot{margin-top:56px;color:var(--muted);font-size:11.5px;letter-spacing:.12em;text-align:center}
@media (max-width:640px){.log{--pt:38px;padding:24px 12px 48px}.head{padding:26px 16px 22px}.msg{gap:0 10px}.roll{margin-left:0}}
@media print{
:root{color-scheme:light;--bg:#fff!important;--paper:#fff!important;--ink:#111!important;--muted:#555!important;--line:#ccc!important;--chip:#f2f2f2!important;--quote-bg:#f5f5f5!important;--roll-bg:#fff!important;--roll-border:1px solid #ccc!important;--head-bg:#fff!important;--head-shadow:none!important;--msg-bg:transparent!important;--title:#111!important}
body{background:#fff!important;text-shadow:none!important}
body::before,body::after{display:none!important}
.log{margin:0 auto!important;background:#fff!important;box-shadow:none!important}
.title{background:none!important;color:#111!important;text-shadow:none!important;filter:none!important}
.tabs{display:none}
.msg,.sys{break-inside:avoid}
}
`;var u=`"Hiragino Mincho ProN","Yu Mincho","YuMincho","Noto Serif JP","Noto Serif CJK JP",serif`;var O=`"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic UI","Noto Sans JP","Meiryo",system-ui,sans-serif`;var E=`"Hiragino Maru Gothic ProN","M PLUS Rounded 1c","Yu Gothic UI","Noto Sans JP","Meiryo",sans-serif`;var D=`"SFMono-Regular","Cascadia Mono",Consolas,Menlo,"Osaka-Mono","MS Gothic",monospace`;var be=`"Courier New",Courier,"Osaka-Mono","MS Gothic",monospace`;var _t=`
:root{--bg:#2b1d12;--paper:#f2e4c4;--ink:#3b2b1c;--muted:#80684a;--line:#cdb48a;--accent:#8a3b1f;--accent-ink:#fbf1dc;--chip:rgba(138,90,40,.1);--quote-bg:rgba(138,90,40,.08);--roll-bg:rgba(255,250,236,.55);--roll-border:1px dashed #bda274;--crit:#a87412;--fumble:#8e1c1c;--ok:#52692d;--ng:#7a6a58;--font-body:${u};--font-head:${u};--font-mono:${u};--flavor:"\u2766\\2003 CHRONICLE\\2003 \u2766";--head-bg:transparent;--head-border:0;--pt-border:2px solid #cdb48a;--name-mix:82%;--gap:4px}
body{background:radial-gradient(ellipse at 50% 30%,#5b4029 0%,#2b1d12 70%,#1a110a 100%) fixed}
.log{margin:48px auto;background-color:var(--paper);background-image:radial-gradient(circle at 18% 12%,rgba(255,255,255,.45),transparent 42%),radial-gradient(circle at 82% 88%,rgba(120,78,30,.16),transparent 46%),radial-gradient(ellipse at 50% 50%,transparent 62%,rgba(105,66,28,.28) 100%);border-radius:3px;box-shadow:0 0 0 1px #b89a6a,0 0 0 7px #efe0bd,0 0 0 8px #9c7d50,0 24px 70px rgba(0,0,0,.55)}
.head{margin-bottom:28px;border-bottom:3px double var(--line);border-radius:0}
.title{font-size:clamp(28px,5vw,44px);letter-spacing:.12em;text-shadow:0 1px 0 rgba(255,255,255,.5)}
.kicker{font-style:italic}
.day{letter-spacing:.3em}
.day span::before{content:"\u2767 "}
.pt{box-shadow:0 2px 6px rgba(80,50,20,.25)}
.nm{letter-spacing:.08em}
.tx{font-size:15.5px}
.oc{padding:1px 10px;background:radial-gradient(circle at 35% 30%,color-mix(in oklab,var(--oc) 65%,#fff),var(--oc) 60%,color-mix(in oklab,var(--oc) 70%,#000));box-shadow:0 1px 2px rgba(60,30,10,.4),inset 0 0 0 1px rgba(0,0,0,.15);text-shadow:0 1px 0 rgba(0,0,0,.25)}
.sys span{background:transparent;font-style:italic}
.foot::before{content:"\u2014 \u2726 \u2014";display:block;margin-bottom:8px;color:var(--line);letter-spacing:.3em}
@media (max-width:640px){.log{margin:0;border-radius:0;box-shadow:none}}
`;var Dt=`
:root{color-scheme:dark;--bg:#0a0b0b;--paper:#121514;--ink:#cdd2cb;--muted:#7b847a;--line:#262c29;--accent:#9a2a2a;--accent-ink:#f4eaea;--chip:rgba(255,255,255,.035);--quote-bg:rgba(255,255,255,.03);--roll-bg:rgba(8,10,9,.7);--roll-border:1px solid #262c29;--crit:#a9cfa6;--fumble:#d0303a;--ok:#7f9c80;--ng:#666c66;--font-body:${u};--font-head:${u};--font-mono:${be};--flavor:"\u2014 CASE FILE \u2014";--head-bg:linear-gradient(180deg,#151918,#0e1110);--head-shadow:inset 0 0 80px rgba(0,0,0,.7);--radius:2px;--radius-sm:2px;--pt-radius:2px;--pt-border:1px solid #2e3531;--name-mix:50%;--msg-pad:12px 14px}
body{background:radial-gradient(ellipse at 50% -10%,#1d2220 0%,#0a0b0b 55%,#040404 100%) fixed}
body::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,.7) 100%)}
.head::after{content:"";position:absolute;right:28px;bottom:0;left:28px;height:1px;background:linear-gradient(90deg,transparent,var(--accent),transparent)}
.title{font-weight:600;letter-spacing:.2em;text-shadow:0 0 22px rgba(154,42,42,.55),0 0 2px rgba(0,0,0,.9)}
.pt img{filter:grayscale(.6) sepia(.15) contrast(1.1) brightness(.85);transition:filter .4s}
.msg:hover .pt img{filter:none}
.msg{border-left:1px solid transparent;transition:background .3s,border-color .3s}
.msg:hover{border-left-color:var(--accent);background:rgba(255,255,255,.02)}
.nm{letter-spacing:.12em}
.roll{border-left:2px solid var(--accent)}
.roll .pt{color:var(--muted)}
.oc{border:1px solid var(--oc);border-radius:0;background:transparent;color:var(--oc);font-family:var(--font-mono);letter-spacing:.24em}
.crit .res{text-shadow:0 0 12px rgba(169,207,166,.6)}
.fumble .res{text-shadow:0 0 10px rgba(208,48,58,.8),0 0 2px #000}
.day{color:#5c645b}
.sys span{border:1px dashed var(--line);border-radius:0;background:transparent;font-family:var(--font-mono);letter-spacing:.08em}
::selection{background:#9a2a2a;color:#fff}
`;var Rt=`
:root{color-scheme:dark;--bg:#05070f;--paper:rgba(9,16,34,.78);--ink:#dce8ff;--muted:#7d90b5;--line:rgba(64,196,255,.24);--accent:#2bd4ff;--accent-ink:#03121a;--chip:rgba(43,212,255,.08);--quote-bg:rgba(43,212,255,.06);--roll-bg:rgba(6,12,28,.88);--roll-border:1px solid rgba(43,212,255,.38);--crit:#2effc8;--fumble:#ff2f8e;--ok:#2bd4ff;--ng:#66779a;--font-body:${O};--font-head:${O};--font-mono:${D};--flavor:"// SESSION_LOG";--head-border:1px solid rgba(43,212,255,.35);--head-shadow:inset 0 0 40px rgba(43,212,255,.08);--radius:0;--radius-sm:0;--pt-radius:0;--pt-border:1px solid rgba(43,212,255,.55);--name-mix:42%;--oc-ink:#03121a;--gap:6px;--msg-bg:linear-gradient(90deg,rgba(43,212,255,.06),transparent 55%)}
body{background:radial-gradient(ellipse at 15% -10%,rgba(255,47,142,.22),transparent 50%),radial-gradient(ellipse at 90% 110%,rgba(43,212,255,.2),transparent 55%),linear-gradient(rgba(43,212,255,.045) 1px,transparent 1px) 0 0/100% 28px,linear-gradient(90deg,rgba(43,212,255,.045) 1px,transparent 1px) 0 0/28px 100%,#05070f;background-attachment:fixed}
.head::after{content:"";position:absolute;inset:-1px;pointer-events:none;background:linear-gradient(var(--accent),var(--accent)) 0 0/20px 2px no-repeat,linear-gradient(var(--accent),var(--accent)) 0 0/2px 20px no-repeat,linear-gradient(var(--accent),var(--accent)) 100% 100%/20px 2px no-repeat,linear-gradient(var(--accent),var(--accent)) 100% 100%/2px 20px no-repeat}
.title{font-weight:800;letter-spacing:.14em;text-shadow:0 0 14px rgba(43,212,255,.65),2px 0 rgba(255,47,142,.55),-2px 0 rgba(43,212,255,.55)}
.kicker{color:var(--accent);font-family:var(--font-mono)}
.msg{border-left:2px solid color-mix(in oklab,var(--c) 45%,var(--accent))}
.nm{text-shadow:0 0 10px color-mix(in oklab,var(--c) 35%,var(--accent))}
.hd time::before{content:"["}
.hd time::after{content:"]"}
.pt{box-shadow:0 0 14px rgba(43,212,255,.28)}
.roll{border-left:2px solid var(--accent);box-shadow:inset 0 0 24px rgba(43,212,255,.08),0 0 18px rgba(43,212,255,.08)}
.res{text-shadow:0 0 12px currentColor}
.oc{border-radius:0;font-family:var(--font-mono);box-shadow:0 0 12px var(--oc)}
.day{color:var(--accent)}
.day::before{background:linear-gradient(90deg,transparent,var(--line))}
.day::after{background:linear-gradient(90deg,var(--line),transparent)}
.cast li,.tabs button,.tg,.ref{border-radius:0}
.cast li::before{border-radius:0;box-shadow:0 0 6px var(--c)}
.sys span{border:1px solid var(--line);border-radius:0;background:rgba(43,212,255,.06);font-family:var(--font-mono)}
::selection{background:#ff2f8e;color:#fff}
`;var Pt=`
:root{--bg:#e8e0cf;--paper:#fbf8f0;--ink:#2a2521;--muted:#7d7166;--line:#dcd1bd;--accent:#b52b2e;--accent-ink:#fff8f0;--chip:rgba(42,37,33,.05);--quote-bg:rgba(181,43,46,.05);--roll-bg:#fffdf8;--roll-border:1px solid #dcd1bd;--crit:#b52b2e;--fumble:#2a2521;--ok:#35557a;--ng:#8b8074;--font-body:${u};--font-head:${u};--font-mono:${u};--head-bg:transparent;--head-border:0;--radius:0;--radius-sm:0;--pt-radius:3px;--pt-border:1px solid #cfc3ad;--msg-pad:14px 16px;--gap:0}
body{background-color:#e8e0cf;background-image:repeating-linear-gradient(118deg,rgba(110,90,60,.035) 0 1px,transparent 1px 7px),repeating-linear-gradient(28deg,rgba(110,90,60,.03) 0 1px,transparent 1px 11px)}
.log{margin:48px auto;background:var(--paper);border-top:5px solid var(--accent);box-shadow:0 1px 0 #d6cbb6,0 22px 50px rgba(80,60,30,.14)}
.head{border-bottom:1px solid var(--line);border-radius:0}
.head::before{content:"\u8A18\u9332";display:inline-block;margin-bottom:16px;padding:8px 5px;border:2px solid var(--accent);border-radius:4px;color:var(--accent);font-family:var(--font-head);font-size:14px;font-weight:700;letter-spacing:.25em;writing-mode:vertical-rl;transform:rotate(-5deg);opacity:.9}
.title{font-weight:600;letter-spacing:.24em}
.msg{border-top:1px solid rgba(220,209,189,.7)}
.msg.cont,.day+.msg{border-top:0}
.nm{letter-spacing:.14em}
.ini{font-weight:600}
.roll{margin-top:4px;margin-bottom:8px;border-left:3px solid var(--accent)}
.oc{padding:0 7px;border:2px solid var(--oc);border-radius:4px;background:transparent;color:var(--oc);font-family:var(--font-head);letter-spacing:.14em;transform:rotate(-4deg)}
.day span::before{content:"\u301C "}
.day span::after{content:" \u301C"}
.sys span{border-top:1px solid var(--line);border-bottom:1px solid var(--line);border-radius:0;background:transparent;letter-spacing:.1em}
.foot::before{content:"";display:block;width:34px;height:34px;margin:0 auto 10px;border:2px solid var(--accent);border-radius:50%;opacity:.7}
@media (max-width:640px){.log{margin:0;box-shadow:none}}
`;var Nt=`
:root{--bg:#dfe5ec;--paper:#ffffff;--ink:#1e2733;--muted:#6a7686;--line:#d3dae3;--accent:#2f6fed;--accent-ink:#fff;--chip:#eef2f7;--quote-bg:rgba(255,255,255,.6);--roll-bg:#fff;--roll-border:0;--crit:#d98b00;--fumble:#e0245e;--ok:#12a36e;--ng:#8a95a5;--font-body:${O};--font-head:${O};--font-mono:${O};--head-bg:rgba(255,255,255,.9);--head-border:0;--head-shadow:0 10px 30px rgba(30,39,51,.08);--radius:20px;--radius-sm:14px;--name-mix:78%;--gap:6px;--msg-pad:0}
body{background:linear-gradient(180deg,#e8edf3 0%,#d9e0e9 100%) fixed}
.log{max-width:760px}
.head{border-radius:22px}
.title{font-size:clamp(22px,4vw,30px);letter-spacing:.04em}
.hd{margin:0 0 3px 4px;font-size:12px}
.nm{font-size:12.5px;letter-spacing:.02em}
.hd time{margin-left:0}
.tx{display:inline-block;max-width:100%;padding:9px 15px;border-radius:4px 18px 18px 18px;background:color-mix(in oklab,var(--c) 6%,#fff);box-shadow:0 1px 2px rgba(30,39,51,.1);line-height:1.7}
.cont .tx{border-radius:18px}
.ref{margin:0 0 4px;padding:6px 12px;border-left:0;border-radius:12px}
.att img{border:0;border-radius:14px;box-shadow:0 1px 3px rgba(30,39,51,.15)}
.roll{width:fit-content;max-width:calc(100% - var(--pt) - 14px);padding:9px 15px;border-radius:16px;box-shadow:0 1px 2px rgba(30,39,51,.1)}
.roll .tx{display:block;padding:0;border-radius:0;background:none;box-shadow:none}
.day{justify-content:center;font-family:var(--font-body);letter-spacing:.08em}
.day::before,.day::after{display:none}
.day span{padding:2px 14px;border-radius:999px;background:rgba(30,39,51,.28);color:#fff;font-size:11.5px}
.sys span{background:rgba(30,39,51,.08);font-size:12px}
.oc{letter-spacing:.04em}
@media (max-width:640px){.roll{max-width:100%}}
`;var gt={parchment:_t,washi:Pt,gothic:`
:root{color-scheme:dark;--bg:#120a0e;--paper:#1c1016;--ink:#eadbd9;--muted:#a08790;--line:#4a2530;--accent:#b8923e;--accent-ink:#1a0d10;--chip:rgba(184,146,62,.08);--quote-bg:rgba(120,20,40,.2);--roll-bg:rgba(30,12,18,.85);--roll-border:1px solid #5a2a36;--crit:#d4af37;--fumble:#c41e3a;--ok:#a3b18a;--ng:#7d6970;--font-body:${u};--font-head:${u};--font-mono:${u};--flavor:"\u2726 NOCTURNE \u2726";--head-bg:linear-gradient(180deg,#24121a,#160b10);--head-border:1px solid #5a2a36;--head-shadow:inset 0 0 0 1px rgba(184,146,62,.3),0 0 0 4px #120a0e,0 0 0 5px rgba(184,146,62,.4);--radius:2px;--radius-sm:2px;--pt-border:2px solid rgba(184,146,62,.6);--name-mix:55%;--oc-ink:#1a0d10;--title:#ecd9a8}
body{background:radial-gradient(ellipse at 50% 0%,#3a1320 0%,#120a0e 55%,#07040a 100%) fixed}
.head::after{content:"\u2766";display:block;margin-top:14px;color:var(--accent);font-size:18px}
.title{font-weight:600;letter-spacing:.16em;text-shadow:0 0 18px rgba(196,30,58,.45)}
.kicker{color:var(--accent);letter-spacing:.3em}
.pt{box-shadow:0 0 0 3px #120a0e,0 0 0 4px rgba(184,146,62,.3)}
.nm{letter-spacing:.1em}
.msg:not(.roll):hover{background:rgba(196,30,58,.05)}
.roll{border-left:2px solid var(--accent)}
.oc{border-radius:2px;background:linear-gradient(180deg,color-mix(in oklab,var(--oc) 75%,#fff),var(--oc));letter-spacing:.16em}
.fumble .res{text-shadow:0 0 10px rgba(196,30,58,.7)}
.day{color:var(--accent)}
.day span::before{content:"\u2726 "}
.day span::after{content:" \u2726"}
.day::before{background:linear-gradient(90deg,transparent,rgba(184,146,62,.5))}
.day::after{background:linear-gradient(90deg,rgba(184,146,62,.5),transparent)}
.sys span{background:transparent;color:var(--accent);letter-spacing:.12em}
.foot::before{content:"\u2020";display:block;margin-bottom:6px;color:var(--accent);font-size:16px}
::selection{background:#c41e3a;color:#fff}
`,eerie:Dt,noir:`
:root{color-scheme:dark;--bg:#141414;--paper:#1f1e1b;--ink:#e6e1d6;--muted:#8f887b;--line:#3a3732;--accent:#d9a441;--accent-ink:#1a1408;--chip:rgba(230,225,214,.05);--quote-bg:rgba(217,164,65,.07);--roll-bg:#191816;--roll-border:1px solid #3a3732;--crit:#e8c170;--fumble:#c9463d;--ok:#b9b09c;--ng:#6f695e;--font-body:${u};--font-head:${u};--font-mono:${be};--flavor:"CONFIDENTIAL";--head-border:1px solid #3a3732;--head-shadow:0 20px 50px rgba(0,0,0,.5);--radius:0;--radius-sm:0;--pt-radius:0;--pt-border:1px solid #4a463f;--name-mix:40%;--oc-ink:#1a1408}
body{background:radial-gradient(ellipse at 30% 0%,#2a2824 0%,#141414 60%,#0b0b0b 100%) fixed}
body::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;background:repeating-linear-gradient(170deg,rgba(255,236,190,.035) 0 34px,transparent 34px 72px)}
.head::before{display:inline-block;margin-bottom:18px;padding:2px 12px;border:2px solid var(--accent);font-weight:700;letter-spacing:.3em;transform:rotate(-3deg)}
.title{letter-spacing:.1em}
.pt img{filter:grayscale(1) contrast(1.15);transition:filter .4s}
.msg:hover .pt img{filter:grayscale(.2)}
.nm{letter-spacing:.08em}
.roll{border-left:3px solid var(--accent)}
.oc{border-radius:0;font-family:var(--font-mono);letter-spacing:.18em}
.day span::before{content:"\u2014 "}
.day span::after{content:" \u2014"}
.sys span{border:1px solid var(--line);border-radius:0;background:transparent;font-family:var(--font-mono);letter-spacing:.06em}
.cast li,.tabs button,.tg,.ref{border-radius:0}
::selection{background:#d9a441;color:#141414}
`,neon:Rt,terminal:`
:root{color-scheme:dark;--bg:#030a04;--paper:#051006;--ink:#8dff98;--muted:#44a152;--line:rgba(80,255,120,.22);--accent:#7dff8a;--accent-ink:#021003;--chip:rgba(80,255,120,.06);--quote-bg:rgba(80,255,120,.05);--roll-bg:rgba(3,14,5,.9);--roll-border:1px dashed rgba(80,255,120,.35);--crit:#e6ff7a;--fumble:#ff6a5c;--ok:#7dff8a;--ng:#44a152;--font-body:${D};--font-head:${D};--font-mono:${D};--flavor:"> SESSION LOG";--head-bg:transparent;--head-border:1px solid rgba(80,255,120,.35);--radius:0;--radius-sm:0;--pt-radius:0;--pt-border:1px solid rgba(80,255,120,.45);--name-mix:25%;--oc-ink:#021003;--gap:0;--msg-pad:6px 12px}
body{background:radial-gradient(ellipse at center,#062b0c 0%,#030a04 70%) fixed;font-size:14px;text-shadow:0 0 4px rgba(125,255,138,.45)}
body::after{content:"";position:fixed;inset:0;z-index:1;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 1px,transparent 1px 3px)}
.log{--pt:34px}
.head{text-align:left}
.title::after{content:"_";animation:blink 1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
@media (prefers-reduced-motion:reduce){.title::after{animation:none}}
.meta,.cast,.tabs{justify-content:flex-start}
.pt{background:transparent}
.pt img{filter:grayscale(1) sepia(1) hue-rotate(70deg) saturate(2.5) brightness(.9)}
.ini{color:var(--accent)}
.nm::before{content:"<"}
.nm::after{content:">"}
.hd time::before{content:"["}
.hd time::after{content:"]"}
.cast li,.tabs button,.tg,.sys span,.ref,.oc{border-radius:0}
.cast li::before{border-radius:0}
.oc{letter-spacing:.1em;text-shadow:none}
.sys span{border:1px dashed var(--line);background:transparent}
.att img{filter:grayscale(1) sepia(1) hue-rotate(70deg) saturate(2)}
::selection{background:#7dff8a;color:#021003;text-shadow:none}
`,cosmos:`
:root{color-scheme:dark;--bg:#070818;--paper:rgba(16,18,48,.72);--ink:#e6e8ff;--muted:#8d92c4;--line:rgba(160,170,255,.2);--accent:#f5c96a;--accent-ink:#17120a;--chip:rgba(160,170,255,.08);--quote-bg:rgba(160,170,255,.07);--roll-bg:rgba(12,14,40,.8);--roll-border:1px solid rgba(245,201,106,.35);--crit:#ffd978;--fumble:#ff6b8b;--ok:#8fd3ff;--ng:#7a7fae;--font-body:${O};--font-head:${u};--font-mono:${O};--flavor:"\u2727 STARLOG \u2727";--head-border:1px solid rgba(160,170,255,.25);--head-shadow:0 0 60px rgba(120,100,255,.18);--radius:14px;--radius-sm:10px;--pt-border:2px solid rgba(245,201,106,.55);--name-mix:45%;--oc-ink:#17120a;--title:#fff4d6;--msg-bg:linear-gradient(90deg,rgba(160,170,255,.05),transparent 70%)}
body{background:radial-gradient(1px 1px at 23px 41px,#fff,transparent) 0 0/173px 173px,radial-gradient(1px 1px at 97px 131px,#dfe4ff,transparent) 0 0/211px 211px,radial-gradient(1.5px 1.5px at 151px 67px,#fff6d6,transparent) 0 0/263px 263px,radial-gradient(1px 1px at 61px 199px,#fff,transparent) 0 0/307px 307px,radial-gradient(ellipse at 15% 5%,rgba(140,80,255,.28),transparent 50%),radial-gradient(ellipse at 85% 95%,rgba(40,150,255,.22),transparent 55%),#070818;background-attachment:fixed}
.head{backdrop-filter:blur(4px)}
.title{font-weight:600;letter-spacing:.12em;text-shadow:0 0 24px rgba(245,201,106,.45)}
.pt{box-shadow:0 0 16px rgba(245,201,106,.25)}
.roll{box-shadow:0 0 20px rgba(245,201,106,.08)}
.crit .res{text-shadow:0 0 14px rgba(255,217,120,.8)}
.oc{box-shadow:0 0 10px var(--oc)}
.day{color:var(--accent)}
.day span::before{content:"\u2726 "}
.day span::after{content:" \u2726"}
.day::before{background:linear-gradient(90deg,transparent,var(--line))}
.day::after{background:linear-gradient(90deg,var(--line),transparent)}
.foot::before{content:"\u2727 \u2726 \u2727";display:block;margin-bottom:8px;color:var(--accent);letter-spacing:.4em}
::selection{background:#f5c96a;color:#17120a}
`,military:`
:root{color-scheme:dark;--bg:#1e2218;--paper:#262b1f;--ink:#dfe3cf;--muted:#98a07f;--line:#434a36;--accent:#d9c45a;--accent-ink:#1e2218;--chip:rgba(223,227,207,.05);--quote-bg:rgba(217,196,90,.06);--roll-bg:#20241a;--roll-border:1px solid #545c42;--crit:#d9e36a;--fumble:#e0603a;--ok:#9fbf6a;--ng:#7a8068;--font-body:${O};--font-head:${O};--font-mono:${D};--flavor:"// OPERATION LOG // CLASSIFIED";--head-border:1px solid #545c42;--radius:0;--radius-sm:0;--pt-radius:0;--pt-border:1px solid #6b7452;--name-mix:50%;--oc-ink:#1e2218}
body{background:repeating-linear-gradient(45deg,rgba(0,0,0,.08) 0 2px,transparent 2px 6px),radial-gradient(ellipse at center,#2a3021 0%,#161a12 100%);background-attachment:fixed}
.head{padding-top:42px}
.head::after{content:"";position:absolute;top:0;right:0;left:0;height:6px;background:repeating-linear-gradient(-45deg,#d9c45a 0 10px,#1e2218 10px 20px)}
.head::before{letter-spacing:.3em}
.title{font-weight:800;letter-spacing:.18em}
.meta{text-transform:uppercase}
.pt img{filter:saturate(.6) contrast(1.05)}
.msg{border-left:3px solid color-mix(in oklab,var(--c) 50%,#6b7452)}
.nm{letter-spacing:.06em}
.roll{border-left:3px solid var(--accent)}
.oc{border-radius:0;font-family:var(--font-mono);letter-spacing:.18em}
.day{color:var(--accent)}
.day::before,.day::after{background:repeating-linear-gradient(90deg,var(--line) 0 8px,transparent 8px 12px)}
.cast li,.tabs button,.tg,.sys span,.ref{border-radius:0}
.cast li::before{border-radius:0}
.sys span{border:1px solid var(--line);background:transparent;font-family:var(--font-mono);letter-spacing:.08em}
::selection{background:#d9c45a;color:#1e2218}
`,steampunk:`
:root{color-scheme:dark;--bg:#1b130c;--paper:#2a1d12;--ink:#efdcbc;--muted:#b0916a;--line:#6b4a2b;--accent:#d49a3a;--accent-ink:#1b130c;--chip:rgba(212,154,58,.1);--quote-bg:rgba(212,154,58,.08);--roll-bg:linear-gradient(180deg,#332416,#261a10);--roll-border:1px solid #8a6232;--crit:#f0c05a;--fumble:#c0492e;--ok:#8fae6a;--ng:#8a7358;--font-body:${u};--font-head:${u};--font-mono:${be};--flavor:"\u2699 ENGINE LOG \u2699";--head-bg:linear-gradient(180deg,#3a2816,#241a0f);--head-border:2px solid #8a6232;--head-shadow:inset 0 0 0 4px #241a0f,inset 0 0 0 5px rgba(212,154,58,.45),0 12px 30px rgba(0,0,0,.5);--pt-border:3px solid #b07f38;--name-mix:55%;--oc-ink:#1b130c}
body{background:radial-gradient(ellipse at 50% 0%,#3d2a17 0%,#1b130c 60%,#0f0a06 100%) fixed}
.title{background:linear-gradient(180deg,#fbe3a3,#c8903a 55%,#8a5a22);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:.14em;filter:drop-shadow(0 2px 0 rgba(0,0,0,.6))}
.pt{box-shadow:0 0 0 2px #2a1d12,0 0 0 4px #6b4a2b,0 3px 8px rgba(0,0,0,.5)}
.nm{letter-spacing:.08em}
.roll{box-shadow:inset 0 1px 0 rgba(255,220,160,.1)}
.oc{border-radius:3px;background:linear-gradient(180deg,color-mix(in oklab,var(--oc) 70%,#fff),var(--oc) 60%,color-mix(in oklab,var(--oc) 70%,#000));box-shadow:0 1px 0 rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.3)}
.day{color:var(--accent)}
.day span::before{content:"\u2699 "}
.day span::after{content:" \u2699"}
.day::before,.day::after{height:2px;background:linear-gradient(90deg,#6b4a2b,#b07f38,#6b4a2b)}
.sys span{border:1px solid #6b4a2b;border-radius:3px;background:transparent;font-family:var(--font-mono)}
::selection{background:#d49a3a;color:#1b130c}
`,ocean:`
:root{--bg:#0f2a3d;--paper:#f4ead3;--ink:#23303a;--muted:#6d7a80;--line:#cdbd98;--accent:#1d5f86;--accent-ink:#fff;--chip:rgba(29,95,134,.08);--quote-bg:rgba(29,95,134,.07);--roll-bg:rgba(255,252,242,.7);--roll-border:1px solid #cdbd98;--crit:#c8932a;--fumble:#a8322d;--ok:#2d7a5f;--ng:#7d8790;--font-body:${u};--font-head:${u};--font-mono:${u};--flavor:"\u2248 SHIP'S LOG \u2248";--head-bg:transparent;--head-border:0;--radius:4px;--radius-sm:3px;--pt-border:2px solid #1d5f86;--name-mix:82%;--gap:4px}
body{background:radial-gradient(circle at 50% 100%,transparent 14px,rgba(255,255,255,.05) 15px 16px,transparent 17px) 0 0/40px 20px,linear-gradient(180deg,#123a55 0%,#0b2233 100%);background-attachment:fixed}
.log{margin:48px auto;background-color:var(--paper);background-image:linear-gradient(rgba(29,95,134,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(29,95,134,.07) 1px,transparent 1px),radial-gradient(ellipse at 50% 50%,transparent 60%,rgba(120,90,40,.2) 100%);background-size:48px 48px,48px 48px,100% 100%;border-radius:4px;box-shadow:0 0 0 6px #f4ead3,0 0 0 8px #1d5f86,0 24px 60px rgba(0,0,0,.5)}
.head{border-bottom:2px solid var(--accent);border-radius:0}
.title{letter-spacing:.12em}
.pt{box-shadow:0 0 0 3px #f4ead3,0 0 0 4px rgba(29,95,134,.4)}
.roll{border-left:3px solid var(--accent)}
.day{color:var(--accent)}
.day span::before{content:"\u2248 "}
.day span::after{content:" \u2248"}
.sys span{border:1px dashed var(--line);background:transparent}
.foot::before{content:"\u2248\u2248\u2248";display:block;margin-bottom:6px;color:var(--accent);letter-spacing:.2em}
@media (max-width:640px){.log{margin:0;border-radius:0;box-shadow:none}}
`,messenger:Nt,notebook:`
:root{--bg:#d8d0bf;--paper:#fdfcf7;--ink:#243a73;--muted:#7a869f;--line:#c7d3ea;--accent:#e0524f;--accent-ink:#fff;--chip:rgba(36,58,115,.06);--quote-bg:rgba(255,236,120,.35);--roll-bg:rgba(255,255,255,.75);--roll-border:1.5px dashed #9fb0d6;--crit:#e0524f;--fumble:#4a4a4a;--ok:#2f8f5b;--ng:#8a8a8a;--font-body:${E};--font-head:${E};--font-mono:${E};--head-bg:transparent;--head-border:0;--radius:0;--radius-sm:4px;--pt-border:2px solid #c7d3ea;--name-mix:75%;--gap:0;--msg-pad:6px 14px}
body{background:linear-gradient(135deg,#e7e1d3,#d2c9b6) fixed}
.log{position:relative;margin:40px auto;padding-left:84px;background-color:var(--paper);background-image:linear-gradient(90deg,transparent 62px,rgba(224,82,79,.55) 62px,rgba(224,82,79,.55) 64px,transparent 64px),repeating-linear-gradient(transparent 0 31px,#c7d3ea 31px 32px);box-shadow:0 1px 2px rgba(0,0,0,.08),0 12px 30px rgba(60,50,30,.15)}
.log::before{content:"";position:absolute;top:24px;bottom:24px;left:20px;width:18px;background:radial-gradient(circle,#d8d0bf 7px,transparent 8px) 0 0/18px 64px repeat-y}
.head{text-align:left;border-bottom:2px solid var(--ink);border-radius:0}
.meta,.cast,.tabs{justify-content:flex-start}
.title{letter-spacing:.04em}
.ref{border-left-color:#f2c200}
.oc{border:2px solid var(--oc);background:transparent;color:var(--oc);transform:rotate(-6deg)}
.day{color:var(--accent)}
.day::before,.day::after{background:repeating-linear-gradient(90deg,var(--accent) 0 6px,transparent 6px 10px)}
.sys span{border-radius:0;background:#fff6b3;box-shadow:0 1px 2px rgba(0,0,0,.12);transform:rotate(-1deg)}
.cast li{background:#fff}
::selection{background:#fff176;color:#243a73}
@media (max-width:640px){.log{margin:0;padding-left:36px;background-image:linear-gradient(90deg,transparent 22px,rgba(224,82,79,.55) 22px,rgba(224,82,79,.55) 24px,transparent 24px),repeating-linear-gradient(transparent 0 31px,#c7d3ea 31px 32px);box-shadow:none}.log::before{display:none}}
`,pop:`
:root{--bg:#fff4f8;--paper:#ffffff;--ink:#3d2c4a;--muted:#9a85a8;--line:#f3cfe0;--accent:#ff5fa2;--accent-ink:#fff;--chip:#fff0f6;--quote-bg:#fffafc;--roll-bg:#ffffff;--roll-border:3px solid #3d2c4a;--crit:#ffd23f;--fumble:#b9a6ff;--ok:#7ee8c0;--ng:#e5dcea;--font-body:${E};--font-head:${E};--font-mono:${E};--flavor:"\u2605 PLAY LOG \u2605";--head-bg:#fff;--head-border:3px solid #3d2c4a;--head-shadow:6px 6px 0 #3d2c4a;--radius:18px;--radius-sm:14px;--pt-border:3px solid #3d2c4a;--name-mix:85%;--oc-ink:#3d2c4a;--gap:10px;--msg-pad:0}
body{background-color:#fff4f8;background-image:radial-gradient(#ffc6de 2px,transparent 2.5px),radial-gradient(#c9f0ff 2px,transparent 2.5px);background-size:28px 28px;background-position:0 0,14px 14px}
.head::before{color:#3d2c4a}
.title{color:var(--accent);font-weight:800;letter-spacing:.04em;text-shadow:3px 3px 0 #3d2c4a}
.hd{margin:0 0 4px 4px}
.nm{font-weight:800}
.hd time{margin-left:0}
.tx{display:inline-block;max-width:100%;padding:8px 16px;border:3px solid #3d2c4a;border-radius:18px;background:#fff;box-shadow:4px 4px 0 color-mix(in oklab,var(--c) 70%,#3d2c4a)}
.roll{width:fit-content;max-width:calc(100% - var(--pt) - 14px);padding:8px 16px;box-shadow:4px 4px 0 #3d2c4a}
.roll .tx{display:block;padding:0;border:0;border-radius:0;background:none;box-shadow:none}
.crit .res,.fumble .res{color:#3d2c4a;background:linear-gradient(transparent 55%,var(--oc) 55%)}
.oc{border:2px solid #3d2c4a;box-shadow:2px 2px 0 #3d2c4a}
.ref{border:2px dashed #f3a6c8;border-radius:12px}
.att img{border:3px solid #3d2c4a;border-radius:14px}
.day{justify-content:center;letter-spacing:.1em}
.day::before,.day::after{display:none}
.day span{padding:2px 14px;border-radius:999px;background:#3d2c4a;color:#fff}
.sys span{border:2px dashed #f3a6c8;background:#fff}
.cast li,.tabs button{border:2px solid #3d2c4a;background:#fff;color:#3d2c4a;font-weight:700}
::selection{background:#ff5fa2;color:#fff}
@media (max-width:640px){.roll{max-width:100%}}
`};var xe={secret:`シークレットダイス`,edited:`編集済`,pseudoDeleted:`削除済`,quote:`引用`,reply:`返信先`,critical:`クリティカル`,fumble:`ファンブル`,success:`成功`,failure:`失敗`,allTabs:`全タブ`,everyTab:`すべて`,messages:a=>`${a} \u4EF6\u306E\u767A\u8A00`,exportedWith:`Udonarium Axe`,reactions:`リアクション`};var Yt=3e5;var Kt=32;var Jt=`#666666`;var Vt=/^(#[0-9a-f]{3,8}|[a-z]{3,20}|rgba?\([\d\s.,%]+\)|hsla?\([\d\s.,%deg]+\))$/i;var Qt=/^<(?:Secret-)?BCDice[：:](.*)>$/s;var Zt={critical:`crit`,fumble:`fumble`,success:`ok`,failure:`ng`};var ea=`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/></svg>`;var ta=`<script>(function(){var n=document.querySelector(".tabs");if(!n)return;n.addEventListener("click",function(e){var b=e.target.closest("button[data-tab]");if(!b)return;var t=b.getAttribute("data-tab");n.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});document.querySelectorAll("[data-t]").forEach(function(el){el.hidden=t!=="*"&&el.getAttribute("data-t")!==t;});});})();<\/script>`;var g=u$2.escapeHtml;var R=u$2.escapeAttribute;function ut(a,t,e,r={}){let o=E$1(E$1({},xe),r.labels),i=t===`all`?u$2.spokenTabs(e):e.slice(0,1),n=t===`all`?u$2.mergeEntries(i,r.userId):aa(i[0],r),c=t===`all`&&i.length>1,d={options:r,labels:o,showTab:c},l=t===`all`?o.allTabs:i[0]?.name??``,f=r.roomName?`${l} \u2014 ${r.roomName}`:l,m=`<footer class="foot">${g(o.exportedWith)}`+(r.exportedAt!=null?` \xB7 ${ue(r.exportedAt)}`:``)+`</footer>`;return`<!DOCTYPE html>
<html lang="${R(r.lang||`ja`)}" data-style="${a}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="generator" content="Udonarium Axe">
<title>${g(f)}</title>
<style>${mt}${gt[a]}</style>
</head>
<body>
<div class="log">
`+ra(l,n,i,c,d)+`
<main class="body">
`+na(n,d)+`</main>
`+m+`
</div>
`+(c?ta+`
`:``)+`</body>
</html>`}function aa(a,t){return a?a.chatMessages.filter(e=>u$2.isVisibleMessage(e,t.userId)).map(e=>({tab:a,tabIndex:0,message:e})):[]}function P(a){return a.isDicebot?`roll`:a.isSystemMessage?`system`:`say`}function ra(a,t,e,r,o){let{labels:i,options:n}=o,c=n.roomName?`<p class="kicker">${g(n.roomName)}</p>`:``,d=t.filter(k=>P(k.message)!==`system`),l=[],f=ua(t);f&&l.push(`<span>${f}</span>`),l.push(`<span>${g(i.messages(d.length))}</span>`);let m=oa(d,o),y=m.length?`<ul class="cast">${m.map(k=>`<li style="--c:${k.color}">${g(k.name)}</li>`).join(``)}</ul>`:``,S=r?`<nav class="tabs"><button type="button" data-tab="*" aria-pressed="true">${g(i.everyTab)}</button>`+e.map((k,F)=>`<button type="button" data-tab="${F}" aria-pressed="false">${g(k.name)}</button>`).join(``)+`</nav>`:``;return`<header class="head">`+c+`<h1 class="title">${g(a)}</h1><p class="meta">${l.join(``)}</p>`+y+S+`</header>`}function oa(a,t){let e=new Map;for(let{message:r}of a){if(P(r)!==`say`)continue;let o=C(r.name,t).trim();if(!(!o||e.has(o))&&(e.set(o,he(r.messColor)),e.size>=Kt))break}return[...e].map(([r,o])=>({name:r,color:o}))}function na(a,t){let e=[],r=``,o=null;for(let i of a){let n=$(i.message.placedAt);n!==r&&(r=n,e.push(`<div class="day"><span>${n}</span></div>
`),o=null),e.push(sa(i,ia(o,i),t)),o=i}return e.join(``)}function ia(a,t){if(!a)return!1;let e=a.message,r=t.message;return P(e)===`say`&&P(r)===`say`&&a.tabIndex===t.tabIndex&&e.name===r.name&&e.messColor===r.messColor&&e.image?.identifier===r.image?.identifier&&!e.isSecret&&!r.isSecret&&!!e.isOutOfStory==!!r.isOutOfStory&&r.placedAt-e.placedAt<Yt}function sa(a,t,e){switch(P(a.message)){case`roll`:return da(a,e);case`system`:return la(a,e);default:return ca(a,t,e)}}function ca(a,t,e){let{message:r}=a,{labels:o}=e,i=C(r.name,e),n=!r.isSecret||u$2.canSee(r,e.options.userId),c=[`msg`];t&&c.push(`cont`),r.isOutOfStory&&c.push(`ooc`),n||c.push(`sealed`);let d=n?yt(O$1(r.vnEmote,C(r.text,e)))+ma(r,e):`<span class="seal">${g(o.secret)}</span>`,l=(r.fixd?`<span class="ed">${g(o.edited)}</span>`:``)+(r.isPseudoDeleted?`<span class="ed">${g(o.pseudoDeleted)}</span>`:``);return`<article class="${c.join(` `)}" data-t="${a.tabIndex}" style="--c:${he(r.messColor)}"><div class="pt">${pa(r,i,e)}</div><div class="bd"><div class="hd"><span class="nm">${g(i)}</span>${xt(a,e)}${ht(r)}</div>`+fa(r,e)+`<div class="tx">${d}${l}</div>`+(n?vt(r,e):``)+`</div></article>
`}function da(a,t){let{message:e}=a,{labels:r}=t,o=!e.isSecret||u$2.canSee(e,t.options.userId),i=o?e.rollDetail?.outcome??``:``,n=[`msg`,`roll`];i&&n.push(Zt[i]),e.isOutOfStory&&n.push(`ooc`),o||n.push(`sealed`);let c=ba(C(e.name,t)),d=i?`<span class="oc">${g(r[i])}</span>`:``,l=o?ga(C(e.text,t)):`<span class="seal">${g(r.secret)}</span>`;return`<article class="${n.join(` `)}" data-t="${a.tabIndex}" style="--c:${he(e.messColor)}"><div class="pt">${ea}</div><div class="bd"><div class="hd"><span class="nm">${g(c)}</span>${d}${xt(a,t)}${ht(e)}</div><div class="tx">${l}</div>`+(o?vt(e,t):``)+`</div></article>
`}function la(a,t){return`<div class="sys" data-t="${a.tabIndex}"><span>${yt(C(a.message.text,t))}</span></div>
`}function xt(a,t){return t.showTab?`<span class="tg">${g(a.tab.name)}</span>`:``}function ht(a){return`<time>${M(a.timestamp)}</time>`}function pa(a,t,e){let r=a.image,o=r?e.options.imageSrcResolver?.(r)??r.url:``;if(r&&o)return`<img data-img-key="${R(o)}" alt="">`;return`<span class="ini">${g(Array.from(t.trim())[0]??``)}</span>`}function fa(a,t){let{labels:e}=t,r=t.options.userId,o=u$2.referencedLine(a.quoteOf?a.quoteOfMessage:null,r),i=u$2.referencedLine(a.replyTo?a.replyToMessage:null,r),n=``;return o&&(n+=bt(`❝`,o,280,e.quote,t)),i&&(n+=bt(`↩`,i,120,e.reply,t)),n}function bt(a,t,e,r,o){let i=C(t.name,o)||r,n=u$2.isSealed(t,o.options.userId)?o.labels.secret:u$2.referenceExcerpt(t,e,o.options.textDecoder);return`<div class="ref"><span class="rn">${a} ${g(i)}</span><span class="rt">${g(n)}</span></div>`}function vt(a,t){let{reactionsOf:e}=t.options;if(!e||!a.identifier)return``;let r=e(a.identifier);return r.length<1?``:`<div class="rx" aria-label="${R(t.labels.reactions)}">`+r.map(o=>`<span>${g(o.label)} <b>${o.count}</b></span>`).join(``)+`</div>`}function ma(a,t){let e=(a.attachmentImages??[]).map(r=>{let o=t.options.imageSrcResolver?.(r)??r.url;return o?`<img data-img-key="${R(o)}" alt="${R(r.name||``)}">`:``}).filter(r=>r.length>0).join(``);return e?`<div class="att">${e}</div>`:``}function yt(a){return a.split(`
`).map(t=>g(t)).join(`<br>`)}function ga(a){let t=a.split(`
`);return t.map((e,r)=>{let o=t[r+1],i=e.lastIndexOf(`→`);if(i<0||o!=null&&o.trimStart().startsWith(`→`))return g(e);let n=e.slice(i+1).trim();return n?`${g(e.slice(0,i+1))} <strong class="res">${g(n)}</strong>`:g(e)}).join(`<br>`)}function ba(a){return Qt.exec(a)?.[1]??a}function C(a,t){return u$2.decode(a,t.options.textDecoder)}function he(a){let t=(a??``).trim().toLowerCase();return Vt.test(t)?t:Jt}function ua(a){if(a.length<1)return``;let t=a[0].message.placedAt,e=a[a.length-1].message.placedAt,r=ue(t);return $(t)===$(e)?`${r} \u2013 ${M(e)}`:`${r} \u2013 ${ue(e)}`}function Y(a){return String(a).padStart(2,`0`)}function $(a){let t=new Date(a);return`${t.getFullYear()}/${Y(t.getMonth()+1)}/${Y(t.getDate())}`}function M(a){let t=new Date(a);return`${Y(t.getHours())}:${Y(t.getMinutes())}`}function ue(a){return`${$(a)} ${M(a)}`}var ve=`    `;var xa=280;var ha=120;function wt(a,t,e={}){let r=E$1(E$1({},xe),e.labels),o=a===`all`?u$2.spokenTabs(t):t.slice(0,1),i=a===`all`?u$2.mergeEntries(o,e.userId):(o[0]?.chatMessages??[]).filter(f=>u$2.isVisibleMessage(f,e.userId)).map(f=>({tab:o[0],tabIndex:0,message:f})),n=a===`all`&&o.length>1,c=a===`all`?r.allTabs:o[0]?.name??``,d=[e.roomName?`${c} \u2014 ${e.roomName}`:c];d.push(e.exportedAt!=null?`${r.exportedWith} \xB7 ${$(e.exportedAt)} ${M(e.exportedAt)}`:r.exportedWith);let l=``;for(let f of i){let m=$(f.message.placedAt);m!==l&&(l=m,d.push(``,`--- ${m} ---`)),d.push(...va(f,n,r,e))}return d.join(`
`)+`
`}function va(a,t,e,r){let{message:o}=a,i=`[${M(o.timestamp)}] `+(t?`[${a.tab.name}] `:``)+`${u$2.decode(o.name,r.textDecoder)}\uFF1A`,n=u$2.isSealed(o,r.userId)?[`\uFF08${e.secret}\uFF09`]:ya(o,r),c=(o.fixd?`\uFF08${e.edited}\uFF09`:``)+(o.isPseudoDeleted?`\uFF08${e.pseudoDeleted}\uFF09`:``),[d=``,...l]=n,f=u$2.isSealed(o,r.userId)?``:u$2.reactionSummary(o,r.reactionsOf);return[i+d+c,...l.map(m=>ve+m),...ka(o,e,r).map(m=>ve+m),...f?[`${ve}${e.reactions}: ${f}`]:[]]}function ya(a,t){let r=St(O$1(a.vnEmote,u$2.decode(a.text,t.textDecoder)),t).split(/\r?\n/);for(let o of a.attachmentImages??[])r.push(`[${o.name||`?`}]`);return r}function ka(a,t,e){let r=[],o=u$2.referencedLine(a.quoteOf?a.quoteOfMessage:null,e.userId),i=u$2.referencedLine(a.replyTo?a.replyToMessage:null,e.userId);return o&&r.push(`\u275D ${t.quote} ${kt(o,xa,t,e)}`),i&&r.push(`\u21A9 ${t.reply} ${kt(i,ha,t,e)}`),r}function kt(a,t,e,r){return`${u$2.decode(a.name,r.textDecoder)}\uFF1A${u$2.isSealed(a,r.userId)?e.secret:St(u$2.referenceExcerpt(a,t,r.textDecoder),r)}`}function St(a,t){return t.ruby?.show===`hidden`?a.replace(_,`$1`):a.replace(_,(e,r,o)=>`${r}\uFF08${U(o)}\uFF09`)}var wa={name:``,chatMessages:[]};function Tt(a,t,e,r={}){return a===`text`?wt(t,e,r):Sa(Ta(a,t,e,r),r)}function Sa(a,t){let e=`<style>${lt(t.ruby??f$2)}</style>`,r=a.indexOf(`</head>`);return r<0?e+a:a.slice(0,r)+e+a.slice(r)}function Ta(a,t,e,r){let{userId:o,imageSrcResolver:i,textDecoder:n,reactionsOf:c}=r,d=e[0]??wa;switch(a){case`standard`:return t===`all`?u$2.exportAllTabsHtml(e,r.showTime??!0,o,i,n,c):u$2.exportTabHtml(d,o,i,n,c);case`coc`:return t===`all`?u$2.exportAllTabsHtmlCoc(e,o,i,n):u$2.exportTabHtmlCoc(d,o,i,n);default:return ut(a,t,e,r)}}var Oa=[`standard`,`parchment`,`washi`,`gothic`,`eerie`,`noir`,`neon`,`terminal`,`cosmos`,`military`,`steampunk`,`ocean`,`messenger`,`notebook`,`pop`,`coc`,`text`];var rr=`standard`;var or={standard:{ground:`#ffffff`,surface:`#f7f7f7`,accent:`#888888`},parchment:{ground:`#2b1d12`,surface:`#f2e4c4`,accent:`#8a3b1f`},washi:{ground:`#e8e0cf`,surface:`#fbf8f0`,accent:`#b52b2e`},gothic:{ground:`#120a0e`,surface:`#24121a`,accent:`#c41e3a`},eerie:{ground:`#0a0b0b`,surface:`#151918`,accent:`#9a2a2a`},noir:{ground:`#141414`,surface:`#1f1e1b`,accent:`#d9a441`},neon:{ground:`#05070f`,surface:`#0c1830`,accent:`#2bd4ff`},terminal:{ground:`#030a04`,surface:`#062b0c`,accent:`#7dff8a`},cosmos:{ground:`#070818`,surface:`#1a1d4a`,accent:`#f5c96a`},military:{ground:`#1e2218`,surface:`#2a3021`,accent:`#d9c45a`},steampunk:{ground:`#1b130c`,surface:`#3a2816`,accent:`#d49a3a`},ocean:{ground:`#0f2a3d`,surface:`#f4ead3`,accent:`#1d5f86`},messenger:{ground:`#dfe5ec`,surface:`#ffffff`,accent:`#2f6fed`},notebook:{ground:`#d8d0bf`,surface:`#fdfcf7`,accent:`#e0524f`},pop:{ground:`#fff4f8`,surface:`#ffffff`,accent:`#ff5fa2`},coc:{ground:`#ffffff`,surface:`#f7f7f7`,accent:`#555555`},text:{ground:`#eeeeee`,surface:`#ffffff`,accent:`#333333`}};function nr(a){return typeof a==`string`&&Oa.includes(a)}function ye(a){return a===`text`}var ke;var N=ke=class extends I{constructor(){super(...arguments),this.identifiers=[]}onStoreAdded(){super.onStoreAdded(),g$1.instance.remove(this)}innerXml(){let t=[];for(let e of new Set(this.identifiers)){let r=r$3.get(e);r&&t.push(r.toXml())}return t.join(``)}static create(t){let e=new ke;return e.identifiers=t.map(r=>r.identifier),e}};N=ke=_b([Ve(`audio-tag-list`)],N);function Ot(a){let t=a?.carriedImageIdentifiers;return Array.isArray(t)?t.filter(e=>typeof e==`string`&&e.length>0):[]}var we;var j=we=class extends I{constructor(){super(...arguments),this.identifiers=[]}onStoreAdded(){super.onStoreAdded(),g$1.instance.remove(this)}innerXml(){let t=[];for(let e of new Set(this.identifiers)){let r=n$1.get(e);r&&t.push(r.toXml())}return t.join(``)}static create(t){let e=new we;return e.identifiers=t.map(r=>r.identifier),e}};j=we=_b([Ve(`image-tag-list`)],j);var Se;var A=Se=class extends M$2{constructor(){super(...arguments),this.presetIdentifier=``,this.size=1,this.laidByHotbarSlot=``}static list(){return g$1.instance.getObjects(Se)}get phaseOffset(){let t=0;for(let e=0;e<this.identifier.length;e++)t=(t*31+this.identifier.charCodeAt(e))%1e5;return t}};_b([f()],A.prototype,`presetIdentifier`,void 0);_b([f()],A.prototype,`size`,void 0);_b([f()],A.prototype,`laidByHotbarSlot`,void 0);A=Se=_b([Ve(`effect-field`)],A);var Aa=`cutInSamplePortrait_image`;var Ia=`cutInSampleFace_image`;var Ca=`./assets/images/cutin_sample_portrait.png`;var $a=`./assets/images/cutin_sample_face.png`;var Te={scaleX:[{t:0,v:.02,e:`outCubic`},{t:110,v:1}],opacity:[{t:0,v:1,e:`linear`},{t:950,v:1,e:`inCubic`},{t:1080,v:0}]};var Oe={wipe:[{t:0,v:0,e:`outQuad`},{t:300,v:1}],crumble:[{t:1050,v:1,e:`inQuad`},{t:1440,v:0}],opacity:[{t:0,v:1,e:`linear`},{t:1400,v:1,e:`inCubic`},{t:1500,v:0}]};var At={scaleX:[{t:170,v:.45,e:`outBack`},{t:330,v:1}],scaleY:[{t:170,v:.45,e:`outBack`},{t:330,v:1}],opacity:[{t:170,v:0,e:`linear`},{t:220,v:1},{t:950,v:1,e:`inCubic`},{t:1080,v:0}]};var La=[{identifier:`sample-cut-in-flash`,sceneIdentifier:`sample-cut-in-flash-scene`,name:`Sample1`,width:1e3,height:330,durationMs:1100,sounds:[{atMs:0,soundKey:`flashImpact`,volume:90}],layers:[{identifier:`sample-cut-in-flash-frame`,name:`帯の縁`,kind:`fill`,x:0,y:12,width:1e3,height:306,fillFrom:`#d8f1ff`,tracks:Te},{identifier:`sample-cut-in-flash-plate`,name:`帯の下地`,kind:`fill`,x:6,y:18,width:988,height:294,fillShape:`linear`,fillFrom:`#0a1c40`,fillTo:`#04102a`,fillAngleDeg:180,tracks:Te},{identifier:`sample-cut-in-flash-face`,name:`目 : 画像を差し替える`,kind:`image`,x:6,y:18,width:988,height:294,portrait:!0,objectFit:`cover`,objectPosY:42,tracks:F(E$1({},Te),{scaleX:[{t:0,v:.02,e:`outCubic`},{t:100,v:1.06},{t:420,v:1}],scaleY:[{t:100,v:1.06,e:`outCubic`},{t:420,v:1}]})},{identifier:`sample-cut-in-flash-rays`,name:`集中線`,kind:`fill`,x:6,y:18,width:988,height:294,fillShape:`speedlines`,fillFrom:`#bfe9ff`,fillTo:`#0a1c40`,fillAngleDeg:0,fillScalePx:22,tracks:{opacity:[{t:60,v:0,e:`linear`},{t:120,v:.55},{t:460,v:.55,e:`inCubic`},{t:700,v:0}]}},{identifier:`sample-cut-in-flash-sheen`,name:`走査光`,kind:`fill`,x:0,y:18,width:320,height:294,skewXDeg:-26,effect:`glow`,effectStrength:.9,effectColor:`#bfe9ff`,fillShape:`linear`,fillFrom:`#bfe9ff00`,fillMid:`#eafbff`,fillTo:`#bfe9ff00`,fillAngleDeg:90,tracks:{x:[{t:120,v:-340,e:`outCubic`},{t:430,v:1040}],opacity:[{t:120,v:0,e:`linear`},{t:170,v:1},{t:360,v:1,e:`inCubic`},{t:450,v:0}]}},{identifier:`sample-cut-in-flash-word`,name:`文字 : カ`,kind:`text`,x:774,y:8,width:160,height:180,rotation:-12,text:`カ`,vertical:!0,fontSizePx:138,fontWeight:900,color:`#eafbff`,textAlign:`center`,strokeColor:`#0a1c40`,strokeWidthPx:6,effect:`glow`,effectStrength:.7,effectColor:`#9fdcff`,tracks:At},{identifier:`sample-cut-in-flash-word-small`,name:`文字 : ッ`,kind:`text`,x:872,y:168,width:120,height:140,rotation:-12,text:`ッ`,vertical:!0,fontSizePx:88,fontWeight:900,color:`#eafbff`,textAlign:`center`,strokeColor:`#0a1c40`,strokeWidthPx:5,effect:`glow`,effectStrength:.7,effectColor:`#9fdcff`,tracks:At}]},{identifier:`sample-cut-in-tear`,sceneIdentifier:`sample-cut-in-tear-scene`,name:`Sample2`,width:1240,height:500,durationMs:1500,sounds:[{atMs:0,soundKey:`flashImpact`,volume:90},{atMs:1050,soundKey:`collapse`,volume:55}],layers:[{identifier:`sample-cut-in-tear-backing`,name:`裂け目の裏地`,kind:`fill`,x:-12,y:48,width:1264,height:404,rotation:-5,clip:`gash`,wipeShape:`chevronRight`,crumbleShape:`crumbleLeft`,fillFrom:`#e10f22`,tracks:Oe},{identifier:`sample-cut-in-tear-edge`,name:`裂け目の縁`,kind:`fill`,x:0,y:56,width:1240,height:388,rotation:-5,clip:`gash`,wipeShape:`chevronRight`,crumbleShape:`crumbleLeft`,fillFrom:`#ffffff`,tracks:Oe},{identifier:`sample-cut-in-tear-face`,name:`目 : 画像を差し替える`,kind:`image`,x:10,y:64,width:1220,height:372,rotation:-5,clip:`gash`,wipeShape:`chevronRight`,crumbleShape:`crumbleLeft`,face:!0,objectFit:`cover`,objectPosY:50,tracks:F(E$1({},Oe),{opacity:[{t:70,v:0,e:`linear`},{t:150,v:1},{t:1320,v:1,e:`inCubic`},{t:1500,v:0}]})},{identifier:`sample-cut-in-tear-word`,name:`文字 : ブチッ`,kind:`text`,x:930,y:10,width:300,height:480,rotation:8,text:`ブチッ`,vertical:!0,letterSpacingPx:-14,fontSizePx:104,fontWeight:900,color:`#ffffff`,textAlign:`center`,strokeColor:`#0b0b0d`,strokeWidthPx:8,effect:`shake`,effectStrength:.4,crumbleShape:`crumbleLeft`,tracks:{crumble:[{t:1150,v:1,e:`inQuad`},{t:1460,v:0}],x:[{t:200,v:1260,e:`outBack`},{t:440,v:930}],rotation:[{t:200,v:26,e:`outBack`},{t:440,v:8}],opacity:[{t:200,v:0,e:`linear`},{t:260,v:1},{t:1320,v:1,e:`inCubic`},{t:1500,v:0}]}}]}];function Ct(a){let t={portrait:It(a,Aa,Ca),face:It(a,Ia,$a)},e=[];return N$1.batch(()=>{for(let r of La){let o=new c$1(r.identifier);o.initialize(),g$1.instance.get(r.identifier)===o&&Ea(o,r,t)&&e.push(o)}return e})}function It(a,t,e){let r=M$1.createEmpty(t).toContext();r.url=e;let o=a.add(r);return n$1.create(o.identifier).tag=p$2,o.identifier}function Ea(a,t,e){let r=new u$3(t.sceneIdentifier);if(r.initialize(),g$1.instance.get(t.sceneIdentifier)!==r)return!1;a.name=t.name,a.width=t.width,a.height=t.height,a.originalSize=!1,a.keepImageAspect=!1,a.imageIdentifier=``,a.frameless=!0,a.chatActivate=!0,r.cutInIdentifier=a.identifier,r.durationMs=t.durationMs,r.sounds=Xt(Ma(t));for(let o of t.layers)r.appendChild(ja(o,e));return!0}function Ma(a){let t=[];for(let e$1 of a.sounds){let r=e[e$1.soundKey];r&&t.push({t:e$1.atMs,a:r,v:e$1.volume})}return t}function ja(a,t){let e=new s$2(a.identifier);return e.initialize(),e.name=a.name,e.kind=a.kind,e.x=a.x,e.y=a.y,e.width=a.width,e.height=a.height,a.rotation!==void 0&&(e.rotation=a.rotation),a.skewXDeg!==void 0&&(e.skewXDeg=a.skewXDeg),a.clip&&(e.clip=a.clip),a.wipeShape&&(e.wipeShape=a.wipeShape),a.crumbleShape&&(e.crumbleShape=a.crumbleShape),a.opacity!==void 0&&(e.opacity=a.opacity),a.effect&&(e.effect=a.effect),a.effectStrength!==void 0&&(e.effectStrength=a.effectStrength),a.effectColor&&(e.effectColor=a.effectColor),a.tracks&&(e.tracks=Nt$1(a.tracks)),a.fillShape&&(e.fillShape=a.fillShape),a.fillFrom&&(e.fillFrom=a.fillFrom),a.fillMid&&(e.fillMid=a.fillMid),a.fillTo&&(e.fillTo=a.fillTo),a.fillAngleDeg!==void 0&&(e.fillAngleDeg=a.fillAngleDeg),a.fillScalePx!==void 0&&(e.fillScalePx=a.fillScalePx),a.portrait&&(e.imageIdentifier=t.portrait),a.face&&(e.imageIdentifier=t.face),a.objectFit&&(e.objectFit=a.objectFit),a.objectPosY!==void 0&&(e.objectPosY=a.objectPosY),a.text&&(e.text=a.text),a.vertical!==void 0&&(e.vertical=a.vertical),a.letterSpacingPx!==void 0&&(e.letterSpacingPx=a.letterSpacingPx),a.fontSizePx!==void 0&&(e.fontSizePx=a.fontSizePx),a.fontWeight!==void 0&&(e.fontWeight=a.fontWeight),a.color&&(e.color=a.color),a.textAlign&&(e.textAlign=a.textAlign),a.strokeColor&&(e.strokeColor=a.strokeColor),a.strokeWidthPx!==void 0&&(e.strokeWidthPx=a.strokeWidthPx),e}var K;var h=K=class extends Z{constructor(){super(...arguments),this.isLock=!1,this.isScratch=!1,this.dispLockMark=!0,this.color=`#404040`,this.changeColor=`#FF5050`,this.owner=``,this.M=[],this.fillMapBack=[],this.scratchingGrids=``,this.scratchedGrids=``,this.dummy=0,this.maxSize=50}getMaxSize(){return this.maxSize}getMapXY(t,e,r){return r?this.fillMapBack.length<this.M.length?!1:this.fillMapBack[this.maxSize*e+t]:this.M[this.maxSize*e+t]}setMapXY(t,e,r){this.fillMapBack.length<this.M.length||(this.fillMapBack[this.maxSize*e+t]=r)}copyBack2MainMap(){this.M=[...this.fillMapBack],this.dummy++,this.dummy>=100&&(this.dummy=0)}copyMain2BackMap(){this.fillMapBack=[...this.M]}reverseMapXY(t,e){this.fillMapBack.length<this.M.length||(this.fillMapBack[this.maxSize*e+t]=!this.fillMapBack[this.maxSize*e+t])}isMapXYChange(t,e){return this.fillMapBack.length<this.M.length?!1:this.M[this.maxSize*e+t]!=this.fillMapBack[this.maxSize*e+t]}get width(){return this.getCommonValue(`width`,1)}get height(){return this.getCommonValue(`height`,1)}static create(t,e,r,o,i){let n;return i?n=new K(i):n=new K,n.M=new Array(n.maxSize*n.maxSize).fill(1),n.createDataElements(),n.commonDataElement.appendChild(m.create(`name`,t,{},`name_${n.identifier}`)),n.commonDataElement.appendChild(m.create(`width`,e,{},`width_${n.identifier}`)),n.commonDataElement.appendChild(m.create(`height`,r,{},`height_${n.identifier}`)),n.initialize(),n}};_b([f()],h.prototype,`isLock`,void 0);_b([f()],h.prototype,`isScratch`,void 0);_b([f()],h.prototype,`dispLockMark`,void 0);_b([f()],h.prototype,`color`,void 0);_b([f()],h.prototype,`changeColor`,void 0);_b([f()],h.prototype,`owner`,void 0);_b([f()],h.prototype,`M`,void 0);_b([f()],h.prototype,`scratchingGrids`,void 0);_b([f()],h.prototype,`scratchedGrids`,void 0);_b([f()],h.prototype,`dummy`,void 0);h=K=_b([Ve(`table-scratch-mask`)],h);var J=class extends N$1{onStoreAdded(){super.onStoreAdded(),g$1.instance.remove(this)}get reloadCheck(){return g$1.instance.get(`ReloadCheck`)}innerXml(){let t=``,e=[...g$1.instance.getObjects(s),...g$1.instance.getObjects(i$1),...g$1.instance.getObjects(d),...g$1.instance.getObjects(l),...g$1.instance.getObjects(h$1).filter(r=>!(r.parent instanceof s)),...g$1.instance.getObjects(p$1),...g$1.instance.getObjects(w$2),...g$1.instance.getObjects(d$1).filter(r=>r.parent===null),...g$1.instance.getObjects(f$1),...g$1.instance.getObjects(i),...g$1.instance.getObjects(c$1),...g$1.instance.getObjects(r$2),...g$1.instance.getObjects(o),...g$1.instance.getObjects(A),...g$1.instance.getObjects(a$1),...g$1.instance.getObjects(r$1).filter(r=>g$1.instance.get(r.messageIdentifier)instanceof n)];for(let r of e)t+=r.toXml();return t}parseInnerXml(t){let e=d=>Array.from(t.children).some(l=>l.nodeName===d),r=e(o.aliasName),o$1=e(c$1.aliasName),i$2=e(r$1.aliasName),n=[...g$1.instance.getObjects(s),...g$1.instance.getObjects(M$3),...g$1.instance.getObjects(h),...g$1.instance.getObjects(p),...g$1.instance.getObjects(g$2),...g$1.instance.getObjects(i$1),...g$1.instance.getObjects(d),...g$1.instance.getObjects(l),...g$1.instance.getObjects(h$1),...g$1.instance.getObjects(p$1),...g$1.instance.getObjects(w$2),...g$1.instance.getObjects(d$1),...g$1.instance.getObjects(f$1),...g$1.instance.getObjects(i),...o$1?g$1.instance.getObjects(c$1):[],...g$1.instance.getObjects(r$2),...r?g$1.instance.getObjects(o):[],...g$1.instance.getObjects(A),...g$1.instance.getObjects(a$1),...i$2?g$1.instance.getObjects(r$1):[]];if(this.reloadCheck.answerCheck()){for(let d of n)d.destroy();this.announceWhatIsComingBack(t);for(let d=0;d<t.children.length;d++)w$1.instance.parseXml(t.children[d]);g$1.instance.getObjects(o).length<1&&ht$1(),g$1.instance.getObjects(c$1).length<1&&Ct(D$1.instance),q(g$1.instance.getObjects())}}announceWhatIsComingBack(t){let e=Array.from(t.querySelectorAll(`[identifier]`)).map(r=>r.getAttribute(`identifier`)??``).filter(r=>r.length>0);e.length<1||(g$1.instance.forgetDeleted(e),x(`FORGET_DELETED_OBJECTS`,{identifiers:e}))}};J=_b([Ve(`room`)],J);var _a=/ImageIdentifier$|^imageIdentifier$/;var Da=`attachmentImageIdentifiers`;var Ra=/^stamps?$/;var $t=4;var Lt=class a$2{constructor(){this.imageStorage=w(D$1),this.audioStorage=w(c),this.fileArchiver=w(z),this.chatTabList=w(k),this.appConfig=w(s$3),this.dataSummarySetting=w(r),this.statusAilmentCatalog=w(I$1),this.translate=w(a),this.chatReactions=w(B),this.stampPacks=w(F$1),this.chatPreferences=w(St$1),this.chatLogTextDecoder=t=>O$2(t,this.translate)}static{this.queue=new l$1(`SaveDataServiceQueue`)}saveRoomAsync(t=``,e){return a$2.queue.add(()=>this._saveRoomAsync(t,e))}createRoomArchiveAsync(){return a$2.queue.add(()=>this.fileArchiver.createZipBlobAsync(this.buildRoomFiles(!1)))}buildAssetFiles(t){let e=[],r=this.imageStorage.images.filter(n=>n.state===A$1.COMPLETE&&t.images.has(n.identifier));for(let n of r){let c=this.createImageArchiveFile(n);c&&e.push(c)}e.push(new File([this.convertToXml(j.create(r))],`imagetag.xml`,{type:`text/plain`}));let o=this.audioStorage.audios.filter(n=>!n.isHidden&&t.audios.has(n.identifier)),i=new Set(e.map(n=>n.name.toLowerCase()));for(let n of o){let c=Na(n,i);c&&e.push(c)}return e.push(new File([this.convertToXml(N.create(o))],`audiotag.xml`,{type:`text/plain`})),e}_saveRoomAsync(t=``,e){return this.saveAsync(this.buildRoomFiles(),this.appendTimestamp(t),e)}buildRoomXmlParts(t){let e=this.convertToXml(new J,t),r=this.convertToXml(this.chatTabList,t),o=this.convertToXml(this.appConfig,t),i=this.convertToXml(this.dataSummarySetting,t),n=this.convertToXml(this.statusAilmentCatalog,t);return{roomXml:e,chatXml:r,files:[new File([e],`data.xml`,{type:`text/plain`}),new File([r],`chat.xml`,{type:`text/plain`}),new File([o],`config.xml`,{type:`text/plain`}),new File([i],`summary.xml`,{type:`text/plain`}),new File([n],`ailment.xml`,{type:`text/plain`})]}}buildRoomFiles(t=!0){let{roomXml:e,chatXml:r,files:o}=this.buildRoomXmlParts(t),i=this.withCarried([...this.searchImageFiles(e),...this.searchImageFiles(r)],g$1.instance.getObjects(L));for(let l of i){let f=this.createImageArchiveFile(l);f&&o.push(f)}let n=this.convertToXml(j.create(i),t);o.push(new File([n],`imagetag.xml`,{type:`text/plain`}));let c=this.audioStorage.audios.filter(l=>!l.isHidden),d=this.convertToXml(N.create(c),t);return o.push(new File([d],`audiotag.xml`,{type:`text/plain`})),o}saveGameObjectAsync(t,e=`xml_data`,r){return a$2.queue.add(()=>this._saveGameObjectAsync(t,e,r))}_saveGameObjectAsync(t,e=`xml_data`,r){let o=[],i=this.convertToXml(t);o.push(new File([i],`data.xml`,{type:`text/plain`}));let n=this.withCarried(this.searchImageFiles(i),[t]);for(let d of n){let l=this.createImageArchiveFile(d);l&&o.push(l)}let c=this.convertToXml(j.create(n));return o.push(new File([c],`imagetag.xml`,{type:`text/plain`})),this.saveAsync(o,this.appendTimestamp(e),r)}saveAsync(t,e,r){let o=-1;return this.fileArchiver.saveAsync(t,e,i=>{let n=i.percent|0;n<=o||(o=n,r?.(o))})}createImageArchiveFile(t){if(t.state!==A$1.COMPLETE)return null;let e=t.blob;return e?new File([e],t.identifier+`.`+Jt$1(e.type),{type:e.type}):null}convertToXml(t,e=!0){let o=`<?xml version="1.0" encoding="UTF-8"?>`+t.toXml();return e?ft(o,{indentation:`  `,lineSeparator:`
`}):o}withCarried(t,e){let r=new Map(t.map(o=>[o.identifier,o]));for(let o of e)for(let i of Ot(o)){if(r.has(i))continue;let n=this.imageStorage.get(i);n&&r.set(i,n)}return[...r.values()]}searchImageFiles(t){let e=De(t),r=[];if(!e)return r;let o={},i=e.ownerDocument.querySelectorAll(`*[type="image"]`);for(let n=0;n<i.length;n++){let c=i[n].innerHTML;o[c]=this.imageStorage.get(c)}for(let n of Array.from(e.ownerDocument.querySelectorAll(`*`))){for(let{name:d,value:l}of Array.from(n.attributes))if(l&&(_a.test(d)&&(o[l]=this.imageStorage.get(l)),!!Ra.test(d)))for(let f of l.split(/\s+/)){let m=u$1(f);m?.kind===`image`&&(o[m.imageIdentifier]=this.imageStorage.get(m.imageIdentifier))}let c=n.getAttribute(Da)??``;for(let d of this.parseAttachmentImageIdentifiers(c))d&&(o[d]=this.imageStorage.get(d))}for(let n of Object.values(o))n&&r.push(n);return r}parseAttachmentImageIdentifiers(t){let e=t.trim();if(e.startsWith(`[`))try{let r=JSON.parse(e);if(Array.isArray(r))return r.map(o=>String(o))}catch(r){return[]}return e.split(/\n+/)}saveChatLog(n,c,d,l){return K$1(this,arguments,function*(t,e,r,o,i={}){let f=i.omitDeleted?u$2.withoutDeleted(r):r,m=ye(t),y=m?a$2.NO_CHAT_LOG_IMAGES:yield this.prepareChatLogImages(f),S=this.renderChatLog(t,e,f,y),k=new Blob([S],{type:`text/plain;charset=utf-8`});Kt$1(k,this.appendTimestamp(`${this.chatLogRoomName()}_log_${o}`)+(m?`.txt`:`.html`))})}static{this.NO_CHAT_LOG_IMAGES={resolver:()=>``,registryScript:``}}renderChatLog(t,e,r,o){let i=Tt(t,e,r,{imageSrcResolver:o.resolver,textDecoder:this.chatLogTextDecoder,showTime:this.chatTabList.simpleDispFlagTime,roomName:s$1.peerContext?.roomName||void 0,labels:this.chatLogLabels(),lang:document.documentElement.lang||void 0,exportedAt:Date.now(),ruby:this.chatPreferences.rubyDisplay(),reactionsOf:n=>this.chatReactions.talliesOf(n).map(c=>({label:N$2(c.stampId,this.translate,d=>this.stampPacks.nameOf(d)),count:c.count}))});return ye(t)?i:a$2.injectImageRegistry(i,o.registryScript)}chatLogRoomName(){return s$1.peerContext?.roomName||this.translate(`app.roomDataDefault`)}chatLogLabels(){let t=(e,r)=>this.translate(`feature.chat.log.labels.${e}`,r);return{secret:t(`secret`),edited:t(`edited`),pseudoDeleted:t(`pseudoDeleted`),quote:t(`quote`),reply:t(`reply`),critical:t(`critical`),fumble:t(`fumble`),success:t(`success`),failure:t(`failure`),allTabs:t(`allTabs`),everyTab:t(`everyTab`),messages:e=>t(`messages`,{count:e}),exportedWith:t(`exportedWith`),reactions:t(`reactions`)}}static{this.PORTRAIT_MAX_DIMENSION=96}static{this.ATTACHMENT_MAX_DIMENSION=360}prepareChatLogImages(t){return K$1(this,null,function*(){let e=new Set,r=new Map;for(let f of t)for(let m of f.chatMessages){let y=m.image;y&&(r.set(y.identifier,y),e.add(y.identifier));for(let S of m.attachmentImages)r.has(S.identifier)||r.set(S.identifier,S)}let o=new Map,i={},n=0,c=[...r.values()];for(let f=0;f<c.length;f+=$t)yield Promise.all(c.slice(f,f+$t).map(m=>K$1(this,null,function*(){let y=e.has(m.identifier),S=y?a$2.PORTRAIT_MAX_DIMENSION:a$2.ATTACHMENT_MAX_DIMENSION,k=yield this.createChatLogImageSrc(m,S,y);if(!k)return;let F=`i${n++}`;o.set(m.identifier,F),i[F]=k})));let d=f=>o.get(f.identifier)??``;return{resolver:d,registryScript:a$2.buildImageRegistryScript(i)}})}createChatLogImageSrc(t,e,r=!1){return K$1(this,null,function*(){let o=t.blob;if(o)return e>0&&(o=(yield S(o,e,{square:r}))??o),ii(o);let i=t.url;return!i||i.startsWith(`data:`)?i:(yield this.createChatLogImageSrcFromUrl(i,e,r))??i})}createChatLogImageSrcFromUrl(t,e,r){return K$1(this,null,function*(){try{let o=yield fetch(t);if(!o.ok)return null;let i=yield o.blob();return e>0&&(i=(yield S(i,e,{square:r}))??i),ii(i)}catch(o){return null}})}static buildImageRegistryScript(t){return Object.keys(t).length===0?``:`<script>(function(){var m=${JSON.stringify(t).replace(/<\/(script)/gi,`<\\/$1`)};document.querySelectorAll('img[data-img-key]').forEach(function(el){var k=el.getAttribute('data-img-key');if(k&&Object.prototype.hasOwnProperty.call(m,k))el.setAttribute('src',m[k]);});})();<\/script>`}static injectImageRegistry(t,e){if(!e)return t;let r=t.lastIndexOf(`</body>`);return r<0?t+`
`+e:t.slice(0,r)+e+`
`+t.slice(r)}appendTimestamp(t){let e=new Date;return t+`_${e.getFullYear()}-${(`00`+(e.getMonth()+1)).slice(-2)}-${(`00`+e.getDate()).slice(-2)}_${(`00`+e.getHours()).slice(-2)}${(`00`+e.getMinutes()).slice(-2)}`}static{this.ɵfac=function(e){return new(e||a$2)}}static{this.ɵprov=se({token:a$2,factory:a$2.ɵfac,providedIn:`root`})}};var Pa={"audio/mpeg":`mp3`,"audio/mp3":`mp3`,"audio/wav":`wav`,"audio/wave":`wav`,"audio/x-wav":`wav`,"audio/aac":`m4a`,"audio/mp4":`m4a`,"audio/x-m4a":`m4a`,"audio/ogg":`ogg`,"audio/opus":`opus`,"audio/flac":`flac`,"audio/x-flac":`flac`};function Na(a,t){let e=a.blob;if(!e)return null;let r=a.name.lastIndexOf(`.`),o=r>0?a.name.slice(r+1).toLowerCase():``,i=Jr(`sound.${o}`).startsWith(`audio/`),n=i?o:Pa[e.type];if(!n)return null;let c=(i?a.name.slice(0,r):a.name).trim()||a.identifier,d=`${c}.${n}`;for(let l=2;t.has(d.toLowerCase());l++)d=`${c} (${l}).${n}`;return t.add(d.toLowerCase()),new File([e],d,{type:Jr(`sound.${n}`)})}export{h as a,rr as c,Oa as i,ye as l,Ct as n,nr as o,Lt as r,or as s,A as t};