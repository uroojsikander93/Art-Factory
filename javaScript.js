// Mobile Menu Toggle - Urooj ke liye
document.querySelector(".logo").addEventListener("click", () => {
  if(window.innerWidth <= 992){
    document.querySelector(".nav ul").classList.toggle("show");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  
  const servicesData = [
    {img: "images/service-icon-01.png", title: "First Title Box", text: "Aenean vulputate massa sed neque consectetur, ac fringilla quam aliquet.", btn: "READ MORE"},
    {img: "images/service-icon-02.png", title: "Second Service Box", text: "Pellentesque vitae urna ut nisi viverra tristique quis at dolor.", btn: "DISCOVER MORE"},
    {img: "images/service-icon-03.png", title: "Third Title Box", text: "Quisque finibus libero augue, in ultrices quam dictum id.", btn: "MORE DETAIL"},
    {img: "images/service-icon-01.png", title: "Fourth Service Box", text: "Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit nec.", btn: "READ MORE"},
    {img: "images/service-icon-02.png", title: "Fifth Service Title", text: "Curabitur aliquam eget tellus id porta. Proin justo sapien.", btn: "DISCOVER"},
    {img: "images/service-icon-03.png", title: "Sixth Box Title", text: "Ut nibh velit, aliquam vitae pellentesque nec, convallis vitae lacus.", btn: "DETAIL"},
    {img: "images/service-icon-01.png", title: "Seventh Title Box", text: "Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet.", btn: "READ MORE"},
    {img: "images/service-icon-02.png", title: "Eighth Service Box", text: "Integer vel ultricies metus. Nulla facilisi. Cras vel elit nec velit.", btn: "DISCOVER MORE"},
    {img: "images/service-icon-03.png", title: "Ninth Title Box", text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.", btn: "MORE DETAIL"}
  ];

  let currentIndex = 0;
  const track = document.getElementById('slider-track');
  const dotsWrapper = document.getElementById('dots-wrapper');
  const totalItems = servicesData.length;

  // Cards banayen
  servicesData.forEach(item => {
    track.innerHTML += `
      <div class="service-item-col">
        <div class="service-white-box">
          <div class="service-icon-bg">
            <img src="${item.img}" alt="${item.title}">
          </div>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
          <a href="#" class="main-button">${item.btn}</a>
        </div>
      </div>
    `;
  });
  
  // Dots - Desktop par 3, Mobile par 1 ke hisab se
  function createDots(){
    dotsWrapper.innerHTML = "";
    const isMobile = window.innerWidth <= 768;
    const perView = isMobile ? 1 : 3;
    const totalSlides = Math.ceil(totalItems / perView);
    for(let i = 0; i < totalSlides; i++) {
      dotsWrapper.innerHTML += `<span onclick="goToSlide(${i * perView})"></span>`;
    }
  }
  createDots();

  function updateSlider() {
    const isMobile = window.innerWidth <= 768;
    const perView = isMobile ? 1 : 3;
    const movePercent = isMobile ? 100 : 33.333;
    track.style.transform = `translateX(-${currentIndex * movePercent}%)`;
    
    const activeDotIndex = Math.floor(currentIndex / perView);
    document.querySelectorAll('.dots-wrapper span').forEach((dot, i) => {
      dot.classList.toggle('active', i === activeDotIndex);
    });
  }

  document.querySelector('.left-arrow').onclick = () => {
    const perView = window.innerWidth <= 768 ? 1 : 3;
    currentIndex = currentIndex - perView;
    if(currentIndex < 0) currentIndex = totalItems - perView;
    updateSlider();
  }
  document.querySelector('.right-arrow').onclick = () => {
    const perView = window.innerWidth <= 768 ? 1 : 3;
    currentIndex = currentIndex + perView; 
    if(currentIndex > totalItems - perView) currentIndex = 0;
    updateSlider();
  }

  window.goToSlide = function(n) {
    currentIndex = n;
    updateSlider();
  }

  window.addEventListener("resize", () => {
    createDots();
    currentIndex = 0;
    updateSlider();
  });

  updateSlider();

  // FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.arrow');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.arrow').innerHTML = '▶';
        i.querySelector('.faq-answer').style.maxHeight = null;
      });
      if(!isActive) {
        item.classList.add('active');
        arrow.innerHTML = '▼';
        answer.style.maxHeight = answer.scrollHeight + "px"; 
      }
    });
  });
  const firstItem = document.querySelector('.faq-item.active');
  if(firstItem) {
    firstItem.querySelector('.faq-answer').style.maxHeight = firstItem.querySelector('.faq-answer').scrollHeight + "px";
  }
});
















