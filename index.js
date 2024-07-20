const div1 = document.querySelector('.double-cards');

div1.addEventListener('click', ()=>{
  div1.classList.add('hidden')
  setTimeout(() => {
    div1.style.display = 'none'  
  }, 1000);
  
})