const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('.faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.faq details').forEach(o=>{if(o!==d)o.open=false})}));
const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.rows button').forEach(b=>b.addEventListener('click',()=>{li.src=b.querySelector('img').src;lb.classList.add('on')}));
lb.addEventListener('click',()=>lb.classList.remove('on'));
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
