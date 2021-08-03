// 이벤트 위임 사용하기 전
var inputs = document.querySelectorAll('input');

// 인풋 박스에 클릭 이벤트 리스너 추가
inputs.forEach(function (input) {
	input.addEventListener('click', function (event) {
		alert('clicked');
	});
});

// 새 리스트 아이템 추가
var itemList = document.querySelector('.itemList');

var li = document.createElement('li');
var input = document.createElement('input');
var label = document.createElement('label');
var labelText = document.createTextNode(' 이벤트 위임 학습');

input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item3');
label.setAttribute('for', 'item3');
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);


// 인풋 박스에 클릭 이벤트 리스너를 추가하는 시점에서 리스트 아이템은 두 개이다
// 따라서 새롭게 추가된 리스트 아이템에는 클릭 이벤트 리스너가 등록되지 않음
// 매번 새롭게 추가된 리스트 아이템까지 클릭 이벤트 리스너를 일일이 달아줄 수 없음 => 이벤트 위임 사용

// 이벤트 위임
// 모든 li의 인풋 박스에 일일이 이벤트 리스너를 추가하는 대신 인풋 박스의 상위 요소인 ul 태그, .itemList에 이벤트 리스너를 달아놓음
var itemList = document.querySelector('.itemList');

itemList.addEventListener('click', function (event) {
		alert('clicked');
	});

var li = document.createElement('li');
var input = document.createElement('input');
var label = document.createElement('label');
var labelText = document.createTextNode(' 이벤트 위임 학습');

input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item3');
label.setAttribute('for', 'item3');
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);