import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const original=await readFile(new URL('../public/source/original.txt',import.meta.url),'utf8');
const markers=[...original.matchAll(/\n_([IVX]+)_\r?\n/g)];
assert.equal(markers.length,24);
for(let i=0;i<24;i++){
 const body=original.slice(markers[i].index+markers[i][0].length,markers[i+1]?.index).split(/\nEnd of Project Gutenberg|\n\*\*\* END/)[0];
 const chapter=JSON.parse(await readFile(new URL(`../public/manuscripts/${String(i+1).padStart(2,'0')}.json`,import.meta.url),'utf8'));
 assert.equal(chapter.paragraphs.join('').replace(/\s/g,''),body.replace(/\s/g,''),`Chapter ${i+1} retains every original word`);
}
console.log('PASS: all 24 manuscripts match the original English text, with Gutenberg end matter kept separately.');
