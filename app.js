const mixedPosts=document.getElementById('mixed-posts')||document.querySelector('#highlights .cards-five');
const diyPosts=document.getElementById('diy-posts');
const heading=document.getElementById('highlights-title');
const label=document.getElementById('highlights-label');
const resetButton=document.getElementById('show-all-posts');
const priceNote=document.getElementById('diy-price-note');

function showDiyPosts(){
  mixedPosts.hidden=true;
  diyPosts.hidden=false;
  priceNote.hidden=false;
  label.textContent='DIY-INSPIRATION';
  heading.textContent='Kreative Projekte für dein Zuhause.';
  resetButton.textContent='Alle Themen anzeigen →';
  history.replaceState(null,'','#diy-projekte');
  document.getElementById('highlights').scrollIntoView({behavior:'smooth'});
}
function showAllPosts(){
  mixedPosts.hidden=false;
  diyPosts.hidden=true;
  priceNote.hidden=true;
  label.textContent='AKTUELL ENTDECKT';
  heading.textContent='Inspiration, die sofort weiterhilft.';
  resetButton.textContent='Alle Beiträge →';
  history.replaceState(null,'','#highlights');
}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  if(a.matches('[data-diy-filter]')){e.preventDefault();showDiyPosts();return;}
  const target=a.getAttribute('href');
  if(target==='#')return;
  e.preventDefault();
  document.querySelector(target)?.scrollIntoView({behavior:'smooth'});
}));
resetButton.addEventListener('click',showAllPosts);
if(window.location.hash==='#diy-projekte')showDiyPosts();
