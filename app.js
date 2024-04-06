const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



/* Animation du titre */

const titleAnim = document.getElementById('title_page');

new Typewriter(titleAnim, {
    deleteSpeed: 20
})
.typeString('Développeur-Web')
.pauseFor(400)
.typeString(' Full-Stack')
.pauseFor(2000)
.deleteChars(11)
.typeString('<span style="color: #0bec7c")> PHP..</span>')
.pauseFor(2000)
.deleteChars(6)
.typeString('<span style="color: #0bec7c")> Symfony..</span>')
.pauseFor(2000)
.deleteChars(10)
.typeString('<span style="color: #0bec7c")> JavaScript..</span>')
.pauseFor(2000)
.deleteChars(18)
.typeString('<span style="color: #0bec7c")>-Web</span>')
.start()