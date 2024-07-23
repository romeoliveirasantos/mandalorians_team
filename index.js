const div1 = document.querySelector('.double-cards');
const h5Header = document.querySelector('.hFrase');
const audio = new Audio('./assets/comoDeveSer.mp3');
const divInfo = document.querySelector('.infoContainer');
const divInfoRo = document.querySelector('.infoContainerRo');
const infoIcon = document.querySelector('.infoIcon');
const closeIcon = document.querySelector('.closeIcon');
const infoIconRo = document.querySelector('.infoIconRo');
const closeIconRo = document.querySelector('.closeIconRo');
const divInfoB = document.querySelector('.infoContainerB');
const infoIconB = document.querySelector('.infoIconB');
const closeIconB = document.querySelector('.closeIconB');

//play audio Como deve ser
h5Header.addEventListener('mouseover', ()=>{
  audio.currentTime = 0;
  audio.play();         
})

//Card effects
div1.addEventListener('click', ()=>{
  // div1.classList.add('hidden')
  // setTimeout(() => {
  //   div1.style.display = 'none'  
  // }, 1000);   
})

infoIcon.addEventListener('click', ()=>{  
  divInfo.style.display == 'flex' ? divInfo.style.display = 'none' : divInfo.style.display = 'flex';
})
infoIconRo.addEventListener('click', ()=>{
  divInfoRo.style.display == 'flex' ? divInfoRo.style.display = 'none' : divInfoRo.style.display = 'flex';
})
infoIconB.addEventListener('click',()=>{
  divInfoB.style.display == 'flex' ? divInfoB.style.display = 'none' : divInfoB.style.display = 'flex';
})
closeIcon.addEventListener('click', ()=>{
  divInfo.style.display = 'none';
})
closeIconRo.addEventListener('click', ()=>{
  divInfoRo.style.display = 'none';
})
closeIconB.addEventListener('click', ()=>{
  divInfoB.style.display = 'none';
})