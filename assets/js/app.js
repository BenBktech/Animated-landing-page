let tl = gsap.timeline();

tl.from('.letter', {
    duration: 1,
    opacity: 0,
    stagger: 0.25, 
    color: '#D97171'
})

tl.to('.letter1', {
    duration: 0.5,
    delay: 0.5,
    fontSize: '16rem',
    x: -300,
    y: 100
})

tl.to('.letter2', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '8rem',
    x: 13,
    y: -250
})

tl.to('.letter3', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '8rem',
    x: 100,
    y: 280
})

tl.to('.letter4', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '16rem',
    x: 350,
    y: 150
})

tl.from('header', {
    duration: 0.5,
    y: 40,
    opacity: 0
})

tl.from('.hero', {
    duration: 1,
    height: 0,
    opacity: 0
}, "<-0.5")

tl.from('.hero', {
    height: 0,
    duration: 1,
    opacity: 0
}, "<-0.5")

tl.from('.triangle', {
    duration: 1,
    opacity: 0
}, "<0.5")

tl.from('.lines', {
    duration: 1,
    opacity: 0
}, "<0.5")