import assert from 'node:assert/strict';
import * as THREE from 'three';
import {batchStatic,pixelBudget} from '../src/render-budget.js';
import {createSceneEntry} from '../src/scene-entry.js';
for(const [w,h] of [[768,1024],[1024,768],[1366,1024],[1024,1366]]){const ratio=pixelBudget(w,h,true,2);assert(w*h*ratio*ratio<=1100001);assert(ratio<=1,'Tablet never renders a Retina-sized buffer');}
const root=new THREE.Group(),nested=new THREE.Group();root.position.set(3,2,-4);root.rotation.y=.3;root.add(nested);nested.position.set(4,1,2);const material=new THREE.MeshStandardMaterial();
for(let i=0;i<100;i++){const box=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),material);box.position.x=i; nested.add(box);}
const moving=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),material);moving.userData.keepDynamic=true;root.add(moving);
const target=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),material);target.userData.filmTarget='object';root.add(target);
const collision=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),material);root.add(collision);
root.updateWorldMatrix(true,true);const before=new THREE.Box3().setFromObject(root),stats=batchStatic(root,new Set([collision]));const after=new THREE.Box3().setFromObject(root);
assert(stats.after<=4,'One hundred static meshes reduce to one draw');assert(before.min.distanceTo(after.min)<.0001&&before.max.distanceTo(after.max)<.0001,'World-space geometry remains in place');assert(moving.parent&&target.parent&&collision.parent,'Animation, targeting and collision meshes remain live');
const queue=[],calls=[];let broken=false;
const entry=createSceneEntry({schedule:f=>queue.push(f),paint:n=>calls.push(['paint',n]),open:n=>{if(broken)throw Error('GPU setup');calls.push(['open',n])},fail:(e,n)=>calls.push(['fail',n]),cancel:()=>calls.push(['cancel'])});
entry.start(1);assert(entry.pending);queue.shift()();assert(entry.pending,'Loading can paint before scene construction');entry.cancel();queue.shift()();assert(!calls.some(x=>x[0]==='open'),'Return button cancels queued entry');
entry.start(2);queue.shift()();queue.shift()();assert.deepEqual(calls.at(-1),['open',2]);broken=true;entry.start(3);queue.shift()();queue.shift()();assert.deepEqual(calls.at(-1),['fail',3]);assert(!entry.pending,'Failed construction cannot trap the input gate');
entry.start(4);entry.start(5);while(queue.length)queue.shift()();assert.deepEqual(calls.at(-1),['fail',5],'Only the newest entry survives rapid repeated taps');
console.log('PASS: tablet pixel budget, static geometry batching, live interactions, cancellable entry and failed-scene recovery.');
