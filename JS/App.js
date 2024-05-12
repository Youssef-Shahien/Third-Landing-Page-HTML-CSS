let section = document.querySelector(".our-skills")
let progressSpan = document.querySelectorAll(".the-progress span")

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 250) {
        progressSpan.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }
}