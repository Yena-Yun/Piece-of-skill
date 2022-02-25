export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    // 반지름
    this.radius = radius;

    // x, y 좌표값을 움직이는 속도
    this.vx = speed;
    this.vy = speed;

    // 지름 (반지름 * 2)
    const diameter = this.radius * 2;

    // x, y 좌표가 stage에 랜덤으로 위치하게 함
    // (x, y 좌표 자체는 공의 한가운데 지점 => 캔버스 상의 아무데서나 시작하되 최소한 지름길이보다는 안쪽에 있어야 함)
    this.x = diameter + (Math.random() * stageWidth - diameter);
    this.y = diameter + (Math.random() * stageHeight - diameter);
  }

  // 캔버스 context에 그림을 그리는 함수 (context와 stage의 넓이와 높이를 가져옴)
  draw(ctx, stageWidth, stageHeight) {
    // x와 y값에 각각 vx와 vy를 더해줘서 공이 움직이도록 만듦
    this.x += this.vx;
    this.y += this.vy;

    // 공이 벽에 닿으면 튕기는 함수 (stage의 넓이와 높이를 넣어줌)
    this.bounceWindow(stageWidth, stageHeight);

    ctx.fillStyle = '#fdd700';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  // stage 상에 닿았는지 판단하는 함수 (stage의 넓이와 높이를 가져옴)
  // (닿았다면 공이 반대로 튕기도록 함)
  bounceWindow(stageWidth, stageHeight) {
    // x의 최소지점은 공의 반지름만큼 떨어진 값
    const minX = this.radius;
    // x의 최대지점은 전체 stage의 넓이에서 공의 반지름만큼 뺀 값
    const maxX = stageWidth - this.radius;
    // y의 최소지점은 공의 반지름만큼 떨어진 값
    const minY = this.radius;
    // y의 최대지점은 전체 stage의 높이에서 공의 반지름만큼 뺀 값
    const maxY = stageHeight - this.radius;

    // 공이 세로 벽(y축)에 닿은 경우
    // (현재: y값은 증가하고 x값은 감소하는 상황)
    if (this.x <= minX || this.x >= maxX) {
      // x 속도값에 -1을 곱해주면 x값도 같이 증가
      // 공이 세로 벽에 튕기면서 우상단 방향으로 이동
      this.vx *= -1;
      this.x += this.vx;
      // 공이 가로 벽(x축)인 천장에 닿은 경우
    } else if (this.y <= minY || this.y >= maxY) {
      // y 속도값에 -1을 곱해줘서 y값만 감소
      // 공이 천장에 닿은 후 우하단 방향으로 이동
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}
