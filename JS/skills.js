observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animateIllustrator');
            observer.unobserve(entry.target);
        }
    })
})

observer.observe(document.querySelector('#container1'));

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animatePhotoshop');
            observer.unobserve(entry.target);
        }
    })
})

observer.observe(document.querySelector('#container2'));

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animateAfterEF');
            observer.unobserve(entry.target);
        }
    })
})

observer.observe(document.querySelector('#container3'));

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animateIndesign');
            observer.unobserve(entry.target);
        }
    })
})

observer.observe(document.querySelector('#container4'));

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animatePicsart');
            observer.unobserve(entry.target);
        }
    })
})

observer.observe(document.querySelector('#container5'));
