const div1 = document.querySelector('.double-cards');
const h5Header = document.querySelector('.hFrase');
const audio = new Audio('./assets/comoDeveSer.mp3');
const audioEdu = new Audio('./assets/eduMentor.mp3');
const audioRo = new Audio('./assets/RosinhuOEscolhido.mp3');
const audioB = new Audio('./assets/BFelix2.mp3')
const divInfo = document.querySelector('.infoContainer');
const divInfoRo = document.querySelector('.infoContainerRo');
const infoIcon = document.querySelector('.infoIcon');
const closeIcon = document.querySelector('.closeIcon');
const infoIconRo = document.querySelector('.infoIconRo');
const closeIconRo = document.querySelector('.closeIconRo');
const divInfoB = document.querySelector('.infoContainerB');
const infoIconB = document.querySelector('.infoIconB');
const closeIconB = document.querySelector('.closeIconB');
const eduBtnSong = document.querySelector('#eduBtnSong');
const equalizerBar = document.querySelector('.equalizer');
const RequalizerBar = document.querySelector('.equalizerR');
const BequalizerBar = document.querySelector('.equalizerB');
const roBtnSong = document.querySelector('#roBtnSong');
const bBtnSong = document.querySelector('#bBtnSong');


let isAudioPlaying = false;
function disableClicks() {
  document.body.style.pointerEvents = 'none';
}

function enableClicks() {
  document.body.style.pointerEvents = 'auto';
}

// Função para iniciar o áudio e desativar cliques
function playAudio(audioElement) {
  if (!isAudioPlaying) {
    audioElement.currentTime = 0;
    audioElement.play();
    isAudioPlaying = true;
    disableClicks();
  }
}

//play song edu button
eduBtnSong.addEventListener('click', () => {
  playAudio(audioEdu);
  equalizerBar.classList.add('equalizerPlay');
});

//play song Rosinhu button
roBtnSong.addEventListener('click', () => {
  playAudio(audioRo);
  RequalizerBar.classList.add('equalizerPlayR');
});

//play song Bruno button
bBtnSong.addEventListener('click', () => {
  playAudio(audioB);
  BequalizerBar.classList.add('equalizerPlayB');
});

//play audio Como deve ser
h5Header.addEventListener('mouseover', () => {
  playAudio(audio);
  h5Header.classList.add('hFraseAfter');
});

// Eventos para reativar cliques quando o áudio termina
audioEdu.addEventListener('ended', () => {
  isAudioPlaying = false;
  enableClicks();
  equalizerBar.classList.remove('equalizerPlay');
});

// Eventos para reativar cliques quando o áudio termina
audioRo.addEventListener('ended', () => {
  isAudioPlaying = false;
  enableClicks();
  RequalizerBar.classList.remove('equalizerPlayR');
});

// Eventos para reativar cliques quando o áudio termina
audioB.addEventListener('ended', () => {
  isAudioPlaying = false;
  enableClicks();
  BequalizerBar.classList.remove('equalizerPlayB');
});

audio.addEventListener('ended', () => {
  isAudioPlaying = false;
  enableClicks();
  h5Header.classList.remove('hFraseAfter');
});

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