$(document).ready(function() {

    $(".pat").click(function() {
      $(".video-pat").addClass('active');
      $(".video-feed").removeClass('active');
    });

    $(".feed").click(function() {
      $(".video-feed").addClass('active');
      $(".video-pat").removeClass('active');
    });
  
 });

const randomDivContainer = document.getElementById('duck__list');
const randomDivs = randomDivContainer.querySelectorAll('.duck');

function randomShow() {
  const randomIndex = Math.floor(Math.random() * randomDivs.length);
  for (let i = 0; i < randomDivs.length; i++) {
    randomDivs[i].classList.remove('active');
  }
  randomDivs[randomIndex].classList.add('active');
}

setTimeout(randomShow, 7000);

const playButton = document.getElementById('pat');
const videos = document.getElementsByClassName('video-pat');

playButton.addEventListener('click', () => {
  for (let i = 0; i < videos.length; i++) {
    videos[i].play();
  }
});

const playButton2 = document.getElementById('feed');
const videos2 = document.getElementsByClassName('video-feed');

playButton2.addEventListener('click', () => {
  for (let i = 0; i < videos2.length; i++) {
    videos2[i].play();
  }
});

const numberHp = document.getElementById('hp-number');

setInterval(() => {
  let number = parseInt(numberHp.textContent);
  number -= 2;
  numberHp.textContent = number;
}, 30000); // 30 секунд

const numberLvl = document.getElementById('lvl-number');

setInterval(() => {
  let number = parseInt(numberLvl.textContent);
  number++;
  numberLvl.textContent = number;
}, 15000); // 15 секунд

const incrementButton2 = document.getElementById('feed');
const numberDisplay2 = document.getElementById('hp-number');

incrementButton2.addEventListener('click', () => {
  let number2 = parseInt(numberDisplay2.textContent);
  number2 += 2;
  numberDisplay2.textContent = number2;
});