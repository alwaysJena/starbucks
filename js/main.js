
// class가 search인 요소를 찾음
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function () {
    //logic..
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    //html의 속성을 지정할때 쓰는 메소드 (속성이름 , 속성에 들어갈 데이터)
    searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    //html의 속성을 지정할때 쓰는 메소드 (속성이름 , 속성에 들어갈 데이터)
    searchInputEl.setAttribute('placeholder', '');
});