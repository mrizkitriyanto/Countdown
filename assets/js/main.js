
// Waktu yang di tuju
var countDate = new Date('Jan 22, 2021 00:00:00').getTime();

// Fungsi countdown
function deadline(){
    var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / (second));

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;

}

setInterval(function() {
    deadline();
}, 1000);


/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.countdown__container', {origin:'right', delay: 400});
sr.reveal('.countdown__container-subtitle', {origin:'left', delay: 500});
sr.reveal('.countdown__timer-time', {delay: 800});
