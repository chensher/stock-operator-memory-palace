import {TickerFilm} from './ticker-film.js';
import {NovelFilm} from './novel-film.js';
const $=s=>document.querySelector(s);
export class StoryDirector{
 constructor(renderer,{onClose}){this.onClose=onClose;this.active=false;this.pilot=new TickerFilm(renderer,{onExit:()=>this.close()});this.novel=new NovelFilm(renderer,{onExit:()=>this.close()});this.film=this.pilot;this.pilot.onNext=()=>this.open(4);this.novel.onNext=n=>n>24?this.close():this.open(n);}
 open(n){if(!Number.isInteger(n)||n<1||n>24)return;if(this.film.active)this.film.close();this.chapter=n;this.film=n===3?this.pilot:this.novel;this.active=true;$('#episode').hidden=true;document.body.classList.add('in-story');try{this.film.open(n)}catch(error){this.close();throw error}}
 close(){try{if(this.film.active)this.film.close()}finally{this.active=false;$('#episode').hidden=true;document.body.classList.remove('in-story');this.onClose?.();}}
 update(dt){if(this.active)this.film.update(dt);}
}
