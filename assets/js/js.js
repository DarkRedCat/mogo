document.querySelectorAll('a.yakor').forEach(link =>{
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = 60

        const elementPosition = scrollTarget.getBoundingClientRect().top 
        const offsePosition = elementPosition - topOffset

        window.scrollBy({ top: offsePosition, behavior: 'smooth',})
    })
})
