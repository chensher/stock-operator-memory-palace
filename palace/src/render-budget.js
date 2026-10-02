import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

export function touchDevice(){return (typeof navigator!=='undefined'&&navigator.maxTouchPoints>0)||matchMedia('(any-pointer: coarse)').matches;}
export function pixelBudget(width,height,touch=touchDevice(),ratio=typeof devicePixelRatio==='number'?devicePixelRatio:1){return Math.min(ratio,touch?1:1.5,Math.sqrt((touch?1100000:3000000)/Math.max(1,width*height)));}

// Batch only unchanging geometry. Interactive, animated and collision meshes
// retain their own transforms and raycast identities.
export function batchStatic(root,exclude=new Set()){
 root.updateWorldMatrix(true,true);const inverse=root.matrixWorld.clone().invert(),groups=new Map();let before=0;
 root.traverse(o=>{if(!o.isMesh||Array.isArray(o.material)||o.material.transparent)return;before++;let p=o;while(p){if(exclude.has(p)||p.userData.keepDynamic||p.userData.filmTarget)return;if(p===root)break;p=p.parent;}const key=o.material.uuid+'|'+o.castShadow+'|'+o.receiveShadow;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(o);});
 let removed=0,batches=0;
 for(const objects of groups.values()){
  if(objects.length<2)continue;
  const geometries=objects.map(o=>o.geometry.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld)));
  const merged=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());if(!merged)continue;
  const mesh=new THREE.Mesh(merged,objects[0].material);mesh.castShadow=objects[0].castShadow;mesh.receiveShadow=objects[0].receiveShadow;root.add(mesh);
  for(const o of objects){o.removeFromParent();o.geometry.dispose();removed++;}batches++;
 }
 return {before,after:before-removed+batches,removed,batches};
}
