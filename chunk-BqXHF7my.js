import{a as p,o as r}from"./chunk-BqVXMwTZ.js";import{t as C$1}from"./chunk-V4g2qfav.js";import{i as H$1}from"./chunk-BUu2EFhi.js";import{c as d,h as nt,l as dt,y as ut}from"./chunk-wcfR79QF.js";import{t as r$1}from"./chunk-Ch7qlBDL.js";var H=`
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
`;var l=`"Hiragino Mincho ProN","Yu Mincho","YuMincho","Noto Serif JP","Noto Serif CJK JP",serif`;var x=`"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic UI","Noto Sans JP","Meiryo",system-ui,sans-serif`;var y=`"Hiragino Maru Gothic ProN","M PLUS Rounded 1c","Yu Gothic UI","Noto Sans JP","Meiryo",sans-serif`;var w=`"SFMono-Regular","Cascadia Mono",Consolas,Menlo,"Osaka-Mono","MS Gothic",monospace`;var C=`"Courier New",Courier,"Osaka-Mono","MS Gothic",monospace`;var X=`
:root{--bg:#2b1d12;--paper:#f2e4c4;--ink:#3b2b1c;--muted:#80684a;--line:#cdb48a;--accent:#8a3b1f;--accent-ink:#fbf1dc;--chip:rgba(138,90,40,.1);--quote-bg:rgba(138,90,40,.08);--roll-bg:rgba(255,250,236,.55);--roll-border:1px dashed #bda274;--crit:#a87412;--fumble:#8e1c1c;--ok:#52692d;--ng:#7a6a58;--font-body:${l};--font-head:${l};--font-mono:${l};--flavor:"\u2766\\2003 CHRONICLE\\2003 \u2766";--head-bg:transparent;--head-border:0;--pt-border:2px solid #cdb48a;--name-mix:82%;--gap:4px}
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
`;var Z=`
:root{color-scheme:dark;--bg:#0a0b0b;--paper:#121514;--ink:#cdd2cb;--muted:#7b847a;--line:#262c29;--accent:#9a2a2a;--accent-ink:#f4eaea;--chip:rgba(255,255,255,.035);--quote-bg:rgba(255,255,255,.03);--roll-bg:rgba(8,10,9,.7);--roll-border:1px solid #262c29;--crit:#a9cfa6;--fumble:#d0303a;--ok:#7f9c80;--ng:#666c66;--font-body:${l};--font-head:${l};--font-mono:${C};--flavor:"\u2014 CASE FILE \u2014";--head-bg:linear-gradient(180deg,#151918,#0e1110);--head-shadow:inset 0 0 80px rgba(0,0,0,.7);--radius:2px;--radius-sm:2px;--pt-radius:2px;--pt-border:1px solid #2e3531;--name-mix:50%;--msg-pad:12px 14px}
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
`;var ee=`
:root{color-scheme:dark;--bg:#05070f;--paper:rgba(9,16,34,.78);--ink:#dce8ff;--muted:#7d90b5;--line:rgba(64,196,255,.24);--accent:#2bd4ff;--accent-ink:#03121a;--chip:rgba(43,212,255,.08);--quote-bg:rgba(43,212,255,.06);--roll-bg:rgba(6,12,28,.88);--roll-border:1px solid rgba(43,212,255,.38);--crit:#2effc8;--fumble:#ff2f8e;--ok:#2bd4ff;--ng:#66779a;--font-body:${x};--font-head:${x};--font-mono:${w};--flavor:"// SESSION_LOG";--head-border:1px solid rgba(43,212,255,.35);--head-shadow:inset 0 0 40px rgba(43,212,255,.08);--radius:0;--radius-sm:0;--pt-radius:0;--pt-border:1px solid rgba(43,212,255,.55);--name-mix:42%;--oc-ink:#03121a;--gap:6px;--msg-bg:linear-gradient(90deg,rgba(43,212,255,.06),transparent 55%)}
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
`;var ae=`
:root{--bg:#e8e0cf;--paper:#fbf8f0;--ink:#2a2521;--muted:#7d7166;--line:#dcd1bd;--accent:#b52b2e;--accent-ink:#fff8f0;--chip:rgba(42,37,33,.05);--quote-bg:rgba(181,43,46,.05);--roll-bg:#fffdf8;--roll-border:1px solid #dcd1bd;--crit:#b52b2e;--fumble:#2a2521;--ok:#35557a;--ng:#8b8074;--font-body:${l};--font-head:${l};--font-mono:${l};--head-bg:transparent;--head-border:0;--radius:0;--radius-sm:0;--pt-radius:3px;--pt-border:1px solid #cfc3ad;--msg-pad:14px 16px;--gap:0}
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
`;var re=`
:root{--bg:#dfe5ec;--paper:#ffffff;--ink:#1e2733;--muted:#6a7686;--line:#d3dae3;--accent:#2f6fed;--accent-ink:#fff;--chip:#eef2f7;--quote-bg:rgba(255,255,255,.6);--roll-bg:#fff;--roll-border:0;--crit:#d98b00;--fumble:#e0245e;--ok:#12a36e;--ng:#8a95a5;--font-body:${x};--font-head:${x};--font-mono:${x};--head-bg:rgba(255,255,255,.9);--head-border:0;--head-shadow:0 10px 30px rgba(30,39,51,.08);--radius:20px;--radius-sm:14px;--name-mix:78%;--gap:6px;--msg-pad:0}
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
`;var q={parchment:X,washi:ae,gothic:`
:root{color-scheme:dark;--bg:#120a0e;--paper:#1c1016;--ink:#eadbd9;--muted:#a08790;--line:#4a2530;--accent:#b8923e;--accent-ink:#1a0d10;--chip:rgba(184,146,62,.08);--quote-bg:rgba(120,20,40,.2);--roll-bg:rgba(30,12,18,.85);--roll-border:1px solid #5a2a36;--crit:#d4af37;--fumble:#c41e3a;--ok:#a3b18a;--ng:#7d6970;--font-body:${l};--font-head:${l};--font-mono:${l};--flavor:"\u2726 NOCTURNE \u2726";--head-bg:linear-gradient(180deg,#24121a,#160b10);--head-border:1px solid #5a2a36;--head-shadow:inset 0 0 0 1px rgba(184,146,62,.3),0 0 0 4px #120a0e,0 0 0 5px rgba(184,146,62,.4);--radius:2px;--radius-sm:2px;--pt-border:2px solid rgba(184,146,62,.6);--name-mix:55%;--oc-ink:#1a0d10;--title:#ecd9a8}
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
`,eerie:Z,noir:`
:root{color-scheme:dark;--bg:#141414;--paper:#1f1e1b;--ink:#e6e1d6;--muted:#8f887b;--line:#3a3732;--accent:#d9a441;--accent-ink:#1a1408;--chip:rgba(230,225,214,.05);--quote-bg:rgba(217,164,65,.07);--roll-bg:#191816;--roll-border:1px solid #3a3732;--crit:#e8c170;--fumble:#c9463d;--ok:#b9b09c;--ng:#6f695e;--font-body:${l};--font-head:${l};--font-mono:${C};--flavor:"CONFIDENTIAL";--head-border:1px solid #3a3732;--head-shadow:0 20px 50px rgba(0,0,0,.5);--radius:0;--radius-sm:0;--pt-radius:0;--pt-border:1px solid #4a463f;--name-mix:40%;--oc-ink:#1a1408}
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
`,neon:ee,terminal:`
:root{color-scheme:dark;--bg:#030a04;--paper:#051006;--ink:#8dff98;--muted:#44a152;--line:rgba(80,255,120,.22);--accent:#7dff8a;--accent-ink:#021003;--chip:rgba(80,255,120,.06);--quote-bg:rgba(80,255,120,.05);--roll-bg:rgba(3,14,5,.9);--roll-border:1px dashed rgba(80,255,120,.35);--crit:#e6ff7a;--fumble:#ff6a5c;--ok:#7dff8a;--ng:#44a152;--font-body:${w};--font-head:${w};--font-mono:${w};--flavor:"> SESSION LOG";--head-bg:transparent;--head-border:1px solid rgba(80,255,120,.35);--radius:0;--radius-sm:0;--pt-radius:0;--pt-border:1px solid rgba(80,255,120,.45);--name-mix:25%;--oc-ink:#021003;--gap:0;--msg-pad:6px 12px}
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
:root{color-scheme:dark;--bg:#070818;--paper:rgba(16,18,48,.72);--ink:#e6e8ff;--muted:#8d92c4;--line:rgba(160,170,255,.2);--accent:#f5c96a;--accent-ink:#17120a;--chip:rgba(160,170,255,.08);--quote-bg:rgba(160,170,255,.07);--roll-bg:rgba(12,14,40,.8);--roll-border:1px solid rgba(245,201,106,.35);--crit:#ffd978;--fumble:#ff6b8b;--ok:#8fd3ff;--ng:#7a7fae;--font-body:${x};--font-head:${l};--font-mono:${x};--flavor:"\u2727 STARLOG \u2727";--head-border:1px solid rgba(160,170,255,.25);--head-shadow:0 0 60px rgba(120,100,255,.18);--radius:14px;--radius-sm:10px;--pt-border:2px solid rgba(245,201,106,.55);--name-mix:45%;--oc-ink:#17120a;--title:#fff4d6;--msg-bg:linear-gradient(90deg,rgba(160,170,255,.05),transparent 70%)}
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
:root{color-scheme:dark;--bg:#1e2218;--paper:#262b1f;--ink:#dfe3cf;--muted:#98a07f;--line:#434a36;--accent:#d9c45a;--accent-ink:#1e2218;--chip:rgba(223,227,207,.05);--quote-bg:rgba(217,196,90,.06);--roll-bg:#20241a;--roll-border:1px solid #545c42;--crit:#d9e36a;--fumble:#e0603a;--ok:#9fbf6a;--ng:#7a8068;--font-body:${x};--font-head:${x};--font-mono:${w};--flavor:"// OPERATION LOG // CLASSIFIED";--head-border:1px solid #545c42;--radius:0;--radius-sm:0;--pt-radius:0;--pt-border:1px solid #6b7452;--name-mix:50%;--oc-ink:#1e2218}
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
:root{color-scheme:dark;--bg:#1b130c;--paper:#2a1d12;--ink:#efdcbc;--muted:#b0916a;--line:#6b4a2b;--accent:#d49a3a;--accent-ink:#1b130c;--chip:rgba(212,154,58,.1);--quote-bg:rgba(212,154,58,.08);--roll-bg:linear-gradient(180deg,#332416,#261a10);--roll-border:1px solid #8a6232;--crit:#f0c05a;--fumble:#c0492e;--ok:#8fae6a;--ng:#8a7358;--font-body:${l};--font-head:${l};--font-mono:${C};--flavor:"\u2699 ENGINE LOG \u2699";--head-bg:linear-gradient(180deg,#3a2816,#241a0f);--head-border:2px solid #8a6232;--head-shadow:inset 0 0 0 4px #241a0f,inset 0 0 0 5px rgba(212,154,58,.45),0 12px 30px rgba(0,0,0,.5);--pt-border:3px solid #b07f38;--name-mix:55%;--oc-ink:#1b130c}
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
:root{--bg:#0f2a3d;--paper:#f4ead3;--ink:#23303a;--muted:#6d7a80;--line:#cdbd98;--accent:#1d5f86;--accent-ink:#fff;--chip:rgba(29,95,134,.08);--quote-bg:rgba(29,95,134,.07);--roll-bg:rgba(255,252,242,.7);--roll-border:1px solid #cdbd98;--crit:#c8932a;--fumble:#a8322d;--ok:#2d7a5f;--ng:#7d8790;--font-body:${l};--font-head:${l};--font-mono:${l};--flavor:"\u2248 SHIP'S LOG \u2248";--head-bg:transparent;--head-border:0;--radius:4px;--radius-sm:3px;--pt-border:2px solid #1d5f86;--name-mix:82%;--gap:4px}
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
`,messenger:re,notebook:`
:root{--bg:#d8d0bf;--paper:#fdfcf7;--ink:#243a73;--muted:#7a869f;--line:#c7d3ea;--accent:#e0524f;--accent-ink:#fff;--chip:rgba(36,58,115,.06);--quote-bg:rgba(255,236,120,.35);--roll-bg:rgba(255,255,255,.75);--roll-border:1.5px dashed #9fb0d6;--crit:#e0524f;--fumble:#4a4a4a;--ok:#2f8f5b;--ng:#8a8a8a;--font-body:${y};--font-head:${y};--font-mono:${y};--head-bg:transparent;--head-border:0;--radius:0;--radius-sm:4px;--pt-border:2px solid #c7d3ea;--name-mix:75%;--gap:0;--msg-pad:6px 14px}
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
:root{--bg:#fff4f8;--paper:#ffffff;--ink:#3d2c4a;--muted:#9a85a8;--line:#f3cfe0;--accent:#ff5fa2;--accent-ink:#fff;--chip:#fff0f6;--quote-bg:#fffafc;--roll-bg:#ffffff;--roll-border:3px solid #3d2c4a;--crit:#ffd23f;--fumble:#b9a6ff;--ok:#7ee8c0;--ng:#e5dcea;--font-body:${y};--font-head:${y};--font-mono:${y};--flavor:"\u2605 PLAY LOG \u2605";--head-bg:#fff;--head-border:3px solid #3d2c4a;--head-shadow:6px 6px 0 #3d2c4a;--radius:18px;--radius-sm:14px;--pt-border:3px solid #3d2c4a;--name-mix:85%;--oc-ink:#3d2c4a;--gap:10px;--msg-pad:0}
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
`};var I={secret:`シークレットダイス`,edited:`編集済`,pseudoDeleted:`削除済`,quote:`引用`,reply:`返信先`,critical:`クリティカル`,fumble:`ファンブル`,success:`成功`,failure:`失敗`,allTabs:`全タブ`,everyTab:`すべて`,messages:e=>`${e} \u4EF6\u306E\u767A\u8A00`,exportedWith:`Udonarium Axe`,reactions:`リアクション`};var be=3e5;var fe=32;var ge=`#666666`;var xe=/^(#[0-9a-f]{3,8}|[a-z]{3,20}|rgba?\([\d\s.,%]+\)|hsla?\([\d\s.,%deg]+\))$/i;var me=/^<(?:Secret-)?BCDice[：:](.*)>$/s;var ue={critical:`crit`,fumble:`fumble`,success:`ok`,failure:`ng`};var he=`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/></svg>`;var ve=`<script>(function(){var n=document.querySelector(".tabs");if(!n)return;n.addEventListener("click",function(e){var b=e.target.closest("button[data-tab]");if(!b)return;var t=b.getAttribute("data-tab");n.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});document.querySelectorAll("[data-t]").forEach(function(el){el.hidden=t!=="*"&&el.getAttribute("data-t")!==t;});});})();<\/script>`;var s=C$1.escapeHtml;var $=C$1.escapeAttribute;function G(e,t,a,r={}){let o=r$1(r$1({},I),r.labels),n=t===`all`?C$1.spokenTabs(a):a.slice(0,1),i=t===`all`?C$1.mergeEntries(n,r.userId):ye(n[0],r),c=t===`all`&&n.length>1,p={options:r,labels:o,showTab:c},b=t===`all`?o.allTabs:n[0]?.name??``,f=r.roomName?`${b} \u2014 ${r.roomName}`:b,g=`<footer class="foot">${s(o.exportedWith)}`+(r.exportedAt!=null?` \xB7 ${A(r.exportedAt)}`:``)+`</footer>`;return`<!DOCTYPE html>
<html lang="${$(r.lang||`ja`)}" data-style="${e}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="generator" content="Udonarium Axe">
<title>${s(f)}</title>
<style>${H}${q[e]}${dt}</style>
</head>
<body>
<div class="log">
`+ke(b,i,n,c,p)+`
<main class="body">
`+$e(i,p)+`</main>
`+g+`
</div>
`+(c?ve+`
`:``)+`</body>
</html>`}function ye(e,t){return e?e.chatMessages.filter(a=>C$1.isVisibleMessage(a,t.userId)).map(a=>({tab:e,tabIndex:0,message:a})):[]}function S(e){return e.isDicebot?`roll`:e.isSystemMessage?`system`:`say`}function ke(e,t,a,r,o){let{labels:n,options:i}=o,c=i.roomName?`<p class="kicker">${s(i.roomName)}</p>`:``,p=t.filter(h=>S(h.message)!==`system`),b=[],f=Me(t);f&&b.push(`<span>${f}</span>`),b.push(`<span>${s(n.messages(p.length))}</span>`);let g=we(p,o),K=g.length?`<ul class="cast">${g.map(h=>`<li style="--c:${h.color}">${s(h.name)}</li>`).join(``)}</ul>`:``,V=r?`<nav class="tabs"><button type="button" data-tab="*" aria-pressed="true">${s(n.everyTab)}</button>`+a.map((h,Q)=>`<button type="button" data-tab="${Q}" aria-pressed="false">${s(h.name)}</button>`).join(``)+`</nav>`:``;return`<header class="head">`+c+`<h1 class="title">${s(e)}</h1><p class="meta">${b.join(``)}</p>`+K+V+`</header>`}function we(e,t){let a=/* @__PURE__ */ new Map;for(let{message:r}of e){if(S(r)!==`say`)continue;let o=m(r.name,t).trim();if(!(!o||a.has(o))&&(a.set(o,N(r.messColor)),a.size>=fe))break}return[...a].map(([r,o])=>({name:r,color:o}))}function $e(e,t){let a=[],r=``,o=null;for(let n of e){let i=u(n.message.placedAt);i!==r&&(r=i,a.push(`<div class="day"><span>${i}</span></div>
`),o=null),a.push(Oe(n,Se(o,n),t)),o=n}return a.join(``)}function Se(e,t){if(!e)return!1;let a=e.message,r=t.message;return S(a)===`say`&&S(r)===`say`&&e.tabIndex===t.tabIndex&&a.name===r.name&&a.messColor===r.messColor&&a.image?.identifier===r.image?.identifier&&!a.isSecret&&!r.isSecret&&!!a.isOutOfStory==!!r.isOutOfStory&&r.placedAt-a.placedAt<be}function Oe(e,t,a){switch(S(e.message)){case`roll`:return Ee(e,a);case`system`:return Le(e,a);default:return Te(e,t,a)}}function Te(e,t,a){let{message:r}=e,{labels:o}=a,n=m(r.name,a),i=!r.isSecret||C$1.canSee(r,a.options.userId),c=[`msg`];t&&c.push(`cont`),r.isOutOfStory&&c.push(`ooc`),i||c.push(`sealed`);let p=i?F(H$1(r.vnEmote,m(r.text,a)))+Ie(r,a):`<span class="seal">${s(o.secret)}</span>`,b=(r.fixd?`<span class="ed">${s(o.edited)}</span>`:``)+(r.isPseudoDeleted?`<span class="ed">${s(o.pseudoDeleted)}</span>`:``);return`<article class="${c.join(` `)}" data-t="${e.tabIndex}" style="--c:${N(r.messColor)}"><div class="pt">${Ce(r,n,a)}</div><div class="bd"><div class="hd"><span class="nm">${s(n)}</span>${j(e,a)}${U(r)}</div>`+Ae(r,a)+`<div class="tx">${p}${b}</div>`+(i?B(r,a):``)+`</div></article>
`}function Ee(e,t){let{message:a}=e,{labels:r}=t,o=!a.isSecret||C$1.canSee(a,t.options.userId),n=o?a.rollDetail?.outcome??``:``,i=[`msg`,`roll`];n&&i.push(ue[n]),a.isOutOfStory&&i.push(`ooc`),o||i.push(`sealed`);let c=ze(m(a.name,t)),p=n?`<span class="oc">${s(r[n])}</span>`:``,b=o?Ne(m(a.text,t)):`<span class="seal">${s(r.secret)}</span>`;return`<article class="${i.join(` `)}" data-t="${e.tabIndex}" style="--c:${N(a.messColor)}"><div class="pt">${he}</div><div class="bd"><div class="hd"><span class="nm">${s(c)}</span>${p}${j(e,t)}${U(a)}</div><div class="tx">${b}</div>`+(o?B(a,t):``)+`</div></article>
`}function Le(e,t){return`<div class="sys" data-t="${e.tabIndex}"><span>${F(m(e.message.text,t))}</span></div>
`}function j(e,t){return t.showTab?`<span class="tg">${s(e.tab.name)}</span>`:``}function U(e){return`<time>${k(e.timestamp)}</time>`}function Ce(e,t,a){let r=e.image,o=r?a.options.imageSrcResolver?.(r)??r.url:``;if(r&&o)return`<img data-img-key="${$(o)}" alt="">`;return`<span class="ini">${s(Array.from(t.trim())[0]??``)}</span>`}function Ae(e,t){let{labels:a}=t,r=t.options.userId,o=C$1.referencedLine(e.quoteOf?e.quoteOfMessage:null,r),n=C$1.referencedLine(e.replyTo?e.replyToMessage:null,r),i=``;return o&&(i+=P(`❝`,o,280,a.quote,t)),n&&(i+=P(`↩`,n,120,a.reply,t)),i}function P(e,t,a,r,o){let n=m(t.name,o)||r,i=C$1.isSealed(t,o.options.userId)?o.labels.secret:C$1.referenceExcerpt(t,a,o.options.textDecoder);return`<div class="ref"><span class="rn">${e} ${s(n)}</span><span class="rt">${s(i)}</span></div>`}function B(e,t){let{reactionsOf:a}=t.options;if(!a||!e.identifier)return``;let r=a(e.identifier);return r.length<1?``:`<div class="rx" aria-label="${$(t.labels.reactions)}">`+r.map(o=>`<span>${s(o.label)} <b>${o.count}</b></span>`).join(``)+`</div>`}function Ie(e,t){let a=(e.attachmentImages??[]).map(r=>{let o=t.options.imageSrcResolver?.(r)??r.url;return o?`<img data-img-key="${$(o)}" alt="${$(r.name||``)}">`:``}).filter(r=>r.length>0).join(``);return a?`<div class="att">${a}</div>`:``}function F(e){return C$1.escapeHtmlLines(e)}function Ne(e){let t=ut(e).split(`
`);return t.map((a,r)=>{let o=t[r+1],n=a.lastIndexOf(`→`);if(n<0||o!=null&&o.trimStart().startsWith(`→`))return s(a);let i=a.slice(n+1).trim();return i?`${s(a.slice(0,n+1))} <strong class="res">${s(i)}</strong>`:s(a)}).join(`<br>`)}function ze(e){return me.exec(e)?.[1]??e}function m(e,t){return C$1.decode(e,t.options.textDecoder)}function N(e){let t=(e??``).trim().toLowerCase();return xe.test(t)?t:ge}function Me(e){if(e.length<1)return``;let t=e[0].message.placedAt,a=e[e.length-1].message.placedAt,r=A(t);return u(t)===u(a)?`${r} \u2013 ${k(a)}`:`${r} \u2013 ${A(a)}`}function E(e){return String(e).padStart(2,`0`)}function u(e){let t=new Date(e);return`${t.getFullYear()}/${E(t.getMonth()+1)}/${E(t.getDate())}`}function k(e){let t=new Date(e);return`${E(t.getHours())}:${E(t.getMinutes())}`}function A(e){return`${u(e)} ${k(e)}`}var z=`    `;var De=280;var _e=120;function W(e,t,a={}){let r=r$1(r$1({},I),a.labels),o=e===`all`?C$1.spokenTabs(t):t.slice(0,1),n=e===`all`?C$1.mergeEntries(o,a.userId):(o[0]?.chatMessages??[]).filter(f=>C$1.isVisibleMessage(f,a.userId)).map(f=>({tab:o[0],tabIndex:0,message:f})),i=e===`all`&&o.length>1,c=e===`all`?r.allTabs:o[0]?.name??``,p=[a.roomName?`${c} \u2014 ${a.roomName}`:c];p.push(a.exportedAt!=null?`${r.exportedWith} \xB7 ${u(a.exportedAt)} ${k(a.exportedAt)}`:r.exportedWith);let b=``;for(let f of n){let g=u(f.message.placedAt);g!==b&&(b=g,p.push(``,`--- ${g} ---`)),p.push(...Re(f,i,r,a))}return p.join(`
`)+`
`}function Re(e,t,a,r){let{message:o}=e,n=`[${k(o.timestamp)}] `+(t?`[${e.tab.name}] `:``)+`${C$1.decode(o.name,r.textDecoder)}\uFF1A`,i=C$1.isSealed(o,r.userId)?[`\uFF08${a.secret}\uFF09`]:He(o,r),c=(o.fixd?`\uFF08${a.edited}\uFF09`:``)+(o.isPseudoDeleted?`\uFF08${a.pseudoDeleted}\uFF09`:``),[p=``,...b]=i,f=C$1.isSealed(o,r.userId)?``:C$1.reactionSummary(o,r.reactionsOf);return[n+p+c,...b.map(g=>z+g),...qe(o,a,r).map(g=>z+g),...f?[`${z}${a.reactions}: ${f}`]:[]]}function He(e,t){let r=J(ut(H$1(e.vnEmote,C$1.decode(e.text,t.textDecoder))),t).split(/\r?\n/);for(let o of e.attachmentImages??[])r.push(`[${o.name||`?`}]`);return r}function qe(e,t,a){let r=[],o=C$1.referencedLine(e.quoteOf?e.quoteOfMessage:null,a.userId),n=C$1.referencedLine(e.replyTo?e.replyToMessage:null,a.userId);return o&&r.push(`\u275D ${t.quote} ${Y(o,De,t,a)}`),n&&r.push(`\u21A9 ${t.reply} ${Y(n,_e,t,a)}`),r}function Y(e,t,a,r){return`${C$1.decode(e.name,r.textDecoder)}\uFF1A${C$1.isSealed(e,r.userId)?a.secret:J(C$1.referenceExcerpt(e,t,r.textDecoder),r)}`}function J(e,t){return t.ruby?.show===`hidden`?e.replace(d,`$1`):e.replace(d,(a,r,o)=>`${r}\uFF08${nt(o)}\uFF09`)}var Pe={name:``,chatMessages:[]};function da(e,t,a,r={}){return e===`text`?W(t,a,r):Ge(je(e,t,a,r),r)}function Ge(e,t){let a=`<style>${p(t.ruby??r)}</style>`,r$2=e.indexOf(`</head>`);return r$2<0?a+e:e.slice(0,r$2)+a+e.slice(r$2)}function je(e,t,a,r){let{userId:o,imageSrcResolver:n,textDecoder:i,reactionsOf:c}=r,p=a[0]??Pe;switch(e){case`standard`:return t===`all`?C$1.exportAllTabsHtml(a,r.showTime??!0,o,n,i,c):C$1.exportTabHtml(p,o,n,i,c);case`coc`:return t===`all`?C$1.exportAllTabsHtmlCoc(a,o,n,i):C$1.exportTabHtmlCoc(p,o,n,i);default:return G(e,t,a,r)}}export{da as t};