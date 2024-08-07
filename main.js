$(".inner-switch").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(".inner-switch").text("Dark");
    } else {
        $("body").addClass("dark");
        $(".inner-switch").text("Light");
    }
});

const contactForm = document.getElementById('contactForm');
const message = document.getElementById('message');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
    
});

const setError = (element, message) => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');


    errorDisplay.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
}

const setSuccess = (element, message) => {
    const formGroup = element.parentElement;
    const successDisplay = formGroup.querySelector('.error');

    successDisplay.innerText = message;
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>([\]\\.,;:\s@"]+(\.[^<>([\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () => {
    const messagevalue = message.value.trim();
    const namevalue = name.value.trim();
    const emailvalue = email.value.trim();
    const subjectvalue = subject.value.trim();

    if (messagevalue === '') {
        setError(message, 'پیامی بنویسید')
    } else {
        setSuccess(message, 'موفقیت امیز')
    }

    if (namevalue === '') {
        setError(name, 'نام کاربری را وارد کنید')
    } else {
        setSuccess(name, 'موفقیت امیز')
    }

    if (emailvalue === '') {
        setError(email, 'ایمیل را وارد کنید')
    } else if (!isValidEmail(emailvalue)) {
        setError(email, 'ایمیل را وارد کنید')
    } else {
        setSuccess(email, 'موفقیت امیز')
    }

    if (subjectvalue === '') {
        setError(subject, 'موضوع را وارد کنید')
    } else {
        setSuccess(subject, 'موفقیت امیز')
    }
};


$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
    } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
    }
});

$('#back-top a').on("click", function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});
