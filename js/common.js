/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  //html의 속성을 지정할때 쓰는 메소드 (속성이름 , 속성에 들어갈 데이터)
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  //html의 속성을 지정할때 쓰는 메소드 (속성이름 , 속성에 들어갈 데이터)
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023 현재날짜를 반환