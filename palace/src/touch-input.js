// One finger owns the scene gesture; other fingers may still use the movement pad.
export function bindScenePointer(surface,{blocked,down,move,up,cancel}){
 let owner=null;
 const clear=e=>{if(owner===null||(e&&e.pointerId!==owner))return;owner=null;cancel();};
 surface.addEventListener('pointerdown',e=>{if(blocked()||owner!==null||e.button>0)return;owner=e.pointerId;try{surface.setPointerCapture(owner)}catch{/* Touch already has implicit capture on supported browsers. */}try{down(e)}catch(error){owner=null;cancel();throw error}});
 surface.addEventListener('pointermove',e=>{if(blocked())return;if(owner!==null&&owner!==e.pointerId)return;if(owner===null&&e.pointerType!=='mouse')return;move(e);});
 surface.addEventListener('pointerup',e=>{if(e.pointerId!==owner)return;owner=null;if(blocked())cancel();else up(e);});
 surface.addEventListener('pointercancel',clear);
 surface.addEventListener('lostpointercapture',clear);
 return ()=>clear();
}
