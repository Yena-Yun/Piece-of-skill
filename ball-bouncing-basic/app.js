// App에서 Ball을 import
import { Ball } from './ball.js';

class App {
  // 초기화 영역
  constructor() {
    // 캔버스 생성
    this.canvas = document.createElement('canvas');
    // 캔버스에서 context 가져오기
    this.ctx = this.canvas.getContext('2d');
    // 생성한 캔버스를 body에 부착
    document.body.appendChild(this.canvas);

    // 항상 윈도우에 resize 이벤트(=> 스크린 사이즈 정의)를 걸어주고 시작하기
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    // 공 스테이터스 기본값
    this.ball = new Ball(this.stageWidth, this.stageHeight, 40, 15);

    // 애니메이션 구동을 위해 requestAnimationFrame 설정
    window.requestAnimationFrame(this.animate.bind(this));
  }

  // 스크린 사이즈를 정의하는 함수
  resize() {
    // 스크린 사이즈를 stage~ 변수로 가져옴
    // (시중 예제는 스크린 사이즈를 정해놓고 하는 경우가 많지만 브라우저는 가변적인 대상
    // 	=> 스크린 사이즈를 정의하는 함수를 만들어놓는 것이 나중을 위해서 편함
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  // 애니메이션을 실제로 구동시키는 함수
  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    // 애니메이션이라는 것은 기본적으로 '프레임을 계속 생성'하는 것
    // (이전 그림과 다음 그림을 번갈아가면서 계속 보여주는 것)
    // 	=> 공 모양을 만들어주려면 생성하기 전에 이전 프레임을 지워줘야 함
    // (이전에 그렸던 걸 지워줌으로써 애니메이션이 움직이는 것처럼 보여지는 것)
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App();
};
