import assert from 'node:assert/strict';
import {Vector3,Box3} from 'three';
const elements=new Map(),element=()=>({dataset:{},style:{},classList:{add(){},remove(){}},setAttribute(){}}),ctx=new Proxy({},{get:()=>()=>{}});
globalThis.document={body:element(),querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s)},createElement(){return{getContext:()=>ctx}}};globalThis.innerWidth=1024;globalThis.innerHeight=768;globalThis.matchMedia=()=>({matches:true});
const {NovelFilm}=await import('../src/novel-film.js');
const film=new NovelFilm({render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true)}},{});film.open(4);film.update(.1);assert.equal(film.state,'arrival');const pos=new Box3().setFromObject(film.prop).getCenter(new Vector3()).project(film.camera),x=(pos.x+1)*512,y=(1-pos.y)*384;assert.equal(film.hit(x,y),'object');film.pointerDown(x,y);assert.equal(film.state,'holding','The object responds during the camera entrance instead of silently rejecting a tap');film.close();console.log('PASS: direct object touch responds before the entrance camera finishes.');
