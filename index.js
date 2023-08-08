

// animate stars 
gsap.fromTo(".star", {
    y: -150,
}, {
    y: 350,
    ease: "slow",
    stagger: {
        each: 2,
    },
    duration: 5,
    repeat: -1,
})


//Launch button function to toggle class for css animation

const selectRocket = document.querySelector(".rocket")
const selectButton = document.querySelector(".launch-button")

selectButton.addEventListener("click", (e) => {
    selectRocket.classList.toggle("animate")
})