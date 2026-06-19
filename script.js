
const figurinhas=["ABEL.png", "AMANDA.png", "CAROLINA BRESSAN.png", "CLARICE.png", "DAIANE.png", "DEBORA.png", "EDIANE.png", "GERSON.png", "HELOISE.png", "KARINA.png", "KIKA.png", "LEANDRO.png", "MIGUEL.png", "ROBERTO.png", "TIAGO.png", "WILLIAM.png"];
let album=JSON.parse(localStorage.getItem('album')||'[]');
let pacotes=parseInt(localStorage.getItem('pacotes')||'0');

function salvar(){
localStorage.setItem('album',JSON.stringify(album));
localStorage.setItem('pacotes',pacotes);
}

function atualizar(){
const a=document.getElementById('album');
a.innerHTML='';
figurinhas.forEach(f=>{
const ok=album.includes(f);
a.innerHTML+=`<div class="card"><img class="${ok?'':'locked'}" src="figurinhas/${f}"><br>${ok?'✅':'❓'} ${f.replace('.png','')}</div>`;
});
let pct=Math.round(album.length/figurinhas.length*100);
document.getElementById('stats').innerHTML=`<h3>${album.length}/${figurinhas.length} - ${pct}% | Pacotes: ${pacotes}</h3>`;
if(album.length===figurinhas.length) alert('🏆 Álbum Completo!');
}

function abrirPacote(){
pacotes++;
let sorteadas=[];
for(let i=0;i<4;i++){ sorteadas.push(figurinhas[Math.floor(Math.random()*figurinhas.length)]); }
const p=document.getElementById('pacote');
p.innerHTML='';
sorteadas.forEach(f=>{
const nova=!album.includes(f);
if(nova) album.push(f);
p.innerHTML+=`<div class="card"><img src="figurinhas/${f}"><br>${nova?'⭐ Nova':'🔁 Repetida'}</div>`;
});
salvar();
atualizar();
}

function resetar(){ localStorage.clear(); album=[]; pacotes=0; atualizar(); }
atualizar();
