const canvas = document.getElementById('mycanvas');

const width = canvas.width;
const height = canvas.height;

const ctx = canvas.getContext('2d');

class Ball {
  constructor(x, y, speed, radius, color) {
    this.x = x;
    this.y = y;
    this.velx = speed;
    this.vely = speed;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounce() {
    // 속도에 -1을 곱함: canvas 벽에 부딪히면 공이 반대방향으로 이동
    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.velx *= -1;
    }

    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.vely *= -1;
    }

    // 좌표 값에 속도를 더해서 공이 움직이게 함
    this.x += this.velx;
    this.y += this.vely;
  }
}

// 랜덤 함수
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

let powerCnt = 0; // 4를 거듭제곱할 횟수
let ballCnt = 1; // 거듭제곱으로 생성되는 공의 개수

// 생성된 공을 담을 배열
const balls = [];

// 공의 x, y 좌표 초기값과 반지름
let x = 10;
let y = 10;
let radius = 5;

function createBall() {
  while (balls.length < ballCnt) {
    // ballCnt가 거듭제곱된 상태이면
    // 공의 생성지점인 x, y 좌표에 랜덤값 부여
    if (ballCnt !== 1) {
      x = random(radius, width - radius);
      y = random(radius, height - radius);
    }

    const ball = new Ball(
      x, // 공이 생성될 x 좌표
      y, // 공이 생성될 y 좌표
      5, // 속도
      radius, // 반지름
      `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})` // 공에 랜덤 색깔 부여
    );

    // 복제된 직후 공이 화면에 나타나지는 않지만 콘솔창으로 생성된 공들을 확인할 수 있음
    console.log(ball);

    // 배열에 생성된 공 추가
    balls.push(ball);
  }
}

function animate() {
  // 다음 애니메이션 그리기 전 이전 캔버스 초기화
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);

  // balls 배열을 돌면서 각각의 공에 draw와 bounce 함수 실행
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].bounce();
  }

  // isPaused가 false일 때만 애니메이션 실행
  if (!isPaused) {
    myReq = requestAnimationFrame(animate);
  }
}

let isPaused = false; // 일시정지 여부 flag
let myReq; // cancelAnimationFrame의 기준 (requestAnimationFrame을 할당)

// 시작 버튼
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
  createBall();

  // 시작버튼 비활성화
  startBtn.style.color = '#c5c5c5';
  startBtn.style.cursor = 'default';
  startBtn.style.backgroundColor = '#eee';
  startBtn.style.pointerEvents = 'none';

  myReq = requestAnimationFrame(animate);
});

// 일시정지 버튼
const pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;

  // 누를 때마다 버튼 text 바꾸기
  if (isPaused) {
    pauseBtn.innerText = '다시재생';
  } else {
    pauseBtn.innerText = '일시정지';
  }

  // isPaused가 false일 때만 애니메이션 실행
  if (!isPaused) {
    myReq = requestAnimationFrame(animate);
  }
});

// 복제 버튼
const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', () => {
  powerCnt++; // 거듭제곱 횟수: 버튼 누를 때마다 1씩 증가
  ballCnt = Math.pow(4, powerCnt); // 총 생성될 공의 개수
  console.log(ballCnt);

  // ballCnt 개수만큼 공 생성
  createBall();
});

// 멈춤 버튼
const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', () => {
  // 화면에 움직임이 있을 때 캔버스 초기화 (애니메이션 삭제)
  cancelAnimationFrame(myReq);

  // 화면에 움직임이 없을 때 캔버스 초기화 (정지된 공 삭제)
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // 시작버튼 다시 활성화
  startBtn.style.color = '#000';
  startBtn.style.cursor = 'pointer';
  startBtn.style.backgroundColor = '#eee';
  startBtn.style.pointerEvents = 'auto';
});
