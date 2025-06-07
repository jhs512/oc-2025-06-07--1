    // 이미지 슬라이드드
    const slides = document.querySelectorAll('.slider__slide');
    let current = 0;
    let next = 0;

    function moveSlide() {
      const prev = current;
      current = (current + 1) % slides.length;
      next = (current + 1) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');
        slide.style.left = '100%'; // 기본 위치
      });

      slides[prev].classList.add('prev'); // 왼쪽으로 밀려날 슬라이드
      slides[current].classList.add('active'); // 화면에 보일 슬라이드
      slides[next].classList.add('next'); // 화면에 보일 슬라이드
    }


    // 모달팝업
    const modal = document.getElementById('modal1');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const overlay = modal.querySelector('.modalOverlay');

    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    moveSlide(); // 초기 실행
    setInterval(moveSlide, 3000); // 3초마다 이동