const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const dropbtn = document.querySelector('.dropbtn');
const dropcont = document.querySelector('.dropdown-content');
dropbtn.addEventListener("click", () => {
    dropcont.classList.toggle("current");
});


const prev = document.querySelector('.prev')
const next = document.querySelector('.next');
const images = document.querySelector('.sliding-items').children;
const totalimages = images.length;
let index = 0;

prev.addEventListener("click", () => {
    nextImage('next');
});

next.addEventListener("click", () => {
    nextImage('prev');
});

function nextImage(direction) {
    if (direction == 'next') {
        index++;
        if (index == totalimages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalimages - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('main-item');
    }
    images[index].classList.add('main-item');
}

// ================================================================================================= //
// ================================================================================================= //

// Master DOManipulator v2 ------------------------------------------------------------
const items = document.querySelectorAll('.item'),
    controls = document.querySelectorAll('.control'),
    headerItems = document.querySelectorAll('.item-header'),
    descriptionItems = document.querySelectorAll('.item-description'),
    activeDelay = .76,
    interval = 5000;

let current = 0;

const slider = {
    init: () => {
        controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    nextSlide: () => { // Increment current slide and add active class
        slider.reset();
        if (current === items.length - 1) current = -1; // Check if current slide is last in array
        current++;
        controls[current].classList.add('active');
        items[current].classList.add('active');
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
    },
    clickedControl: (e) => { // Add active class to clicked control and corresponding slide
        slider.reset();
        clearInterval(intervalF);

        const control = e.target,
            dataIndex = Number(control.dataset.index);

        control.classList.add('active');
        items.forEach((item, index) => {
            if (index === dataIndex) { // Add active class to corresponding slide
                item.classList.add('active');
            }
        })
        current = dataIndex; // Update current slide
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
        intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
    },
    reset: () => { // Remove active classes
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
    transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
        let seconds;

        items.forEach(item => {
            const children = item.childNodes; // .vertical-part(s)
            let count = 1,
                delay;

            item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

            children.forEach(child => { // iterate through .vertical-part(s) and style b element
                if (child.classList) {
                    item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
                    child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
                    count++;
                }
            })
        })
    },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();


// =================================================================================================================== //
// =================================================================================================================== //
const project = setInterval(projectDone, 350)
const clients = setInterval(happyClients, 50)
const coffee = setInterval(cupsCoffee, 1)
let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 15) {
        clearInterval(project)
    }
}

function happyClients() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if (count2 == 89) {
        clearInterval(clients)
    }
}

function cupsCoffee() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 1000) {
        document.getElementById("number3").innerHTML = "1000+"
        clearInterval(coffee)
    }
}

// =================================================================================================================== //
// =================================================================================================================== //

// =================================================================================================================== //
// =================================================================================================================== //
// =================================================================================================================== //














