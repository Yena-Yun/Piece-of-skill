// gets the canvas element
const canvas = document.getElementById('mycanvas');

// set the width and height of stage equal to canvas  width and height
const width = canvas.width;
const height = canvas.height;

// call the getContext method to draw 2d shape
const ctx = canvas.getContext('2d');

let myReq;

// create Ball class
class Ball {
  constructor(x, y, speed, radius, color) {
    this.x = x; // horizontal position of the ball
    this.y = y; // vertical position of the ball
    this.velx = speed; // velocity x added to coordinate x when we animate our ball
    this.vely = speed; // velocity y added to coordinate y
    this.radius = radius; // radius is a radius of the ball
    this.color = color; // fill ball shape with given color
  }

  // create draw func
  draw() {
    ctx.beginPath(); // start drawing
    ctx.fillStyle = this.color; // fill ball shape with given color

    // arc: 주어진 정보를 활용하여 특정 위치에 특정 크기로 공을 그려냄
    // x and y is center of the ball
    // 0 is a start point of degree around radius of the ball
    // 2 * Math.PI is an end point which is equivalent to 360 degree
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill(); // finish drawing
  }

  // create update func
  bounce() {
    // if x and y position is greater than or less than
    // browser viewport than balls turn another direction
    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.velx = -this.velx; // 속도에 -1을 곱해줌 => 반대 방향으로 이동하도록
    }

    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.vely = -this.vely;
    }

    // x and y velocity added to x and y coordinate
    // everytime updateBall func is called
    this.x += this.velx;
    this.y += this.vely;
  }
}

// 일시정지 및 멈춤 flag
let isPaused = false;
let isStopped = false;

// 시작 버튼
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
  console.log('시작버튼 클릭!');
  createBall();
  isStopped = !isStopped;
  console.log('시작버튼 isStopped:' + isStopped);

  startBtn.style.color = '#c5c5c5';
  startBtn.style.cursor = 'default';
  startBtn.style.backgroundColor = '#eee';
  startBtn.style.pointerEvents = 'none';
  // console.log(ball.x);
  // console.log(ball.y);

  myReq = requestAnimationFrame(animate);
});

// 일시정지 버튼
const pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener('click', () => {
  console.log('일시정지버튼 클릭!');
  isPaused = !isPaused;

  if (isPaused) {
    pauseBtn.innerText = '다시재생';
  } else {
    pauseBtn.innerText = '일시정지';
  }

  if (!isPaused) {
    myReq = requestAnimationFrame(animate);
  }
});

// 멈춤 버튼
const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', () => {
  console.log('멈춤버튼 클릭!');
  // isStopped = true;
  console.log('멈춤버튼 isStopped:' + isStopped);
  // if (isStopped) {
  cancelAnimationFrame(myReq);

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // // 시작버튼 되돌리기
  // startBtn.style.color = '#000';
  // startBtn.style.cursor = 'pointer';
  // startBtn.style.backgroundColor = '#eee';
  // startBtn.style.pointerEvents = 'auto';
  // }
});

// 생성되는 공에 랜덤한 색깔 부여
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

let count = 0; // 4를 거듭제곱할 횟수
let powerOfFour = 1; // 최종 생성될 공의 개수

// 복제 버튼
const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', () => {
  console.log('복제버튼 클릭!');
  count++; // 복제버튼을 누를 때마다 count가 1씩 증가
  console.log(count);
  powerOfFour = Math.pow(4, count); // 4의 count 제곱만큼 증가한 값으로 업데이트
  console.log(powerOfFour);

  createBall();
});

// create some balls and store in an array
const balls = [];

function createBall() {
  // balls 배열을 거듭제곱수만큼 돌면서 공 인스턴스 생성
  while (balls.length < powerOfFour) {
    let radius = 5; // 반지름 지정

    // ball 생성하기
    const ball = new Ball(
      random(radius, width - radius), // x 좌표 (공이 생성될 시작 지점)
      random(radius, height - radius), // y 좌표 (공이 생성될 시작 지점)
      5, // 속도
      radius, // 반지름
      `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})` // 색깔
    );

    console.log(ball);

    // balls 배열에 생성된 ball 인스턴스 추가
    balls.push(ball);
  }
}

// create animate func
function animate() {
  // cover the previous frame's drawing before the next one is drawn
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);

  // run necessary func
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].bounce();
  }

  if (!isPaused) {
    myReq = requestAnimationFrame(animate);
  }
}

// finally call the animate func once start
// animate();
