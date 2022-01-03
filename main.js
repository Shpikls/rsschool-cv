hljs.highlightAll();

const imgReactGmp = document.querySelectorAll('.card > img')

imgReactGmp.forEach((item) => {
  item.onclick = function () {
    item.classList.toggle('card__open')
  }
})
