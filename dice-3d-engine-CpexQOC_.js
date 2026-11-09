import{a as Tt,c as ce,d as jt,f as le,i as Kt,l as fe$1,m as vt,n as Dt,o as Ut,p as qt,r as Ft,s as Zt,t as $t,u as he}from"./chunk-iODO93Ft.js";import{$t as _t,At as Vl,B as Jr,Et as Ue,Ft as Ws,Ir as wt,Lt as Xe,Nr as vo,Qt as _l,Ut as Ye,Vn as kt,ar as od,c as Al,er as nl,g as D,j as He$1,lr as pi,un as ea,v as De$1,vt as Se$1,x as El}from"./chunk-CpJULkqh.js";import"./main-433YT52R.js";import{a as Ft$1,c as Ot,l as P,u as Pt}from"./chunk-CngkrtWk.js";import{n as s,t as r}from"./chunk-Ch7qlBDL.js";var fe=`
uniform sampler2D diceMarks;
uniform vec3 diceVein;
uniform float diceSeed;
varying vec3 vDiceSpot;

float diceHash( vec3 p ) {
  p = fract( p * 0.3183099 + vec3( 0.71, 0.113, 0.419 ) );
  p *= 17.0;
  return fract( p.x * p.y * p.z * ( p.x + p.y + p.z ) );
}

float diceNoise( vec3 x ) {
  vec3 i = floor( x );
  vec3 f = fract( x );
  f = f * f * ( 3.0 - 2.0 * f );
  return mix(
    mix( mix( diceHash( i ), diceHash( i + vec3( 1.0, 0.0, 0.0 ) ), f.x ),
         mix( diceHash( i + vec3( 0.0, 1.0, 0.0 ) ), diceHash( i + vec3( 1.0, 1.0, 0.0 ) ), f.x ), f.y ),
    mix( mix( diceHash( i + vec3( 0.0, 0.0, 1.0 ) ), diceHash( i + vec3( 1.0, 0.0, 1.0 ) ), f.x ),
         mix( diceHash( i + vec3( 0.0, 1.0, 1.0 ) ), diceHash( i + vec3( 1.0, 1.0, 1.0 ) ), f.x ), f.y ),
    f.z );
}

float diceFbm( vec3 p ) {
  float sum = 0.0;
  float weight = 0.5;
  for ( int octave = 0; octave < 5; octave++ ) {
    sum += weight * diceNoise( p );
    p = p * 2.03 + vec3( 11.7, 3.1, 7.9 );
    weight *= 0.5;
  }
  return sum;
}
`;var be=`
float diceMark = texture2D( diceMarks, vMapUv ).r;
`;var Ee=`
vec3 diceAt = vDiceSpot * 0.9 + vec3( diceSeed, diceSeed * 0.61, diceSeed * 1.37 );
float diceWarp = diceFbm( diceAt * 1.3 );
float diceSwirl = 0.5 + 0.5 * sin( ( diceAt.x * 1.1 + diceAt.y * 0.7 + diceAt.z * 0.4 ) * 2.2 + diceWarp * 6.5 );
float diceVeined = smoothstep( 0.45, 0.95, diceSwirl ) * 0.65;
float diceEdge = smoothstep( 0.38, 0.46, diceSwirl ) - smoothstep( 0.46, 0.56, diceSwirl );
vec3 diceStone = mix( diffuseColor.rgb, diceVein, diceVeined ) * ( 1.0 - diceEdge * 0.3 );
diffuseColor.rgb = mix( diceStone, diffuseColor.rgb, diceMark );
`;var Oe=`
vec3 dicePictureWeight = pow( abs( normalize( vDiceNormal ) ), vec3( 4.0 ) );
dicePictureWeight /= dicePictureWeight.x + dicePictureWeight.y + dicePictureWeight.z;
vec2 dicePictureShift = vec2( diceSeed * 0.1371, diceSeed * 0.2913 );
vec3 dicePictureAt = vDiceSpot * 0.5;
vec4 dicePictureColor =
  texture2D( dicePicture, dicePictureAt.yz + dicePictureShift ) * dicePictureWeight.x +
  texture2D( dicePicture, dicePictureAt.xz + dicePictureShift ) * dicePictureWeight.y +
  texture2D( dicePicture, dicePictureAt.xy + dicePictureShift ) * dicePictureWeight.z;
vec3 diceWorn = mix( diffuseColor.rgb, dicePictureColor.rgb, dicePictureColor.a );
diffuseColor.rgb = mix( diceWorn, diffuseColor.rgb, diceMark );
`;var De=`
roughnessFactor = mix( roughnessFactor, 0.55, diceMark );
`;var Te=`
metalnessFactor *= 1.0 - diceMark;
`;var We=kt.transmission_fragment.replace(`material.transmission = transmission;`,`material.transmission = transmission * ( 1.0 - diceMark );`);function ue(c,e){return t=>{Object.assign(t.uniforms,e);let i=c===`picture`;t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vDiceSpot;${i?`
varying vec3 vDiceNormal;`:``}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vDiceSpot = position;${i?`
vDiceNormal = normal;`:``}`);let r=i?`${fe}
uniform sampler2D dicePicture;
varying vec3 vDiceNormal;`:fe,a=c===`marble`?Ee:i?Oe:``,s=t.fragmentShader.replace(`#include <common>`,`#include <common>
${r}`).replace(`#include <map_fragment>`,`#include <map_fragment>
${be}${a}`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
${De}`);c===`metal`&&(s=s.replace(`#include <metalnessmap_fragment>`,`#include <metalnessmap_fragment>
${Te}`)),c===`glass`&&(s=s.replace(`#include <transmission_fragment>`,We)),t.fragmentShader=s}}var ke=24;var _e=[[`d6`,`standard`],[`d20`,`standard`],[`d10`,`standard`],[`d10`,`tens`],[`d8`,`standard`],[`d12`,`standard`],[`d4`,`standard`],[`d6`,`d3`]];var L=1024;var Re=18;var ge=72*Math.PI/180;var $e=2;var He=3;var N=8;var Fe=.22;var ve=60;var Le=.62;var xe=.5;var we=class c{constructor(){this.scene=new nl,this.frameCamera=new De$1(30,2,.5,400),this.tableCamera=new De$1,this.light=new Vl(16777215,2.4),this.geometries=/* @__PURE__ */ new Map,this.contactGeometry=new Ws(1,1),this.contactTexture=Kt(),this.haloTexture=qt(),this.materials=/* @__PURE__ */ new Map,this.engravings=/* @__PURE__ */ new Map,this.marks=/* @__PURE__ */ new Map,this.metalLight=null,this.pictures=/* @__PURE__ */ new Map,this.pictureTones=/* @__PURE__ */ new Map,this.warmed=/* @__PURE__ */ new Set([`resin`]),this.carved=/* @__PURE__ */ new Map,this.lost=!1,this.canvas=document.createElement(`canvas`),this.renderer=new od({canvas:this.canvas,antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:`high-performance`}),this.renderer.outputColorSpace=He$1,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.setClearColor(0,0),this.canvas.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),this.lost=!0});let e=new vo(this.renderer);this.scene.environment=e.fromScene(jt(),.02).texture,e.dispose(),this.light.castShadow=!0,this.light.shadow.mapSize.set(L,L),this.light.shadow.bias=-4e-4,this.light.shadow.normalBias=.02,this.scene.add(this.light,this.light.target),this.shadowCatcher=new Ye(new Ws(1,1),new Al({opacity:xe})),this.shadowCatcher.receiveShadow=!0,this.scene.add(this.shadowCatcher),this.frameCamera.up.set(0,0,1),this.tableCamera.matrixAutoUpdate=!1,this.tableCamera.matrixWorldAutoUpdate=!1}static async create(){let e=new c,t=e.prepare({dice:[{shape:`d6`,labels:`standard`}],color:`#202024`,accent:`critical`,tray:{halfWidth:4,halfDepth:2},result:Se});return e.scene.add(t.root),e.fit({width:64,height:32,pixelRatio:1}),e.layOut(t.tray,{kind:`frame`},2),await e.renderer.compileAsync(e.scene,e.frameCamera),e.scene.remove(t.root),e.engraveAhead(),e}async warm(e){if(this.warmed.has(e)||this.lost)return;this.warmed.add(e);let t=this.prepare({dice:[{shape:`d6`,labels:`standard`}],color:`#202024`,material:e,tray:{halfWidth:4,halfDepth:2},result:Se}),i=new nl;i.add(t.root);try{await this.renderer.compileAsync(i,this.frameCamera,this.scene)}finally{i.remove(t.root),this.release(t)}}get isLost(){return this.lost}prepare(e){let t=new pi,i=[],r=e.picture??null,a=r?this.colorsUnder(r,e.color,e.ink):ce(e.color,e.ink),s=r?`resin`:e.material??`resin`,o=e.dice.map((h,G)=>{let C=new pi,u=this.materialOf(h.shape,h.labels,a,s,r),z=Zt(e.seedKey??``,G),P=s===`marble`?this.ownMaterial(u,`marble`,h.shape,h.labels,a,z):r?.fit===`wrap`?this.ownMaterial(u,`picture`,h.shape,h.labels,a,z,this.textureOf(r)):u;P!==u&&i.push(P);let g=new Ye(this.geometryOf(h.shape),P);g.castShadow=!0,g.scale.setScalar(Ot(h.shape));let[ye,Ae,Ce,Pe]=e.result.corrections[G];return g.quaternion.set(ye,Ae,Ce,Pe),C.add(g),t.add(C),C}),n=e.dice.map(()=>{let h=new Ye(this.contactGeometry,new ea({color:0,map:this.contactTexture,transparent:!0,depthWrite:!1}));return t.add(h),h}),l=e.accent?Ut[e.accent]:null,d=l?e.dice.map(()=>{let h=new Ye(this.contactGeometry,new ea({color:l,map:this.haloTexture,transparent:!0,depthWrite:!1,blending:2,opacity:0}));return t.add(h),h}):[],{restSeconds:m,totalSeconds:A,endSeconds:Me}=Pt(e.result,l!==null);return{root:t,bodies:o,halos:d,owned:i,endSeconds:Me,contacts:n,radii:e.dice.map(h=>Ot(h.shape)),restHeights:e.dice.map(h=>P(h.shape).inradius*Ot(h.shape)),result:e.result,tray:e.tray,restSeconds:m,totalSeconds:A}}render(e,t,i,r){let a=this.fit(r);if(this.lost)return a;$t(e,t),this.scene.add(e.root);let s=this.layOut(e.tray,i,r.width/r.height);return this.renderer.render(this.scene,s),this.scene.remove(e.root),a}release(e){for(let t of[...e.contacts,...e.halos])t.material.dispose();for(let t of e.owned)t.dispose()}forgetPicture(e){this.pictures.get(e)?.dispose(),this.pictures.delete(e),this.pictureTones.delete(e);for(let[t,i]of this.materials)!t.endsWith(`|${e}:wrap`)&&!t.endsWith(`|${e}:faces`)||(this.materials.delete(t),I(i))}dispose(){this.geometries.forEach(e=>e.dispose()),this.materials.forEach(I),this.engravings.forEach(e=>e.dispose()),this.marks.forEach(e=>e.dispose()),this.metalLight?.dispose(),this.pictures.forEach(e=>e.dispose()),this.carved.clear(),this.contactGeometry.dispose(),this.contactTexture.dispose(),this.haloTexture.dispose(),this.renderer.dispose()}fit(e){let t=Math.max(1,Math.round(e.width)),i=Math.max(1,Math.round(e.height));this.renderer.getPixelRatio()!==e.pixelRatio&&this.renderer.setPixelRatio(e.pixelRatio);let r=this.renderer.getSize(new _t);(r.x<t||r.y<i)&&this.renderer.setSize(Math.max(r.x,t),Math.max(r.y,i),!1);let a=this.renderer.getSize(new _t).y;this.renderer.setViewport(0,a-i,t,i);let s=this.renderer.getPixelRatio();return{x:0,y:0,width:Math.round(t*s),height:Math.round(i*s)}}layOut(e,t,i){let r=t.kind===`frame`;this.shadowCatcher.material.opacity=r?Le:xe,r?this.shadowCatcher.scale.set(ve*2,ve*2,1):this.shadowCatcher.scale.set((e.halfWidth+N)*2,(e.halfDepth+N)*2,1);let a=Math.max(e.halfWidth,e.halfDepth);this.light.position.set(-a*1.6,a*.5,a*1.9),this.light.target.position.set(0,0,0);let s=this.light.shadow.camera,o=r?He:N;if(s.left=-e.halfWidth-o,s.right=e.halfWidth+o,s.top=e.halfDepth+o,s.bottom=-e.halfDepth-o,s.near=1,s.far=a*6,s.updateProjectionMatrix(),this.light.shadow.radius=Fe*L/(s.right-s.left),t.kind===`table`){let n=this.tableCamera,[l,d,m]=t.eye??[0,0,0];return n.matrixWorld.makeTranslation(l,d,m),n.matrixWorldInverse.makeTranslation(-l,-d,-m),n.projectionMatrix.fromArray(Array.from(t.projection)).multiply(n.matrixWorld),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),n}return Ne(this.frameCamera,e,i),this.frameCamera}geometryOf(e){let t=this.geometries.get(e);if(!t){let i=Ft$1(e);t=new Ue,t.setAttribute(`position`,new Xe(i.positions,3)),t.setAttribute(`normal`,new Xe(i.normals,3)),t.setAttribute(`uv`,new Xe(i.uvs,2)),t.setAttribute(`tangent`,new Xe(i.tangents,4)),t.setIndex(new Xe(i.indices,1)),this.geometries.set(e,t)}return t}engravingOf(e,t){let i=`${e}|${t}`,r=this.engravings.get(i);return r||(r=new _l(this.carvingOf(e,t)),r.colorSpace=``,this.engravings.set(i,r),this.carved.delete(i)),r}carvingOf(e,t){let i=`${e}|${t}`,r=this.carved.get(i);return r||(r=he(e,t),this.carved.set(i,r)),r}engraveAhead(){let t=_e.filter(([a,s])=>{let o=`${a}|${s}`;return!this.engravings.has(o)&&!this.carved.has(o)})[0];if(!t||this.lost)return;let i=globalThis.requestIdleCallback;(a=>typeof i==`function`?i(a,{timeout:2e3}):setTimeout(a,50))(()=>{this.carvingOf(t[0],t[1]),this.engraveAhead()})}dress(e,t,i,r$1,a,s,o=null){e.onBeforeCompile=ue(t,r({diceMarks:{value:this.marksOf(i,r$1)},diceVein:{value:Ft(a.body)},diceSeed:{value:s}},o?{dicePicture:{value:o}}:{})),e.customProgramCacheKey=()=>`dice-${t}`}ownMaterial(e,t,i,r$2,a,s$1,o=null){let n=new El(s(r({},vt[t===`marble`?`marble`:`resin`]),{map:e.map,normalMap:e.normalMap,normalScale:e.normalScale}));return this.dress(n,t,i,r$2,a,s$1,o),n}colorsUnder(e,t,i){this.pictureTones.has(e.key)||this.pictureTones.set(e.key,fe$1(e.source));let r=this.pictureTones.get(e.key)??t,a=ce(r,i);return{body:ce(t).body,ink:a.ink,accent:a.accent}}textureOf(e){let t=this.pictures.get(e.key);return t||(t=new Se$1(e.source),t.colorSpace=`srgb`,t.wrapS=t.wrapT=1e3,t.flipY=!1,t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),t.needsUpdate=!0,this.pictures.set(e.key,t)),t}metalStudio(){if(!this.metalLight){let e=new vo(this.renderer);this.metalLight=e.fromScene(jt(!0),.02).texture,e.dispose()}return this.metalLight}marksOf(e,t){let i=`${e}|${t}`,r=this.marks.get(i);return r||(r=new _l(Tt(e,t)),r.colorSpace=``,this.marks.set(i,r)),r}materialOf(e,t,i,r$3=`resin`,a=null){let s$2=a?`${a.key}:${a.fit}`:``,o=`${e}|${t}|${r$3}|${i.body}|${i.ink}|${i.accent}|${s$2}`,n=this.materials.get(o);if(n)return this.materials.delete(o),this.materials.set(o,n),n;let l=a?.fit===`faces`?a.source:null,d=new _l(le(e,t,Dt(r$3,i),l));if(d.colorSpace=`srgb`,d.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),n=new El(s(r({},vt[r$3]),{map:d,normalMap:this.engravingOf(e,t),normalScale:new _t(1,1)})),r$3===`metal`&&(n.envMap=this.metalStudio()),r$3===`glass`&&(n.attenuationColor=new wt(i.body)),r$3!==`resin`&&this.dress(n,r$3,e,t,i,0),this.materials.set(o,n),this.materials.size>ke){let[m,A]=this.materials.entries().next().value;this.materials.delete(m),I(A)}return n}};var Se={frameCount:1,restFrame:0,frames:new Float32Array([0,0,1,0,0,0,1]),landed:[0],corrections:[[0,0,0,1]],attempt:0,fault:null};function Ne(c,e,t){c.aspect=t,c.fov=Re;let i=new D(0,-Math.cos(ge),Math.sin(ge)),r=[-1,1].flatMap(o=>[-1,1].flatMap(n=>[0,$e].map(l=>new D(o*e.halfWidth,n*e.halfDepth,l)))),a=1,s=400;for(let o=0;o<40;o++){let n=(a+s)/2;c.position.copy(i).multiplyScalar(n),c.lookAt(0,0,0),c.updateMatrixWorld(),c.updateProjectionMatrix(),r.every(d=>{let m=d.clone().project(c);return Math.abs(m.x)<=1&&Math.abs(m.y)<=1})?s=n:a=n}c.position.copy(i).multiplyScalar(s),c.lookAt(0,0,0),c.near=Math.max(.5,s*.2),c.far=s*3,c.updateMatrixWorld(),c.updateProjectionMatrix()}function I(c){c.map?.dispose(),c.dispose()}export{we as Dice3dEngine};