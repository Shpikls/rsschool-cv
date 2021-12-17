hljs.highlightAll();

const imgReactGmp = document.querySelectorAll('.card > img')

imgReactGmp.forEach((item) => {
  item.onclick = function () {
    item.classList.toggle('card__open')
  }
})

toggleArrowBackToTop()

window.onscroll = function (event) {
  toggleArrowBackToTop()
}

function toggleArrowBackToTop () {
  const arrow = document.querySelector('.arrow-up');

  if (window.scrollY === 0) {
    arrow.classList.add('hide')
  } else {
    arrow.classList.remove('hide')
  }
}