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
    // 그리기 시작
    ctx.beginPath();
    // 색깔 채우기
    ctx.fillStyle = this.color;

    // arc: 주어진 정보들로 특정 위치에 특정 크기의 공을 그려냄
    // x and y is center of the ball
    // 0 is a start point of degree around radius of the ball
    // 2 * Math.PI is an end point which is equivalent to 360 degree
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

    // 그리기 마침
    ctx.fill();
  }

  bounce() {
    // 캔버스 벽에 부딪히면 속도에 -1을 곱해줌
    //  => 공이 반대 방향으로 이동하도록
    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.velx = -this.velx;
    }

    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.vely = -this.vely;
    }

    // 공을 만들고 나서 좌표 값에 속도 더해주기 (=> 그래야 공이 움직일 수 있음)
    this.x += this.velx;
    this.y += this.vely;
  }
}

// 일시정지 flag
let isPaused = false;
// cancelAnimationFrame의 기준 (requestAnimationFrame을 할당하는 변수)
let myReq;

// 시작 버튼
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
  // 공 생성
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
  // isPaused 토글
  isPaused = !isPaused;

  // 버튼 텍스트 토글
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

// 멈춤 버튼
const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', () => {
  // 화면에 움직임이 있을 때 ('애니메이션' 삭제)
  cancelAnimationFrame(myReq);

  // 화면에 움직임이 없을 때 (정지된 '그림' 삭제)
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // 시작버튼 다시 활성화
  startBtn.style.color = '#000';
  startBtn.style.cursor = 'pointer';
  startBtn.style.backgroundColor = '#eee';
  startBtn.style.pointerEvents = 'auto';
});

// 랜덤 함수
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// 4를 거듭제곱할 횟수
let count = 0;
// 생성될 공의 개수 (4의 거듭제곱수로 올라감)
let powerOfFour = 1;

// 복제 버튼
const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', () => {
  count++; // 복제버튼 누를 때마다 1씩 증가
  powerOfFour = Math.pow(4, count); // 4의 count 제곱 수만큼 증가한 값으로 업데이트
  console.log(powerOfFour);

  // powerOfFour 갯수만큼 공 생성
  createBall();
});

// 렌더링할 공 인스턴스를 담는 배열
const balls = [];
let radius = 3; // 반지름 (우선은 변수로)

function createBall() {
  if (powerOfFour === 1) {
    // powerOfFour 수만큼 배열을 돌면서 공 객체 생성
    while (balls.length < powerOfFour) {
      const ball = new Ball(
        radius * 2, // 공이 생성될 x 좌표
        radius * 2, // 공이 생성될 y 좌표
        5, // 속도
        radius, // 반지름
        `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})` // 색깔
      );

      console.log(ball);

      // 배열에 생성된 공 객체 추가
      balls.push(ball);
    }
    // 원래 돌던 공의 사방 대각선 좌표에 새로운 공 생성
    // (좌상단은 원래 있던 공이 이동하여 위치)
  } else {
    while (balls.length < powerOfFour) {
      const ball = new Ball(
        random(radius, width - radius), // 공이 생성될 x 좌표
        random(radius, height - radius), // 공이 생성될 y 좌표
        5, // 속도
        radius, // 반지름
        `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})` // 색깔
      );

      console.log(ball);

      // 배열에 생성된 공 객체 추가
      balls.push(ball);
    }
  }
}

function animate() {
  // 다음 애니메이션 그리기 전 이전 캔버스 초기화
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);

  // 배열을 돌면서 각각의 공에 draw 함수와 bounce 함수 실행
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].bounce();
  }

  // isPaused가 false일 때만 애니메이션 실행
  if (!isPaused) {
    myReq = requestAnimationFrame(animate);
  }
}
