import {TickerFilm} from './ticker-film.js';
import {NovelFilm} from './novel-film.js';
const $=s=>document.querySelector(s);
export class StoryDirector{
 constructor(renderer,{onClose}){this.onClose=onClose;this.active=false;this.pilot=new TickerFilm(renderer,{onExit:()=>this.close()});this.novel=new NovelFilm(renderer,{onExit:()=>this.close()});this.film=this.pilot;this.pilot.onNext=()=>this.open(4);this.novel.onNext=n=>n>24?this.close():this.open(n);}
 open(n){if(!Number.isInteger(n)||n<1||n>24)return;if(this.film.active)this.film.close();this.film=n===3?this.pilot:this.novel;this.active=true;$('#episode').hidden=true;document.body.classList.add('in-story');this.film.open(n);}
 close(){if(this.film.active)this.film.close();this.active=false;$('#episode').hidden=true;document.body.classList.remove('in-story');this.onClose?.();}
 update(dt){if(this.active)this.film.update(dt);}
}
