window.addEventListener('DOMContentLoaded', function () {
    var name = this.document.querySelector('#name').textContent;
    this.localStorage.setItem('name', name);

    var year = this.document.querySelector('#year').textContent;
    this.localStorage.setItem('year', year);

    var educate = this.document.querySelector('#educate').textContent;
    this.localStorage.setItem('educate', educate);

    var program = this.document.querySelector('#program').textContent;
    this.localStorage.setItem('program', program);

    var institute = this.document.querySelector('#institute').textContent;
    this.localStorage.setItem('institute', institute);

    var status = this.document.querySelector('#status').textContent;
    this.localStorage.setItem('status', status);

    var sex = this.document.querySelector('#sex').textContent;
    this.localStorage.setItem('sex', sex)

    var classes = this.document.querySelector('#class').textContent;
    this.localStorage.setItem('class', classes)

    var grade = this.document.querySelector('#grade').textContent;
    this.localStorage.setItem('grade', grade)

    var email = this.document.querySelector('#email').textContent;
    this.localStorage.setItem('email', email)

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('educate', educate);
    localStorage.setItem('year', year);
    localStorage.setItem('program', program);
    localStorage.setItem('institute', institute);
    localStorage.setItem('status', status);
    localStorage.setItem('sex', sex);
    localStorage.setItem('class', classes);
    localStorage.setItem('grade', grade);
})


document.addEventListener('DOMContentLoaded', function () {
    // Your code here...
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        // Prevent the form from being submitted
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var educate = document.getElementById('educate').value;
        var year = document.getElementById('year').value;
        var program = document.getElementById('program').value;
        var institute = document.getElementById('institute').value;
        var status = document.getElementById('status').value;
        var sex = document.getElementById('sex').value;
        var classValue = document.getElementById('class').value;
        var grade = document.getElementById('grade').value;

        // Store the form data in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('educate', educate);
        localStorage.setItem('year', year);
        localStorage.setItem('program', program);
        localStorage.setItem('institute', institute);
        localStorage.setItem('status', status);
        localStorage.setItem('sex', sex);
        localStorage.setItem('class', classValue);
        localStorage.setItem('grade', grade);

        // Redirect to index.html
        window.location.href = 'index.html';
    });
});