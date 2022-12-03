let f_btn = document.querySelector('.f_btn');
let f_article = document.querySelector('.f_article')
let nxt_btn = document.querySelector('.nxt_btn');
let s_article = document.querySelector('.s_article')
let go_top_btn = document.querySelector('.go_top');

f_btn.addEventListener('click', ()=>{
   window.scrollTo({
      top: f_article.clientHeight,
      behavior: "smooth",
   })
})
nxt_btn.addEventListener('click', ()=>{
   window.scrollTo({
      top: f_article.clientHeight + s_article.clientHeight,
      behavior: "smooth",
   })
})
go_top_btn.addEventListener('click', ()=>{
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   })
})

// let wind_wid = ;
let scrolled = window.pageYOffset;
let porcentage = document.querySelector('.porcentage')

window.addEventListener('scroll', ()=>{
   // porcentage.style.width = scrolled;
   console.log(window.pageYOffset)
})