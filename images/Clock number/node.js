const degree = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    const date = new Date();
    const hour = date.getHours() * 30;
    const min = date.getMinutes() * degree;
    const sec = date.getSeconds() * degree;

    hr.style.transform = 'rotateZ(${hh + (mm / 12)}deg)';
    min.style.transform = 'rotateZ(${(mm)}deg)';
    sec.style.transform = 'rotateZ(${(ss)}deg)';
})