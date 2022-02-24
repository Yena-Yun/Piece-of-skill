function sortingNumber(a, b) {
  if (typeof a == 'number' && typeof b == 'number') return a - b;

  // 천단위 쉼표와 공백문자만 삭제하기
  var a = (a + '').replace(/[,\s\xA0]+/g, '');
  var b = (b + '').replace(/[,\s\xA0]+/g, '');

  var numA = parseFloat(a) + '';
  var numB = parseFloat(b) + '';

  if (numA == 'NaN' || numB == 'NaN' || a != numA || b != numB) return false;

  return parseFloat(a) - parseFloat(b);
}

/* changeForSorting() : 문자열 바꾸기 */

function changeForSorting(first, second) {
  // 문자열의 복사본 만들기
  var a = first.toString().replace(/[\s\xA0]+/g, ' ');
  var b = second.toString().replace(/[\s\xA0]+/g, ' ');

  var change = { first: a, second: b };

  if (a.search(/\d/) < 0 || b.search(/\d/) < 0 || a.length == 0 || b.length == 0) return change;

  var regExp = /(\d),(\d)/g; // 천단위 쉼표를 찾기 위한 정규식

  a = a.replace(regExp, '$1' + '$2');
  b = b.replace(regExp, '$1' + '$2');

  var unit = 0;
  var aNb = a + ' ' + b;
  var numbers = aNb.match(/\d+/g); // 문자열에 들어있는 숫자 찾기

  for (var x = 0; x < numbers.length; x++) {
    var length = numbers[x].length;
    if (unit < length) unit = length;
  }

  var addZero = function (string) {
    // 숫자들의 단위 맞추기

    var match = string.match(/^0+/);

    if (string.length == unit) return match == null ? string : match + string;

    var zero = '0';

    for (var x = string.length; x < unit; x++) string = zero + string;

    return match == null ? string : match + string;
  };

  change.first = a.replace(/\d+/g, addZero);
  change.second = b.replace(/\d+/g, addZero);

  return change;
}

/* byLocale() */

function byLocale() {
  var compare = function (a, b) {
    var sorting = sortingNumber(a, b);

    if (typeof sorting == 'number') return sorting;

    var change = changeForSorting(a, b);

    var a = change.first;
    var b = change.second;

    return a.localeCompare(b);
  };

  var ascendingOrder = function (a, b) {
    return compare(a, b);
  };
  var descendingOrder = function (a, b) {
    return compare(b, a);
  };

  return { ascending: ascendingOrder, descending: descendingOrder };
}

/* replacement() */

function replacement(parent) {
  var tagName = parent.tagName.toLowerCase();
  if (tagName == 'table') parent = parent.tBodies[0];
  tagName = parent.tagName.toLowerCase();
  if (tagName == 'tbody') var children = parent.rows;
  else var children = parent.getElementsByTagName('li');

  var replace = {
    order: byLocale(),
    index: false,

    array: (function () {
      var array = [];
      for (var x = 0; x < children.length; x++) array[x] = children[x];
      return array;
    })(),

    checkIndex: function (index) {
      if (index) this.index = parseInt(index, 10);
      var tagName = parent.tagName.toLowerCase();
      // 바로 윗 태그가 tbody이거나 index가 기존에 없으면 -> index = 0
      if (tagName == 'tbody' && !index) this.index = 0;
    },

    getText: function (child) {
      // cells = 테이블의 셀
      // index가 존재하면 받아온 child의 index번째 셀을 가져옴
      if (this.index) child = child.cells[this.index];
      // index번째 셀(태그 덩어리)의 텍스트를 받아옴 (텍스트 뒤에 공백 추가하는 함수)
      return getTextByClone(child);
    },

    setChildren: function () {
      var array = this.array;
      while (parent.hasChildNodes()) parent.removeChild(parent.firstChild);
      for (var x = 0; x < array.length; x++) parent.appendChild(array[x]);
    },

    ascending: function (index) {
      // 오름차순
      this.checkIndex(index);
      var _self = this;
      var order = this.order;
      var ascending = function (a, b) {
        var a = _self.getText(a);
        var b = _self.getText(b);
        return order.ascending(a, b);
      };
      this.array.sort(ascending);
      this.setChildren();
    },

    descending: function (index) {
      // 내림차순
      this.checkIndex(index);
      var _self = this;
      var order = this.order;
      var descending = function (a, b) {
        var a = _self.getText(a);
        var b = _self.getText(b);
        return order.descending(a, b);
      };
      this.array.sort(descending);
      this.setChildren();
    },
  };
  return replace;
}

// 태그를 복사해서 안에 있는 텍스트 얻어내고 뒤에 공백 추가
function getTextByClone(tag) {
  // tag = index를 부여받은 셀 태그
  var clone = tag.cloneNode(true); // 복사본 만들기 ([...tag]와 비슷한 개념인듯)
  // 복사본에서 <br/> 태그 가져오기
  var br = clone.getElementsByTagName('br');
  // br 태그의 맨 앞자리가 있는 동안(?)
  while (br[0]) {
    // 공백이 들어간 텍스트노드 생성
    var blank = document.createTextNode(' ');
    // 공백 앞에 br태그 0번째 넣고
    clone.insertBefore(blank, br[0]);
    // br태그 0번째 제거 -> 공백을 넣기 위한 기준 역할만?
    clone.removeChild(br[0]);
  }

  var isBlock = function (tag) {
    var display = '';
    // getComputedStyle: 특정 태그의 css 속성들을 모두 가져옴
    // 원래 javascript에서는 getPropertyValue로 속성들 중 하나를 가져오는 것 같지만(getPropertyValue('font-size')) jquery는 [ ]로 간단히 가져올 수 있는 듯
    if (window.getComputedStyle) display = window.getComputedStyle(tag, '')['display'];
    else display = tag.currentStyle['display'];
    return display == 'block' ? true : false;
  };

  // getElementsByTagName('*'): 여러 태그 덩어리(clone)의 태그 전부를 가져옴 => 배열이 됨
  var children = clone.getElementsByTagName('*');
  // 배열을 돌면서 child라는 변수에 각각 따로 담음
  for (var x = 0; x < children.length; x++) {
    var child = children[x];
    // child에 value가 없거나(?) display: block이 있는 경우
    // innerHTML 뒤에 공백 추가 (개봉일 부분인듯)
    if (!('value' in child) && isBlock(child)) child.innerHTML = child.innerHTML + ' ';
  }

  // textContent가 clone 태그 덩어리에 있으면 textContent 아니면 innerText 반환
  var textContent = 'textContent' in clone ? clone.textContent : clone.innerText;
  return textContent;
}

var myTable = document.getElementById('KoreanMovie');
var replace = replacement(myTable);

function sortTD(index) {
  replace.ascending(index);
}

function reverseTD(index) {
  replace.descending(index);
}
