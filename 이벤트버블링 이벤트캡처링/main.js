// 이벤트 버블링
var divs = document.querySelectorAll('div');

divs.forEach(function (div) {
	div.addEventListener('click', logEvent);
});

function logEvent(event) {
	// 버블링이나 캡처링을 막고 싶다면 
	// 이벤트 발생 시 실행되는 함수에 event.stopPropagation() 추가
	// event.stopPropagation();
	console.log(event.currentTarget.className);
}



// 이벤트 캡처링
// addEventListener()의 옵션 객체에 capture:true를 설정
var divs = document.querySelectorAll('div');

divs.forEach(function (div) {
	div.addEventListener('click', logEvent, {
		capture: true
	});
});

function logEvent(event) {
	// event.stopPropagation();
	console.log(event.currentTarget.className);
}