function loading() {
    const getStart = document.querySelector('.tryit')
    const btn = document.querySelector('.hamburger-menu')
    const month = document.querySelector('.containers');
    btn.addEventListener('click', () => {
        month.style.display = "none"
    })
    setTimeout(function() {

    const test = document.querySelector('.containers');
    test.style.display = "block";
    }, 1000);
}

const email = document.querySelector('#email');
const error = document.querySelector('.error-msg');
const btn = document.querySelector('.btn');
const correct  = document.querySelector('.correct-msg');
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check() {
    if(email.value.match(regExp)) {
        email.style.borderColor = "green";
        error.style.display = "none";
        correct.style.display = "block"
        btn.style.bottom = "47px"
    } else {
        email.style.borderColor = "hsl(0, 94%, 66%)";
        error.style.display = "block";
        correct.style.display = "none"
    }
    if(email.value === "") {
        email.style.borderColor = "lightgrey";
        error.style.display = "none";
        btn.disabled = "false";
    }
}

const subBtn = document.querySelector('.btn');

subBtn.addEventListener('click', () => {
        alert('Subscribe Succeed')
})