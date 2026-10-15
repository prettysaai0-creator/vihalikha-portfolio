/* SAI VIHALIKHA B.K. — Portfolio
   script.js: interactions and animations (needs GSAP + ScrollTrigger loaded in index.html) */

(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,$=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
$('#av').src=$('#hi').src;
var nv=$('#nv');addEventListener('scroll',function(){nv.classList.toggle('s',scrollY>40)},{passive:true});
/* loader */
var ld=$('#ld'),pc=$('#pc'),steps=[0,10,25,50,75,100],hide=[$('#nv'),$('#hl'),$('#hh em'),$('#hs'),$('#hp')];
function done(){ld.style.display='none';document.body.style.overflow=''}
function intro(){
 if(rm){return}
 gsap.from('#nv',{y:-60,opacity:0,duration:.7});
 gsap.from('#hl',{opacity:0,duration:.6,delay:.1});
 gsap.from('#hh em',{yPercent:110,duration:1,stagger:.12,ease:'power4.out',delay:.1});
 gsap.from('#hs',{opacity:0,y:16,duration:.7,delay:.7});
 gsap.from('#hp',{yPercent:12,opacity:0,duration:1,ease:'power3.out',delay:.4});
 gsap.from('.ph .cap span',{opacity:0,x:12,stagger:.1,delay:1,duration:.5});
}
document.body.style.overflow='hidden';
if(window.gsap&&!rm){
 gsap.to('#ld .ln',{scaleX:1,duration:1.6,ease:'power2.inOut'});
 var o={v:0},i=0;
 gsap.to(o,{v:5,duration:1.8,ease:'none',onUpdate:function(){var k=Math.min(5,Math.floor(o.v));pc.textContent=String(steps[k]).padStart(2,'0')}});
 gsap.to('#ld',{yPercent:-100,duration:.7,delay:2,ease:'power3.inOut',onStart:intro,onComplete:done});
}else{done()}
/* cursor */
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!rm){
 var c=$('#cur'),mx=0,my=0,x=0,y=0;document.body.classList.add('cc');
 addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY},{passive:true});
 (function t(){x+=(mx-x)*.18;y+=(my-y)*.18;c.style.transform='translate('+x+'px,'+y+'px)';requestAnimationFrame(t)})();
 $$('[data-c]').forEach(function(el){el.addEventListener('mouseenter',function(){c.textContent=el.dataset.c;c.classList.add('big')});el.addEventListener('mouseleave',function(){c.textContent='';c.classList.remove('big')})});
 /* magnetic */
 $$('.mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.25,duration:.3})});b.addEventListener('mouseleave',function(){gsap.to(b,{x:0,y:0,duration:.5})})});
}
if(!window.gsap||rm)return;
gsap.registerPlugin(ScrollTrigger);
gsap.to('.grid',{opacity:.09,scrollTrigger:{trigger:document.body,start:'top top',end:'+=600',scrub:true}});
gsap.from('.rv',{opacity:0,y:30,duration:1,scrollTrigger:{trigger:'.rv',start:'top 85%'}});
$$('.pj').forEach(function(p){gsap.fromTo(p.querySelector('.no'),{y:40},{y:-40,ease:'none',scrollTrigger:{trigger:p,scrub:true}})});
gsap.to('.rail i',{scaleY:1,ease:'none',scrollTrigger:{trigger:'#tl',start:'top 70%',end:'bottom 70%',scrub:true}});
$$('#tl article').forEach(function(a){ScrollTrigger.create({trigger:a,start:'top 65%',onEnter:function(){a.classList.add('on')},onLeaveBack:function(){a.classList.remove('on')}})});
})();

(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,g=window.gsap&&!rm,cs=document.getElementById('cs'),bd=document.getElementById('csb'),last=null;
function story(){return '<section class="cst" style="grid-template-columns:1fr"><div><p class="lab" style="color:var(--lime);margin-bottom:10px">Illustrated in Adobe Illustrator</p><h3>The story</h3><p>A children’s story told in nine illustrated slides: characters, forest scenes and short story text, from the title to the moral.</p></div></section><div class="stg">'+document.getElementById('story').innerHTML+'</div>'}
var QUOTE='<section class="cst" style="grid-template-columns:1fr"><p style="font:700 clamp(30px,5.2vw,80px)/1.04 var(--d);letter-spacing:-.03em;color:#F5F5F5;max-width:1100px;margin:0">“Visual design is not just about looking good; it’s about making people feel and understand.”</p></section>';var CASES={"02":[],"04":[],"01":[["Problem","Make temple information easier to find.","Visitors need quick access to temple details, timings, pooja information, events, history, and contact details."],["Research","Understand devotees and visitors.","Research their needs, common questions, content expectations, and current website limitations."],["User Flow","Create a simple devotional journey.","Home → Temple Information → Pooja / Events → Gallery → Visit / Contact"],["Wireframes","Plan the experience before visual design.","Create simple layouts for Home, About, Pooja, Events, Gallery, and Contact."],["UI Design","Create a calm and devotional visual experience.","Use temple-inspired colors, elegant typography, traditional motifs, imagery, and clear navigation."],["Prototype","Bring the website to life.","Connect pages and interactions in Figma to demonstrate the complete visitor journey."],["Testing","Check clarity and usability.","Test navigation, information discovery, mobile responsiveness, readability, and key visitor tasks."]],
"03":[["Problem","Wellness feels overwhelming.","Users struggle with stress, poor sleep, low focus, and inconsistent self-care routines."],["Research","Understand the user.","Research user needs, wellness habits, pain points, and expectations."],["User Flow","Make the journey simple.","Check-in → Recommendation → Activity → Complete → Progress"],["Wireframes","Plan before styling.","Create simple layouts for Home, Mood, Sleep, Focus, Breathe, and Progress."],["UI Design","Turn ideas into a calm experience.","Use soft colors, rounded cards, glassmorphism, clear typography, and Lumi."],["Prototype","Make the experience interactive.","Connect screens and test key interactions and transitions in Figma."],["Testing","Learn and improve.","Test navigation, clarity, usability, and notifications, then refine the experience."]]};
var S=[['Overview',''],['Problem','The problem this project set out to solve.'],['Research','Who it is for and what was learned about them.'],['User Flow','How people move through the experience.'],['Wireframes','Early structure and layout explorations.'],['UI Design','The visual design and components.'],['Prototype','The interactive, clickable version.'],['Testing','Feedback gathered and refinements made.'],['Final Result','The finished design.']];
function build(p){
 var t=p.querySelector('h4').firstChild.textContent,c=p.querySelector('.cat').textContent,d=p.querySelector('.ds').textContent,n=p.querySelector('.no').textContent,im=p.querySelector('.im img');
 var pic=im?'<img class="big-i" src="'+im.src+'" alt="'+im.alt+'" loading="lazy">':'<div class="ph4">Project visuals coming soon</div>';
 var h='<div class="hd"><p class="lab meta">Case study '+n+'</p><h2>'+t+'</h2><p class="lab">'+c+'</p></div>';
 var C=CASES[n];if(C){h+=pic+(n=='02'?QUOTE:n=='04'?story():'');C.forEach(function(s,i){h+='<section class="cst"><div class="n">0'+(i+1)+'</div><div><p class="lab" style="color:var(--lime);margin-bottom:10px">'+s[0]+'</p><h3>'+s[1]+'</h3><p>'+s[2]+'</p></div></section>'})}else S.forEach(function(s,i){
  var txt=i==0?d:s[1]+' <span class="mute">Details coming soon.</span>';
  h+='<section class="cst"><div class="n">0'+(i+1)+'</div><div><h3>'+s[0]+'</h3><p>'+txt+'</p>'+((i==5||i==8)?pic:'')+'</div></section>';
 });
 bd.innerHTML=h+'<div class="end"><button class="btn" id="csb2">← Back to work</button></div>';
 document.getElementById('csb2').onclick=close;
}
function show(){cs.scrollTop=0;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{root:cs,threshold:.12});[].forEach.call(bd.querySelectorAll('.rvl'),function(x){io.observe(x)});cs.classList.add('on');document.body.style.overflow='hidden';document.getElementById('csx').focus()}
function close(){cs.classList.remove('on');document.body.style.overflow='';if(last)last.focus()}
function open(p){
 last=p;build(p);
 var im=p.querySelector('.im'),img=im.querySelector('img');
 if(!g||!img){show();return}
 var r=im.getBoundingClientRect(),cl=document.createElement('div');cl.className='csx';
 cl.style.cssText='left:'+r.left+'px;top:'+r.top+'px;width:'+r.width+'px;height:'+r.height+'px';
 cl.appendChild(img.cloneNode());document.body.appendChild(cl);
 gsap.to(cl,{left:0,top:0,width:innerWidth,height:innerHeight,duration:.9,ease:'power3.inOut',onComplete:function(){show();gsap.to(cl,{opacity:0,duration:.5,onComplete:function(){cl.remove()}})}});
}
[].forEach.call(document.querySelectorAll('.pj'),function(p){
 p.addEventListener('click',function(e){e.preventDefault();open(p)});
 p.addEventListener('keydown',function(e){if(e.key=='Enter'||e.key==' '){e.preventDefault();open(p)}});
 p.tabIndex=0;
});
document.getElementById('csx').onclick=close;
addEventListener('keydown',function(e){if(e.key=='Escape'&&cs.classList.contains('on'))close()});
})();

(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,g=window.gsap&&!rm,cv=document.getElementById('cv'),b=document.getElementById('cvb');
function it(h,s,l){return '<div class="it"><h4>'+h+'</h4>'+(s?'<small>'+s+'</small>':'')+l+'</div>'}
function ul(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'}
function row(l,c){return '<section class="cvr"><p class="lab">'+l+'</p><div>'+c+'</div></section>'}
var h='<div class="hd cvr" style="border:0;display:block"><p class="lab meta">Curriculum vitae</p><h2>Sri Saai<br>Vihalikha B.K</h2><p class="lab">Junior UI/UX Designer | Graphic Designer | Montessori Teacher</p><p class="cl" style="margin-top:20px"><a href="mailto:srivihalikha17@gmail.com">srivihalikha17@gmail.com</a><a href="tel:+917695867602">+91 7695867602</a><a>Madurai, Tamil Nadu, India</a></p></div>';
h+=row('Profile','<p>Passionate about creating meaningful solutions with creativity, empathy, and attention to detail. Committed to continuous learning, embracing challenges, and making a positive impact through innovation and collaboration.</p>');
h+=row('Work Experience',it('Graphic Designer','Spark LED Pvt. Ltd., Madurai · Nov 2021 – Oct 2022',ul(['Designed logos, banners, and promotional materials using CorelDRAW.','Created marketing graphics for print and digital media.','Collaborated with the production team to deliver high-quality designs.']))+it('Graphic Design Mentor','Shrika Institute of Creative Technology · 2024 – 2025',ul(['Mentor students in Graphic Design concepts and software.','Teach branding, typography, layout design, and creative thinking.','Guide students in portfolio development and design projects.']))+it('UI/UX Design Intern — Camel.Design','3-Month Internship · 2026',ul(['Created web and mobile UI designs using Figma.','Worked on wireframes, user flows, prototypes, and high-fidelity screens.','Conducted UX research and competitor analysis.','Developed responsive layouts and reusable UI components.','Collaborated with developers and refined designs based on feedback.'])));
h+=row('Skills','<div class="tg">'+['UI/UX Design','Figma','Wireframing','Prototyping','Auto Layout','Design Systems','CorelDRAW','HTML','Java','JavaScript','C++','SQL','MySQL','Microsoft Office','AI Tools (ChatGPT, Gemini, Canva AI)'].map(function(x){return '<span>'+x+'</span>'}).join('')+'</div>');
h+=row('Education',it('Master of Commerce (Computer Applications)','2022 | 70%','<p>E.M.G. Yadava Women’s College, Madurai Kamaraj University</p>')+it('Bachelor of Commerce (Computer Applications)','2019 | 60%','<p>E.M.G. Yadava Women’s College, Madurai Kamaraj University</p>')+it('Higher Secondary Certificate (HSC)','2016 | 60%','<p>Madurai Crescent Matriculation Higher Secondary School</p>')+it('Secondary School Leaving Certificate (SSLC)','2014 | 60%','<p>Private &amp; Matriculation School</p>'));
h+=row('Certifications',ul(['Professional Course in UI/UX Design – camel design (2026)','Montessori Teacher Training – TVS Lakshmi, Madurai (2023)','SSI Accounts Pro – Computerised Financial Accounting (Tally ERP 9)']));
h+=row('Projects',it('College Vote Counting System','','<p>Developed a digital vote-counting application for college elections.</p>')+it('Ticket Booking System','','<p>Developed a ticket booking application using PHP and MySQL.</p>')+it('UI/UX Portfolio Projects','',ul(['Mental Wellness App (Innerly)','Amman Temple Website','Mobile App Wireframes','Interactive Prototypes','Design System Components'])));
h+=row('Languages',ul(['Tamil (Native)','English (Professional)']));
b.innerHTML=h+'<div class="end"><button class="btn" id="cvb2">← Back to site</button></div>';
function close(){cv.classList.remove('on');document.body.style.overflow='';document.getElementById('cvo').focus()}
function open(e){e.preventDefault();cv.scrollTop=0;cv.classList.add('on');document.body.style.overflow='hidden';document.getElementById('cvx').focus();
 if(g){gsap.fromTo(cv,{yPercent:6},{yPercent:0,duration:.7,ease:'power3.out'});gsap.from('#cvb .cvr,#cvb .end',{y:40,opacity:0,duration:.7,stagger:.09,delay:.25,ease:'power3.out'})}}
document.getElementById('cvo').onclick=open;document.getElementById('cvx').onclick=close;document.getElementById('cvb2').onclick=close;
addEventListener('keydown',function(e){if(e.key=='Escape'&&cv.classList.contains('on'))close()});
})();
