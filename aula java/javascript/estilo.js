/* SCROLL ANIMATION */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.15});

document.querySelectorAll('.card, .produto, .tops h2, .hero-content').forEach(el=>{
  el.classList.add('hidden');
  observer.observe(el);
});

/* NAVBAR SHADOW */
const header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 10){
    header.style.boxShadow = "0 4px 25px rgba(0,0,0,.1)";
  }else{
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,.05)";
  }
});

/* PARALLAX HERO */
const hero = document.querySelector('.hero');

if(hero){
  window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;
    hero.style.backgroundPositionY = scroll * 0.3 + 'px';
  });
}


/* MICROINTERAÇÕES */
document.querySelectorAll('.produto, .card, button').forEach(el=>{
  el.addEventListener('mouseenter', ()=>{
    el.style.transform = 'scale(1.02)';
  });

  el.addEventListener('mouseleave', ()=>{
    el.style.transform = '';
  });
});

/* SMOOTH LOAD */
window.addEventListener('load', ()=>{
  document.body.style.opacity = '0';
  setTimeout(()=>{
    document.body.style.transition = '1s';
    document.body.style.opacity = '1';
  },100);
});


