'use strict';
const connectionData=[
 {image:'misula-principal',label:'Pórtico com mísula',caption:'Canto de pórtico com mísula — prévia 3D, chapa frontal e croqui do conjunto'},
 {image:'ligacao-estendida',label:'Chapa de ponta estendida',caption:'Chapa de ponta estendida — perfil inclinado, furação e enrijecedores'},
 {image:'ligacao-emenda',label:'Emenda entre vigas',caption:'Emenda entre vigas inclinadas — chapa de ponta, parafusos e croqui cotado'},
 {image:'ligacao-dupla',label:'Contraventamento duplo',caption:'Contraventamento duplo em barras — geometria, componentes e croqui'},
 {image:'ligacao-barra',label:'Barra com cantoneira',caption:'Barra redonda com cantoneira soldada — 3D, croqui e parâmetros'}
];
const engineData = [
 {image:'misula-principal',tag:'ENCONTRO / 3D + CROQUI',title:'O modelo e o desenho, lado a lado.',description:'Examine o canto de pórtico com mísula, a chapa frontal e a geometria do conjunto na mesma janela. O modo 3D + croqui aproxima a configuração do componente do seu detalhe cotado.',alt:'Canto de pórtico com mísula, prévia 3D e croqui cotado'},
 {image:'ligacao-estendida',tag:'CHAPA / FURAÇÃO / ENRIJECEDORES',title:'O detalhe acompanha os parâmetros.',description:'Na chapa de ponta estendida, veja o perfil inclinado, os parafusos, os enrijecedores e o gabarito cotado. Ajuste o componente pelas abas de encontro, chapa, furação e solda.',alt:'Chapa de ponta estendida com enrijecedores e gabarito de furação'},
 {image:'ligacao-barra',tag:'GEOMETRIA / AVISOS / REVISÃO',title:'A prévia mostra. O painel orienta a revisão.',description:'O exemplo de barra com cantoneira reúne o 3D, o croqui e os avisos do encontro. Configurações provisórias e pendências ficam explícitas para você conferir antes de aplicar.',alt:'Barra com cantoneira soldada, croqui cotado e avisos de geometria'},
 {image:'ligacao-emenda',tag:'APLICAR / PROPAGAR / REUTILIZAR',title:'Leve o padrão aos encontros iguais.',description:'Depois de revisar a ligação, aplique o componente ou propague para os encontros compatíveis. Use presets e padrões do escritório para manter consistência, inclusive nas emendas entre vigas.',alt:'Emenda entre vigas com botão Aplicar e propagar e presets'}
];
const connectionButtons=[...document.querySelectorAll('[data-connection]')];
connectionButtons.forEach((button,i)=>button.addEventListener('click',()=>{
 const d=connectionData[i],img=document.querySelector('#hero-connection-image'),zoom=document.querySelector('#hero-connection-zoom');
 img.src=`assets/${d.image}.webp`;img.alt=d.caption;zoom.dataset.image=img.src;zoom.dataset.caption=d.caption;document.querySelector('#hero-connection-label').textContent=d.label;
 connectionButtons.forEach((b,j)=>b.setAttribute('aria-pressed',String(i===j)));
}));
const resourceData=[
 {tag:'ESTRUTURA / GEOMETRIA',title:'Comece pela estrutura.',description:'Geradores e ferramentas para lançar o modelo e ajustar os elementos ao seu projeto.',image:'mezanino',alt:'Janela de modelagem de mezanino no SteelBIM',list:['Galpão em 1 clique','Edifícios e mezaninos','Treliças e pilares','Terças e contraventamentos','Escadas e guarda-corpos','Fundações e módulo de concreto']},
 {tag:'ENCONTROS / COMPONENTES',title:'Ligue as peças. Controle os detalhes.',description:'Da seleção de dois perfis à aplicação em lote, com prévia e edição dos componentes.',image:'misula-principal',alt:'Janela do motor de ligações viga-pilar',list:['Ligar 2 perfis','Painel de ligações','Ligar em lote e ligar obra','Ligar terças','Presets e propagação','Conexões nativas do Revit']},
 {tag:'INTEROPERABILIDADE / AJUSTES',title:'Aproveite o modelo que já existe.',description:'Associe perfis importados às famílias nativas e refine a geometria dos encontros.',image:'ifc',alt:'Conversão de perfis IFC para perfis nativos do Revit',list:['Conversão IFC → nativo','Associação de famílias e tipos','Revisão de baixa confiança','Estender até a face','Cortar com folga','Facear pontas e meia-esquadria']},
 {tag:'VISTAS / DOCUMENTAÇÃO',title:'Faça o executivo avançar.',description:'Peças, conjuntos e pranchas no mesmo fluxo, com espaço para a sua revisão.',image:'pranchas',alt:'Detalhamento completo com pranchas e vistas',list:['Detalhamento de ligações','Vigas, perfis e chapas','Elevações e plano da cobertura','Planta de locação','Diagramas de montagem','Cotas, tags e pranchas']},
 {tag:'FABRICAÇÃO / EMISSÃO',title:'Organize a próxima etapa.',description:'Documentação e arquivos para apoiar a fabricação, a montagem e a entrega do projeto revisado.',image:'chapas',alt:'Detalhamento de chapa com contorno, furos e cotas',list:['Exportação DSTV/NC1','Lista de materiais e romaneio','Etiquetas de peças','Área de pintura','Memorial descritivo','Revisões e pacote de obra']}
];
function wireTabs(selector,select){
 const tabs=[...document.querySelectorAll(selector)];
 tabs.forEach((tab,i)=>{
  tab.addEventListener('click',()=>activate(i));
  tab.addEventListener('keydown',e=>{let next=i;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(i+1)%tabs.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();activate(next);tabs[next].focus();});
 });
 function activate(i){tabs.forEach((t,j)=>{t.setAttribute('aria-selected',String(i===j));t.tabIndex=i===j?0:-1;});select(i,tabs[i]);}
}
wireTabs('[data-engine]',(i,tab)=>{
 const d=engineData[i],img=document.querySelector('#engine-image'),zoom=img.parentElement;
 img.src=`assets/${d.image}.webp`;img.alt=d.alt;zoom.dataset.image=img.src;zoom.dataset.caption=d.title;
 document.querySelector('#engine-tag').textContent=d.tag;document.querySelector('#engine-title').textContent=d.title;document.querySelector('#engine-description').textContent=d.description;document.querySelector('#engine-panel').setAttribute('aria-labelledby',tab.id);
});
wireTabs('[data-resource]',(i,tab)=>{
 const d=resourceData[i],img=document.querySelector('#resource-image');
 ['tag','title','description'].forEach(key=>document.querySelector(`#resource-${key}`).textContent=d[key]);
 img.src=`assets/${d.image}.webp`;img.alt=d.alt;
 const z=document.querySelector('#resource-zoom');z.dataset.image=img.src;z.dataset.caption=d.title;
 const list=document.querySelector('#resource-list');list.replaceChildren(...d.list.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
 document.querySelector('#resource-panel').setAttribute('aria-labelledby',tab.id);
});
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
const dialog=document.querySelector('#lightbox');let previousOverflow='';
document.querySelectorAll('.zoom').forEach(z=>z.addEventListener('click',()=>{document.querySelector('#lightbox-image').src=z.dataset.image;document.querySelector('#lightbox-image').alt=z.dataset.caption;document.querySelector('#lightbox-caption').textContent=z.dataset.caption;previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;});
function track(name,params){try{if(window.fbq)window.fbq('track',name,params);}catch{}try{if(window.dataLayer)window.dataLayer.push({event:name,...params});}catch{}try{if(window.gtag)window.gtag('event',name,params);}catch{}}
document.querySelectorAll('.checkout').forEach(a=>a.addEventListener('click',()=>track('InitiateCheckout',{content_name:a.dataset.plan,value:Number(a.dataset.price),currency:'BRL'})));
document.querySelectorAll('a[href*="wa.me"]').forEach(a=>a.addEventListener('click',()=>track('Contact',{content_name:'SteelBIM'})));

const videoDialog=document.querySelector('#video-dialog'),videoFrame=document.querySelector('#demo-player');let videoOverflow='';
document.querySelector('#watch-demo').addEventListener('click',()=>{videoOverflow=document.body.style.overflow;document.body.style.overflow='hidden';videoFrame.src='https://www.youtube-nocookie.com/embed/sYc4ShUT038?rel=0';videoDialog.showModal();});
videoDialog.querySelector('.close-video').addEventListener('click',()=>videoDialog.close());
videoDialog.addEventListener('click',e=>{if(e.target===videoDialog){const b=videoDialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)videoDialog.close();}});
videoDialog.addEventListener('close',()=>{videoFrame.removeAttribute('src');document.body.style.overflow=videoOverflow;});
