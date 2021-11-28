// gets the canvas element
const canvas = document.getElementById('mycanvas');

// set the width and height of stage equal to canvas  width and height
const width = canvas.width;
const height = canvas.height;

// call the getContext method to draw 2d shape
const ctx = canvas.getContext('2d');

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

// 4배수로 숫자 늘리기 (count: 4를 제곱할 횟수)
function powerOfFour(count) {
  const num = Math.pow(4, count);
  return num;
}

// 생성되는 공에 랜덤한 색깔 부여
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

let isPaused = false;
let isStopped = false;

// 시작 버튼
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
  console.log('시작버튼 클릭!');
  startBtn.style.color = '#c5c5c5';
  startBtn.style.cursor = 'default';
  startBtn.style.backgroundColor = '#eee';
  startBtn.style.pointerEvents = 'none';
  // console.log(ball.x);
  // console.log(ball.y);

  window.requestAnimationFrame(animate);
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
    window.requestAnimationFrame(animate);
  }
});

// 멈춤 버튼
const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', () => {
  console.log('멈춤버튼 클릭!');
  isStopped = true;
  if (isStopped || isPaused) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
});

//   create some balls and store in an array
const balls = [];
let count = 4;

while (balls.length < count) {
  let radius = 5; // 반지름 지정

  // ball 생성하기
  const ball = new Ball(
    random(radius, width - radius), // x 좌표 (공이 생성될 시작 지점)
    random(radius, height - radius), // y 좌표 (공이 생성될 시작 지점)
    5, // 속도
    radius, // 반지름
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})` // 색깔
  );

  // balls 배열에 생성된 ball 인스턴스 추가
  balls.push(ball);
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
    requestAnimationFrame(animate);
  }
}

// finally call the animate func once start
// animate();
