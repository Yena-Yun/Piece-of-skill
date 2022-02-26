let count = 2; // innerText 숫자의 초기값은 2

window.onscroll = () => {
  // innerHeight(보이는 높이, 뷰포트)와 scrollY(스크롤 이동값)를 더한 값이 offsetHeight(컨텐츠의 전체 높이값, 뷰포트 내에 안 보이는 부분 포함)보다 같거나 커지면
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // 새로운 컨텐츠 생성 (또는 서버에서 불러오기)
    let toAdd = document.createElement('div'); // 새로운 div 태그를 만들고
    toAdd.classList.add('box'); // 'box' 클래스 부여
    toAdd.textContent = `${++count}번째 블록`; // innerText 추가
    document.querySelector('section').appendChild(toAdd); // 만든 div를 section에 추가
  }
};
