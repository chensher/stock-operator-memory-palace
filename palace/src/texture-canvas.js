// Allocate the backing store at its final size. Scaling a full-size temporary
// canvas afterwards still exceeds Safari's aggregate canvas memory limit.
export function textureCanvas(width,height,lightweight=false){
 const scale=lightweight?Math.min(1,512/width,1024/height):1;
 const canvas=document.createElement('canvas');
 canvas.width=Math.max(1,Math.round(width*scale));canvas.height=Math.max(1,Math.round(height*scale));
 const context=canvas.getContext('2d');
 if(!context){canvas.width=canvas.height=1;throw new Error('纸面画布无法创建，浏览器可能已耗尽画布内存。请关闭本页后重新打开。');}
 context.scale(canvas.width/width,canvas.height/height);
 return {canvas,context};
}

// Texture.dispose releases GPU storage, but not its canvas backing store.
// Explicitly release it even when a closed scene still has a JS reference.
export function releaseTexture(texture){
 texture.dispose();const image=texture.image;
 if(image&&typeof image.getContext==='function')image.width=image.height=1;
}
