$(function () {
  let mainSlider = new Swiper('.main_slider .swiper', {
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      // 슬라이더 내부 인터렉션 발생시 자동재생 안멈추게
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let mainStick = new Swiper('.main_stick .swiper', {
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      // 슬라이더 내부 인터렉션 발생시 자동재생 안멈추게
      disableOnInteraction: false,
    },
  });

  // 태블릿, 모바일 사이트맵 열기
  $('#header .sitemap_btn').on('click', function () {
    $('#header .menu_wrap').addClass('on');
    $('#header .dimmed').addClass('on');
  });

  // 사이트맵 닫기
  $('#header .menu_wrap .close_btn').on('click', function () {
    $('#header .menu_wrap').removeClass('on');
    $('#header .dimmed').removeClass('on');
  });

  // 헤더 스크롤 시 스타일 변경
  const header = $('#header');

  $(window).on('scroll', function () {
    let _scrollY = $(this).scrollTop();

    if (_scrollY > 50) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  // 푸터 lang_wrap
  $('#footer .footer_lang_wrap').on('click', function () {
    $(this).toggleClass('on');
  });

  // 로그인 페이지
  const headerS = $('#sub_header');

  $(window).on('scroll', function () {
    let _scrollY = $(this).scrollTop();

    if (_scrollY > 50) {
      headerS.addClass('fixed');
    } else {
      headerS.removeClass('fixed');
    }
  });

  // 로그인페이지
  // 로그인페이지 입력필드 삭제버튼 토글
  const inputs = document.querySelectorAll('.login_page .input_wrap input');

  inputs.forEach((v) => {
    v.addEventListener('keyup', function () {
      if (this.value) {
        this.nextElementSibling.style.display = 'block';
      } else {
        this.nextElementSibling.style.display = 'none';
      }
    });
  });

  // 로그인페이지 입력필드 초기화
  const deleteBtns = document.querySelectorAll('.login_page .delete_btn');

  deleteBtns.forEach((v) => {
    v.addEventListener('click', function () {
      this.previousElementSibling.value = '';
      this.style.display = 'none';
    });
  });

  // input file
  $('.file_wrap input[type=file]').on('change', function () {
    let filename = $(this).get(0).files[0].name;

    $(this).parent().prev().val(filename);
  });
});
