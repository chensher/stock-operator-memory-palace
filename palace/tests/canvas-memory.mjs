import assert from 'node:assert/strict';
import {Vector3,Box3} from 'three';
import {textureCanvas,releaseTexture} from '../src/texture-canvas.js';

const elements=new Map(),canvases=[];
const element=()=>({dataset:{},hidden:false,style:{},textContent:'',classList:{add(){},remove(){}},setAttribute(){},querySelectorAll(){return[]}});
const context=new Proxy({},{get:(o,k)=>o[k]??(()=>{}),set:(o,k,v)=>{o[k]=v;return true}});
globalThis.document={body:element(),querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s)},createElement(){const c={width:0,height:0,getContext(){return context}};canvases.push(c);return c;}};
globalThis.innerWidth=1024;globalThis.innerHeight=768;globalThis.matchMedia=()=>({matches:true});
const paper=textureCanvas(1024,1447,true),full=textureCanvas(1024,1447,false);
assert.equal(paper.canvas.width,512);assert.equal(paper.canvas.height,724);
assert(paper.canvas.width*paper.canvas.height<=full.canvas.width*full.canvas.height*.251,'Allocate a quarter of the desktop paper backing store');
let disposed=false;releaseTexture({image:paper.canvas,dispose(){disposed=true}});assert(disposed);assert.equal(paper.canvas.width*paper.canvas.height,1);
const originalCreate=document.createElement;document.createElement=()=>({width:1024,height:1447,getContext(){return null}});
assert.throws(()=>textureCanvas(1024,1447,true),/纸面画布无法创建/,'Null canvas context produces an actionable error');document.createElement=originalCreate;

const {TickerFilm}=await import('../src/ticker-film.js');const {NovelFilm}=await import('../src/novel-film.js');
const renderer={render(scene,camera){scene.updateMatrixWorld(true);camera.updateMatrixWorld(true)}};
const film=new NovelFilm(renderer);film.sounds=false;
const advance=seconds=>{for(let i=0;i<Math.ceil(seconds*30);i++)film.update(1/30)};
const point=obj=>{film.scene.updateMatrixWorld(true);const box=new Box3().setFromObject(obj);const p=box.getCenter(new Vector3()).project(film.camera);return[(p.x+1)*innerWidth/2,(1-p.y)*innerHeight/2]};
film.open(2);const firstSceneCanvases=film.textures.map(t=>t.image).filter(c=>c?.getContext);assert(firstSceneCanvases.every(c=>c.width<=512&&c.height<=1024));
const oldTrain=film.train;film.dispose();assert.equal(oldTrain.parent.parent,null,'Disposed scene detaches the old environment');assert.equal(film.train,null,'Closed station cannot keep its scene through the train reference');assert(firstSceneCanvases.every(c=>c.width*c.height===1),'Closed scenes release their 2D backing stores');assert.equal(film.camera.children.length,0,'Old hands do not accumulate on the persistent camera');
film.phase=1;film.build();film.setState('arrival');advance(9);assert(film.isPaper,'Dispatch the written order, not the entire telegraph');
let xy=point(film.prop);film.pointerDown(...xy);assert.equal(film.state,'holding');advance(2);xy=point(film.slot);assert.equal(film.hit(...xy),'slot','Counter tray remains reachable while holding the order');film.pointerUp(...xy);assert.equal(film.state,'perform');advance(3);film.close();
for(let i=0;i<6;i++){film.open(2);assert.equal(film.camera.children.length,1);film.close();assert.equal(film.camera.children.length,0);}
const ticker=new TickerFilm(renderer);ticker.sounds=false;
for(let i=0;i<6;i++){ticker.open();assert.equal(ticker.camera.children.length,1);const images=ticker.textures.map(t=>t.image).filter(c=>c?.getContext);assert(images.every(c=>c.width<=512&&c.height<=1024));ticker.close();assert(images.every(c=>c.width*c.height===1));assert.equal(ticker.camera.children.length,0);}
console.log('PASS: tablet canvas budget, explicit backing-store release, useful null-context error, no retained train/hand, chapter 2 order delivery and repeated chapter 2/3 entry.');
