export function createSceneEntry({schedule,paint,open,fail,cancel}){
 let generation=0,pending=false;
 return {get pending(){return pending},start(n){const ticket=++generation;pending=true;paint(n);schedule(()=>schedule(()=>{if(ticket!==generation)return;pending=false;try{open(n)}catch(error){fail(error,n)}}));},cancel(){generation++;pending=false;cancel();}};
}
