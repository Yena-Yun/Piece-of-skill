let count = 2;

// window에서 onscroll 이벤트가 발생하면
window.onscroll = () => {
  // 조건: innerHeight(보이는 높이)와 scrollY(스크롤 이동값)를 더한 값이 offsetHeight(실제 컨텐츠의 높이)보다 같거나 커지면
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // 새로운 div 생성
    let toAdd = document.createElement('div');
    toAdd.classList.add('box');
    toAdd.textContent = `${++count}번째 블록`;
    document.querySelector('section').appendChild(toAdd);
  }
};
