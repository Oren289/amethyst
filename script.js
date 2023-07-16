import { memories } from './memories.js';

const daysText = document.getElementById('days-text');
const randompicText = document.getElementById('randompic-text');
const polaroidDisplay = document.getElementById('polaroid-display');
const polaroidImgContainer = document.getElementById('polaroid-img-container');
const polaroidDesc = document.getElementById('polaroid-desc');
const rollBtn = document.getElementById('roll-btn');
const gdluBtn = document.getElementById('gdlu-btn');
const maafinBtn = document.getElementById('maafin-btn');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

let rolled = 0;

var date1 = new Date('05/29/2021');
var date2 = new Date();

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
daysText.innerHTML = `It's been ${Math.ceil(Difference_In_Days)} days since we were dating &hearts;`;

const rollImage = () => {
  if (rolled === 0) {
    rolled = 1;
    randompicText.classList.add('d-none');
    polaroidDisplay.classList.remove('d-none');
  }

  const randomNum = Math.floor(Math.random() * memories.length);

  if (memories[randomNum].description !== null && memories[randomNum].name !== null) {
    polaroidImgContainer.innerHTML = `<img class="polaroid-img" src="./img/pictures/${memories[randomNum].name}" alt="" />`;
    polaroidDesc.innerHTML = memories[randomNum].description;
  }
};

const alertFunction = () => {
  alert('Oops...server error :)');
};

const alertFunction2 = () => {
  alert('I promise, i will never let you down');
};

const swapBtn = () => {
  if (button1.classList.contains('maafin')) {
    button1.classList.remove('maafin');
    button2.classList.add('maafin');
    button2.innerHTML = '<button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#exampleModal">Maafin</button>';
    button1.innerHTML = '<button type="button" class="btn btn-danger btn-sm" id="gdlu-btn">G dlu</button>';
  } else if (!button1.classList.contains('maafin')) {
    button2.classList.remove('maafin');
    button1.classList.add('maafin');
    button1.innerHTML = '<button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#exampleModal">Maafin</button>';
    button2.innerHTML = '<button type="button" class="btn btn-danger btn-sm" id="gdlu-btn">G dlu</button>';
  }
};

rollBtn.onclick = function () {
  rollImage();
};

gdluBtn.onclick = function () {
  alertFunction();
};

maafinBtn.onclick = function () {
  alertFunction2();
};
