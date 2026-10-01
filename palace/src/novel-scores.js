import {chapters} from './content.js';
import {episodes} from './episodes.js';
import {DETAILS} from './novel-detail.js';

// Spaces, objects and consequences are authored per event. The original source
// and coverage index live outside the performance, in docs and manuscripts.
const row=(spaces,objects,cues)=>({spaces:spaces.split('/'),objects:objects.split('/'),cues:cues.replaceAll(' / ',' · ').split('/')});
export const SCORES={
1:row('board/counter/counter','chalk/coin/tickets','十四岁 · 抄报价/五美元 → 三美元十二美分/七张票据 · 每张五百股'),
2:row('station/counter/study','suitcase/wire/safe','二十一岁 · 两千五百美元/报价 → 指令 → 成交 → 回报/赢得太多，柜门便关上'),
4:row('wire/wire/station','telegram/telegram/suitcase','一批电报：买入/另一批电报：卖出/本金重来，方法尚未成熟'),
5:row('study/study/board','chair/clock/clock','“这是牛市。”/持仓位置，不是工作/兑现四点，错过随后十点'),
6:row('harbor/wire/rail','newspaper/telegram/lever','灾难到来，价格没有立刻服从/一个可信的人，也会判断错误/事实向上 · 回补，再买入'),
7:row('counter/counter/board','order/order/lever','第一笔：一万股/第二笔：一万股，仍被吸收/回补空头 · 持有一万股多头'),
8:row('study/board/board','drawer/weight/clock','钱越来越紧/方向正确 ≠ 起点合适/等市场开始配合'),
9:row('harbor/street/counter','newspaper/drawer/lever','船上没有仓位/市场有证券，却缺少现金/局势改变 · 停止卖空，回补'),
10:row('cotton/grain/study','lever/gate/mirror','自己停买，价格就退回/1.14 的便宜 / 1.20 的确认/亏损时希望，盈利时恐惧'),
11:row('harbor/grain/press','wheel/grain/newspaper','一千万蒲式耳玉米空头/退路藏在关联商品的反应里/意外买盘 → “棉花之王”'),
12:row('study/grain/cotton','report/transfer/cotton','一万名通信者 / 专家的眼睛/小麦盈利，棉花亏损/约十五万包 · 越买越沉'),
13:row('study/rail/study','contract/lever/contract','二万五千美元的帮助/我拉动指令，另一道闸没有开/恩情与利益，写在同一页上'),
14:row('study/industry/study','contract/clock/safe','债务与停市，两把锁/六周等待 · 98至99开始买入/妻儿的钱，也要防住我自己'),
15:row('harbor/harbor/harbor','coffee/contract/contract','货物在海上，合约在纸上/早餐成本，成了新的理由/最高价格 / 清算期限'),
16:row('wire/wire/wire','phone/phone/phone','贪欲想得到秘密，虚荣想传递秘密/朋友 → 经纪行 → 客户/很多声音，未必有很多源头'),
17:row('study/industry/cotton','cat/weight/lever','朋友看见黑猫，我记得条件/钢铁七万二千股 / 铜股五千股/下一笔交易，不替上一笔报仇'),
18:row('harbor/counter/counter','wheel/lever/lever','离开鱼竿，回到报价线/153 · 回补一万股空头/156 · 转为买入 / 后来超过200'),
19:row('street/study/street','contract/safe/clock','有人制造挤压，也会被反过来挤压/认证支票锁住的是借款资源/同一条街，两种等待能力'),
20:row('theatre/theatre/theatre','curtain/transfer/lever','高报价不等于全部卖得出去/价格回落，公众觉得便宜/推不动时，安排也得停止'),
21:row('industry/industry/theatre','lever/oil/transfer','帝国钢铁 · 三十点 / 约七千股/石油产品，条件没有照搬/纸面财富，还没有变成现金'),
22:row('study/counter/tailor','contract/drawer/needle','朋友请求，却要由市场兑现/承诺六百万，资金分批到达/名人的名字，被缝进普通人的希望'),
23:row('press/press/press','newspaper/glass/newspaper','匿名的权威/乐观的文字 / 安静的卖出/50 → 12 / 谁替下跌负责'),
24:row('study/theatre/harbor','contract/transfer/letter','今天的佣金 / 未来的经营/接受好处的人，成为热心的宣传者/行情继续，这封信没有买卖指令')
};
const grouping={1:[[0],[1],[2,3]],2:[[0],[1],[2,3]],4:[[0,1],[2],[3]],5:[[0,1],[2],[3]],6:[[0],[1,2],[3]],7:[[0],[1],[2,3]],8:[[0],[1],[2,3]],9:[[0],[1,2],[3]],10:[[0,1],[2],[3]],11:[[0],[1],[2,3]],12:[[0,1],[2],[3]],13:[[0,1],[2],[3]],14:[[0,1],[2],[3]],15:[[0,1],[2],[3]],16:[[0],[1,2],[3]],17:[[0,1],[2],[3]],18:[[0,1],[2],[3]],19:[[0,1],[2],[3]],20:[[0,1],[2],[3]],21:[[0,1],[2],[3]],22:[[0,1],[2],[3]],23:[[0,1],[2],[3]],24:[[0],[1,2],[3]]};
export function immerse(text){
 return text.split(/(?<=[。！？])/).filter(s=>!/(读者|记忆宫殿|现代法律|今天的法律|现实操纵|行动教程|普遍公式|普遍规则|今日通用剧本|统一数值|法律方案)/.test(s)).join('')
 .replace(/原章|本章|这一章|书中|原文中|原书/g,'这段往事').replace(/叙述者的回顾与推断/g,'我的事后推断').replace(/叙述者/g,'我').replace(/拉里/g,'我').replace(/(?<!其|别|对)他(?!们|人)/g,'我').replace(/故事没有/g,'我没有').replace(/全书最后/g,'回忆走到最后');
}
export function splitBeats(text,max=68){
 const sentences=text.match(/[^。！？；]+[。！？；]?/g)||[text],result=[];
 for(const s of sentences){if(s.length<=max){result.push(s);continue;}let chunk='';for(const part of s.match(/[^，：]+[，：]?/g)||[s]){if(chunk.length+part.length>max&&chunk){result.push(chunk);chunk='';}chunk+=part;}if(chunk)result.push(chunk);}
 return result.filter(Boolean);
}
export function storyFor(n){
 const c=chapters.find(x=>x.n===n),e=episodes.find(x=>x.n===n),score=SCORES[n];
 return {...score,n,title:e.title,chapter:c,episode:e,phases:e.steps.map((step,i)=>({title:step.title,mode:step.mode,action:step.action,space:score.spaces[i],object:score.objects[i],cue:score.cues[i],beats:splitBeats(immerse(step.text)+' '+DETAILS[n][i]+' '+grouping[n][i].map(j=>immerse(c.story[j])).join(' '))})),notes:[...DETAILS[n],...c.story.map(immerse),...e.steps.map(s=>immerse(s.text)),immerse(c.principle)]};
}
export function paginate(paragraphs,english=false){
 const pages=[],width=english?39:17,rows=english?12:10;
 for(const p of paragraphs){const lines=[];if(english){let line='';for(const w of p.split(/\s+/)){if(line.length+w.length+1>width&&line){lines.push(line);line='';}line+=(line?' ':'')+w;}if(line)lines.push(line);}else{for(let i=0;i<p.length;i+=width)lines.push(p.slice(i,i+width));}for(let i=0;i<lines.length;i+=rows)pages.push(lines.slice(i,i+rows));}
 return pages;
}
