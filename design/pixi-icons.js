(function(){
const P={W:'#FFFFFF',G:'#AAAAAA',S:'#55AAAA',B:'#0055AA',Q:'#005555',O:'#000055',K:'#000000',T:'#00FFFF',L:'#AAFFFF',R:'#FF55AA'};
const BASE=[".................OOOOOOOOOOOOOOOKK.................","...............OOSSSSSSSSSSSSSSSSSOO...............",".............OQSSSBBBBBBBBBBBBBBBBSSSK.............","...........OQSSSBBOOOOOOOOOOOOOOOBBBSSQO...........","..........QSSBBBOOGGWWWWWWWWWWWGGOOOQBSBQ..........",".........QSSBQOOGGWWWWWWWWWWWWWWWGGBKOQBSS.........","........QSSBOOOWWWWWWWWWWWWWWWWWWWWGBOOQBSO........",".......QSBBOOGWWWWWWWWWWWWWWWWWWWWWWGGQOQBSO.......","......OSBBOOGWWWWWWWWWWWWWWWWWWWWWWWWWGQKQBSK......","......OSBOOWGWWWWWGGGGGGGGGGGGGGGWWWWWGGOKQSO......",".....OSSOOWWGWWGGGOOOOOOOOOOOOOOOGGGGWGWWKKBSK.....",".....OSBOGWWWGSOOOKKKKKKKKKKKKKKKOOOOGWWWGKQSO.....","....OGSOOWWWGOKKOOKKKKKKKKKKKKKKKKKKKOGWWWKKSGK....","....OGBOGWWWOKKOGGOKKKKKKKKKKKKKKKKKKKOGWWGKOGK....","....OGOOGWWOKKSGOOKKKKKKKKKKKKKKKKKKKKKBWWGKKGK....","...OOOOOGWWOKBBOKKKKKKKKKKKKKKKKKKKKKKKOWWGKKKKK...","..OOSSSOGWGOKSKKKKKKKKKKKKKKKKKKKKKKKKKKBWGKSSSKK..",".OROTTSOGWOOKKKKKKKKKKKKKKKKKKKKKKKKKKKKOWGKSTTKRK.","ORROSSSOGWOOKKKKTTTBKKKKKKKKKKKBTTTKKKKKOWGKSSSKRRK","ORROSSSOGWOOKKBTTTTTSKKKKKKKKKSTTTTTBKKKOWGKSSSKRRK","ORROSSSOGWOOKKBTTTTTSKKKKKKKKKSTTTTTBKKKOWGKSSSKRRK","ORROSSSOGWOOKKBTTTTTSKKKKKKKKKSTTTTTBKKKOWGKSSSKRRK","ORROSSSOGWOOKKBTTTTTSKKKKKKKKKSTTTTTBKKKOWGKSSSKRRK","ORROSSSOGWOOKKBTTTTTSKKKKKKKKKSTTTTTBKKKOWGKSSSKRRK","ORROBBBOGWKKKKKBTTTBKKKKKKKKKKKBTTTBKKKKOWGKBBBKRRK","ORROBBBOGWKKKKKKBBBKKKKKKKKKKKKKBBBKKKKKOWGKBBBKRRK",".OROBBQKGWKKKKKKKKKKKKSKKKKBBKKKKKKKKKKKOWGKQKQKRK.","..OOBBBOGWQKKKKKKKKKKKKBBKBSKKKKKKKKKKKOWWGKQKQKK..","...KKOOOGGWOKKKKKKKKKKKKSTSKKKKKKKKKKKKOWGGKKSKK...",".......OGGWOKKKKKKKKKKKKKKKKKKKKKKKKKKOGGGOKGSK....",".......OOGGWOKKKKKKKKKKKKKKKKKKKKKKSSBOWGOKGGK.....","........KBGGGOOOKKKKKKKKKKKKKKKKKOBSSSKOOKSOO......",".........OSGGWWGKKKKKKKKKKKKKKKKKOBBBBKSSSO........",".........KOSGGGWWWWKKKKKKKKKKKKKKGOOOOSSOO.........","..........OOSGGGGGGWWWWWWWWWWWWWWGSSSSGOK..........","...........OKKBSGGGGGGGGGGGGGGGGGGGGQOOK...........",".............OKKOGGGGGGGGGGGGGGGGGKKKB.............",".............OKKKKKKKKKKKKKKKKKKKKKKK..............","...........OOOOKKGGGKBBBBBBBBBKGGGKKOOOO...........","..........OWWWGKKGGGGKKKKKKKKKGGGGKKGGWWO..........",".........KWWWGGKSGGGGGGGGGGGGGGGGSSKGGWWWK.........","........KWWWGSGKGGGWWWWWWWWWWWWWGGGKSSGWWGK........","........KGGGGGKKGWWWWWKKKKKKKWWWWWGKKGGGGGK........","........KOOKOKKKGWWWWWKTTTTTKWWWWWGKKKKKOOK........","........OGGGSQKSGWWWWWKTTTTTKWWWWWGSKOSGGGO........",".......KGGGGGGKGGGWWWWKTTTTTKWWWWGGSKGGGGGGK......."].map(r=>[...r].map(c=>c==='.'?null:c));
const HEAD=BASE.slice(0,38);
const GLYPH={
 sync:["..OOOOO.O.",".O.....OO.","O.....OOO.","O.........","O.........",".........O",".........O",".OOO.....O",".OO.....O.",".O.OOOOO.."],
 watch:["...OOOO...","...OOOO...","..OOOOOO..","..O....O..","..O.O..OO.","..O..O.O..","..O....O..","..OOOOOO..","...OOOO...","...OOOO..."],
 term:["OOOOOOOOOO","O........O","O.O......O","O..O.....O","O...O....O","O..O.....O","O.O..OOO.O","O........O","OOOOOOOOOO",".........."],
 drop:["....OO....","...OOOO...","..OOOOOO..",".OOOOOOOO.",".OOLOOOOO.","OOLOOOOOOO","OOLOOOOOOO","OOOLOOOOOO",".OOOOOOOO.","..OOOOOO.."]
};
const HX=26,HY=32,BX=61,BY=61,BS=18;
function compose(badge,layer,bg){
 const g=[...Array(108)].map(()=>Array(108).fill(null));
 if(layer==='bg'){for(const r of g)r.fill(bg||P.O);return g}
 const mono=layer==='mono';
 HEAD.forEach((r,y)=>r.forEach((c,x)=>{if(!c)return;if(mono&&(c==='K'||c==='O'||c==='Q'))return;if(mono&&y>=17&&y<=25&&x>=12&&x<=39&&c!=='T'&&c!=='L')return;g[HY+y][HX+x]=mono?'#FFFFFF':P[c]}));
 if(badge&&GLYPH[badge]){
  for(let y=0;y<BS;y++)for(let x=0;x<BS;x++){const d=(x+.5-BS/2)**2+(y+.5-BS/2)**2;const R=BS/2;
   if(d<=(R+1.2)**2&&d>R*R){g[BY+y][BX+x]=mono?null:P.O}
   else if(d<=R*R){const inner=d>(R-1)**2;g[BY+y][BX+x]=mono?'#FFFFFF':(inner?P.O:P.T)}}
  // outer gap ring (1px beyond circle) cleared in mono / O in color
  for(let y=-2;y<BS+2;y++)for(let x=-2;x<BS+2;x++){const d=(x+.5-BS/2)**2+(y+.5-BS/2)**2;const R=BS/2;if(d>R*R&&d<=(R+1.6)**2){g[BY+y][BX+x]=mono?null:P.O}}
  GLYPH[badge].forEach((r,y)=>[...r].forEach((ch,x)=>{if(ch==='.')return;g[BY+4+y][BX+4+x]=mono?null:(ch==='L'?P.W:P.O)}));
 }
 return g;
}
function flatten(fg,bg){return fg.map((r,y)=>r.map((c,x)=>c||bg[y][x]))}
function toCanvas(g,scale,crop,doc){crop=crop||[0,0,108];const n=crop[2],cv=(doc||document).createElement?(doc||document).createElement('canvas'):null;return {n,cv}}
window.PixiIcons={P,BASE,HEAD,GLYPH,compose,flatten};
})();