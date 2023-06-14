
/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
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


/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
  "scroll",
  _.throttle(function () {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // badgeEl.style.display = 'none'
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼 보이기!
      gsap.to(toTopEl, .2, {
        x: 0
      });
    } else {
      // //배지 보이기
      // badgeEl.style.display = 'block'
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //버튼 숨기기!
      gsap.to(toTopEl, .2, {
        x: 100
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    //gsap PlugIn
    scrollTo: 0
  })
})

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.8 초뒤에 처리
    opacity: 1,
  });
});


/**
 * 슬라이드 요소 관리
 */
//new:생성자
//new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true, //자동재생
  loop: true, //반복재생
});

new Swiper(".promotion .swiper-container", {
  direction: "horizontal", //기본값
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복재생
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  direction: "horizontal", //기본값
  autoplay: true, //자동재생
  loop: true, //반복재생
  spaceBetween: 30, //슬라이드 사이 여백
  slidesPerView: 5, //한 번에 보여줄 슬라이드 개수
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});


/**
 * Promotion 슬라이드 토글 기능
 */
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    //보임처리
    promotionEl.classList.remove("hide");
  }
});


/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5),//애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1, //무한 반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: delay
    }
  );
}


floatingObject('.floating1' , 1, 15); //요소, 지연시간, 크기
floatingObject('.floating2' , 0.5, 15);
floatingObject('.floating3' , 1.5, 20);


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //뷰포트 탑(0)과 버텀(1)사이의 위치 : 뷰포트의 어느지점에서 감시되었다를 판단할 요소
    })
    .setClassToggle(spyEl, 'show') // (요소, 클래스이름)  요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller());// 컨트롤러에 장면을 할당(필수!)
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023 현재날짜를 반환
