const canvas = document.querySelector('canvas');

// 브라우저 뷰포트 width와 height
const width = window.innerWidth;
const height = window.innerHeight;

// canvas의 width, height를 브라우저 뷰포트의 width, height로 맞춤
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

class Ball {
  constructor(x, y, velx, vely, size, color) {
    this.x = x; // 공의 x 좌표
    this.y = y; // 공의 y 좌표
    this.velx = velx; // 공의 x 좌표에 더해지는 속도
    this.vely = vely; // 공의 y 좌표에 더해지는 속도
    this.size = size; // 공의 반지름
    this.color = color; // 공의 색깔
  }

  drawBall() {
    ctx.beginPath(); // 그리기 시작
    ctx.fillStyle = this.color; // fillStyle은 주어진 색으로

    // x와 y 좌표는 공의 한가운데 지점
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // 공 테두리 그리기
    ctx.fill(); // 공에 색 채우기 (그리기 마침)
  }

  // 공이 벽에 부딪힌 경우 반대방향으로 튕겨 나가게 함
  updateBall() {
    // x, y 각 속도에 -1을 곱하면 공의 '방향'만 반대로 바뀜
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.velx = -this.velx;
    }
    if (this.y + this.size >= height || this.y - this.size <= 0) {
      this.vely = -this.vely;
    }

    // 방향이 바뀐 상태에서 '나아가게' 하려면 좌표에 속도를 더해주어야 함
    this.x += this.velx;
    this.y += this.vely;
  }
}

// 랜덤 함수
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// 생성된 공들을 담을 배열
const balls = [];

// 공은 25개까지만 생성
while (balls.length < 25) {
  let size = random(10, 20);

  const ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-7, 7),
    random(-7, 7),
    size,
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
  );

  // 만든 공을 공 배열 안에 추가
  balls.push(ball);
}

function loop() {
  // 다음 공이 그려지기 전에 이전 공을 지운다 (?)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height); // (이거 지우면 공이 지나가는 경로가 그려짐: 공 모양 x)

  for (let i = 0; i < balls.length; i++) {
    balls[i].drawBall();
    balls[i].updateBall();
  }

  // loop 함수를 계속해서 호출하고 애니메이션을 부드럽게 함
  requestAnimationFrame(loop);
}

loop();
