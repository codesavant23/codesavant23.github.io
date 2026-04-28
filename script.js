const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resize(){ canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); }
function init(){ resize(); const count = Math.min(95, Math.floor(innerWidth / 16)); particles = Array.from({length: count}, () => ({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.7+.45})); }
function animate(){ ctx.clearRect(0,0,innerWidth,innerHeight); for(const p of particles){ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>innerWidth)p.vx*=-1; if(p.y<0||p.y>innerHeight)p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(255,122,64,.72)'; ctx.fill(); } for(let i=0;i<particles.length;i++){ for(let j=i+1;j<particles.length;j++){ const a=particles[i], b=particles[j], d=Math.hypot(a.x-b.x,a.y-b.y); if(d<135){ ctx.strokeStyle=`rgba(255,255,255,${(1-d/135)*.13})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); } } } requestAnimationFrame(animate); }
addEventListener('resize', init); init(); animate();

document.querySelector('.menu-btn').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));


const hero = document.querySelector('.hero');
const profileCard = document.querySelector('.profile-card-white');
const aboutPanel = document.querySelector('.about-me-panel');

function toggleAboutMe(){
  const isOpen = hero.classList.toggle('about-open');
  profileCard.setAttribute('aria-expanded', String(isOpen));
  aboutPanel.setAttribute('aria-hidden', String(!isOpen));
}

profileCard.addEventListener('click', toggleAboutMe);
profileCard.addEventListener('keydown', (event) => {
  if(event.key === 'Enter' || event.key === ' '){
    event.preventDefault();
    toggleAboutMe();
  }
});
