import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Vector3,Box3} from 'three';
const elements=new Map(),element=()=>({dataset:{},hidden:false,style:{},textContent:'',classList:{add(){},remove(){}},setAttribute(){},querySelectorAll(){return[]}});
const ctx=new Proxy({},{get:(o,k)=>o[k]??(()=>{}),set:(o,k,v)=>{o[k]=v;return true}});
globalThis.document={body:element(),querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s)},createElement(){return{width:0,height:0,getContext(){return ctx}}}};
globalThis.innerWidth=1280;globalThis.innerHeight=720;globalThis.matchMedia=()=>({matches:false});
const {NovelFilm}=await import('../src/novel-film.js');
const {SCORES,storyFor,paginate}=await import('../src/novel-scores.js');
let frames=0;const renderer={render(scene,camera){scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);frames++;scene.traverse(o=>assert(Number.isFinite(o.position.x+o.position.y+o.position.z+o.quaternion.w),'Finite scene transforms'))}};
const film=new NovelFilm(renderer,{onExit(){}});film.sounds=false;
const advance=seconds=>{for(let i=0;i<Math.ceil(seconds*30);i++)film.update(1/30)};
const point=obj=>{film.scene.updateMatrixWorld(true);const candidates=[new Box3().setFromObject(obj).getCenter(new Vector3())];obj.traverse(o=>{if(o.isMesh)candidates.push(o.getWorldPosition(new Vector3()))});for(const candidate of candidates){const p=candidate.project(film.camera),xy=[(p.x+1)*innerWidth/2,(1-p.y)*innerHeight/2];if(film.hit(...xy)===obj.userData.id)return xy;}throw Error('No visible raycast point for '+obj.userData.id+' in '+film.work.n+'.'+film.phase);};
let chineseCharacters=0,englishCharacters=0,beats=0,performed=0;
for(const n of Object.keys(SCORES).map(Number)){
 const story=storyFor(n);assert.equal(story.spaces.length,3);assert.equal(story.objects.length,3);assert.equal(story.cues.length,3,'Three authored cue sequences');
 const source=JSON.parse(await readFile(new URL(`../public/manuscripts/${String(n).padStart(2,'0')}.json`,import.meta.url),'utf8'));assert.equal(source.n,n);assert(source.paragraphs.length>10);englishCharacters+=source.paragraphs.join('').length;
 const originalPages=paginate(source.paragraphs,true);assert.equal(originalPages.flat().join('').replace(/\s/g,''),source.paragraphs.join('').replace(/\s/g,''),'No manuscript words lost in pagination');
 film.open(n);film.english=source.paragraphs;film.originalPages=originalPages;
 for(let phase=0;phase<3;phase++){
  advance(9);assert.equal(film.state,'wait',`${n}.${phase}: waits for a real object`);advance(1);let xy=point(film.prop);const picked=film.hit(...xy);film.pointerDown(...xy);if(!['working','holding','perform'].includes(film.state))console.log({n,phase,xy,picked,state:film.state,kind:film.kind,position:film.prop.position.toArray(),children:film.prop.children.length});
  assert(['working','holding','perform'].includes(film.state),`${n}.${phase}: actual raycast picks object`);
  if(film.state==='holding'&&story.phases[phase].mode==='dispatch'){advance(1);xy=point(film.slot);film.pointerUp(...xy);assert.equal(film.state,'perform','Delivery into actual tray');}
  else if(film.state!=='perform'){film.pointerMove(xy[0]+innerWidth*.6,xy[1]+innerHeight*.6);film.pointerUp(xy[0]+innerWidth*.6,xy[1]+innerHeight*.6);assert.equal(film.state,'perform','Gesture starts consequence');}
  advance(2);if(film.isPaper&&!film.dispatching){const backUp=new Vector3(0,1,0).transformDirection(film.prop.userData.back.matrixWorld),up=new Vector3(0,1,0).applyQuaternion(film.camera.quaternion);assert(backUp.dot(up)>.99,'Reverse face stays upright in every chapter');}
  film.setPaused(true);const elapsed=film.elapsed,beat=film.beat;advance(1);assert.equal(film.elapsed,elapsed);assert.equal(film.beat,beat);film.setPaused(false);
  const read=[];let guard=0;while(film.state==='perform'){read.push(elements.get('#filmCaption').textContent);advance(.5);assert(++guard<1200,'Performance completes');}
  for(const text of story.phases[phase].beats)assert(read.includes(text),`${n}.${phase}: every authored sentence gets screen time`);
  chineseCharacters+=story.phases[phase].beats.join('').length;beats+=story.phases[phase].beats.length;performed++;
  if(phase<2){assert.equal(film.state,'transition');advance(2);assert.equal(film.phase,phase+1);}
 }
 assert.equal(film.state,'epilogue');advance(2);film.keyDown({code:'KeyE',preventDefault(){}});film.keyUp({code:'KeyE'});assert.equal(film.state,'book');advance(1);film.showBook(film.notePages.length-1);assert.equal(film.page,film.notePages.length-1);film.switchBook();assert.equal(film.language,'en');film.showBook(film.originalPages.length-1);assert.equal(film.page,film.originalPages.length-1);film.putBook();assert.equal(film.state,'epilogue');film.close();
}
// Narrow screens retain access to held text and keyboard alternatives.
globalThis.innerWidth=390;globalThis.innerHeight=844;film.open(4);advance(9);film.keyDown({code:'KeyE',preventDefault(){}});film.keyUp({code:'KeyE'});advance(2);for(const x of[-.23,.23])for(const z of[-.325,.325]){const corner=film.prop.localToWorld(new Vector3(x,0,z)).project(film.camera);assert(Math.abs(corner.x)<1&&Math.abs(corner.y)<1,'Paper fits portrait screen');}film.keyDown({code:'KeyE',preventDefault(){}});advance(2);film.keyUp({code:'KeyE'});assert.equal(film.state,'perform');film.close();
console.log(JSON.stringify({pass:true,chapters:23,performances:performed,beats,chineseCharacters,englishCharacters,frames},null,2));

// The shared controls must follow the active film after switching engines.
const {StoryDirector}=await import('../src/story-engine.js');
const director=new StoryDirector(renderer,{onClose(){}});
for(const n of [3,1,3,24]){
 director.open(n);const active=director.film,other=active===director.pilot?director.novel:director.pilot;
 assert(active.active&&!other.active,'Only the selected film runs');
 elements.get('#filmPause').onclick();assert(active.paused,'Pause belongs to the active film');assert(!other.paused,'Inactive film receives no pause');elements.get('#filmPause').onclick();
 const sounds=active.sounds;active.sounds=true;active.audio={state:'running'};active.setAudioLevel=()=>{};elements.get('#filmAudio').onclick();assert.equal(active.sounds,false,'Audio controls belong to the active film');active.audio=null;active.sounds=sounds;
}
director.pilot.onNext();assert.equal(director.film,director.novel);assert.equal(director.novel.work.n,4);
director.novel.onNext(3);assert.equal(director.film,director.pilot);
director.novel.onNext(25);assert.equal(director.active,false);
console.log('PASS: engine switching, shared controls, chapter 3 continuation and final exit.');

// iPad paper and book gestures in both orientations, without a keyboard.
globalThis.matchMedia=()=>({matches:true});
for(const [width,height] of [[768,1024],[1024,768],[820,1180],[1180,820]]){
 globalThis.innerWidth=width;globalThis.innerHeight=height;film.open(4);advance(9);let xy=point(film.prop);film.pointerDown(...xy);advance(2);
 for(const x of[-.23,.23])for(const z of[-.325,.325]){const corner=film.prop.localToWorld(new Vector3(x,0,z)).project(film.camera);assert(Math.abs(corner.x)<1&&Math.abs(corner.y)<1,'Held paper fits iPad orientation');}
 film.setState('epilogue');film.keyDown({code:'KeyE',preventDefault(){}});film.keyUp({code:'KeyE'});advance(2);assert.equal(elements.get('#bookTools').hidden,false,'Book controls are visible');
 xy=point(film.book);film.pointerDown(...xy);film.pointerMove(xy[0]-100,xy[1]);assert.equal(film.page,0,'Touch-down does not turn before gesture completes');film.pointerUp(xy[0]-100,xy[1]);assert.equal(film.page,1,'Left swipe turns forward');
 xy=point(film.book);film.pointerDown(...xy);film.pointerUp(xy[0]+100,xy[1]);assert.equal(film.page,0,'Right swipe goes backward');
 xy=point(film.book);film.pointerDown(...xy);film.pointerUp(xy[0],xy[1]+100);assert.equal(film.page,0,'Vertical drag does not accidentally turn');
 elements.get('#bookLanguage').onclick();assert.equal(film.language,'en','Touch button changes notebook');elements.get('#bookPutDown').onclick();assert.equal(film.state,'epilogue');advance(.1);assert.equal(elements.get('#bookTools').hidden,true);film.close();
}
console.log('PASS: iPad portrait/landscape paper bounds, swipe direction, no premature turns, touch notebook switching and put-down.');
