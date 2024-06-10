document.body.onload = timer();

setInterval(timer, 200);

function timer() {  //Creates a timer and changes the used images according to time of day
    let date = new Date();
    let hours = date.getHours();
    var minutes = date.getMinutes();

    if (hours <= 9) {
        hours = '0' + hours
    }
    
    if (minutes <= 9) {
        minutes = '0' + minutes
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;

    let clockImg = document.getElementById('imgDayTime');
    let bgImg = document.getElementById('mainBg');
    
    if (hours <= 5) {
        clockImg.setAttribute('src', './assets/Day Cycle/Night.jpg');
        bgImg.setAttribute('src', './assets/Day Cycle/Night.jpg');
    
    }   else if (hours <= 10) {
        clockImg.setAttribute('src', './assets/Day Cycle/Morning1.jpg');
        bgImg.setAttribute('src', './assets/Day Cycle/Morning1.jpg');
    
    }   else if (hours <= 16) {
        clockImg.setAttribute('src', './assets/Day Cycle/Morning2.jpg');
        bgImg.setAttribute('src', './assets/Day Cycle/Morning2.jpg');
    
    }   else if (hours <= 17) {
        clockImg.setAttribute('src', './assets/Day Cycle/Evening.jpg');
        bgImg.setAttribute('src', './assets/Day Cycle/Evening.jpg');

    }   else {
        clockImg.setAttribute('src', './assets/Day Cycle/Night.jpg');
        bgImg.setAttribute('src', './assets/Day Cycle/Night.jpg');
    
    }
    
    let msg = document.getElementById('msg');
    
    if (hours <= 5) {
        msg.innerHTML = 'こんばんは';
    } else if (hours <= 12) {
        msg.innerHTML = 'おはよう';
    } else if (hours <= 18) {
        msg.innerHTML = 'こんにちは';
    } else {
        msg.innerHTML = 'こんばんは';
    }
}

let divider = document.getElementById('divider');

function blink() {
    if (divider.style.visibility == 'visible') {
        divider.style.visibility = 'hidden';
} else {
        divider.style.visibility = 'visible';
}
}

setInterval(blink, 1000);

//Dark mode switch - swaps the attributes of affected elements
let modeKnob = document.getElementById('slideKnob');
let modeTxt = document.getElementById('slideTxt');
let img = document.getElementById('mainBoxImg');
let icon = document.getElementById('slideIcon');
let visMode = document.getElementById('checkbox');
let txtBox0 = document.getElementsByClassName('txtBox')[0];
let txtBox1 = document.getElementsByClassName('txtBox')[1];
let txtBox2 = document.getElementsByClassName('txtBox')[2];
let txtBox3 = document.getElementsByClassName('txtBox')[3];

visMode.addEventListener('change', function() {
    if(this.checked == true) {
        modeKnob.style.top = '80%';
        modeKnob.style.border = '2px solid rgb(63, 193, 216)';
        modeTxt.innerHTML = 'OFF';
        modeTxt.style.top = '45%';
        img.setAttribute('src', './assets/Black-red/bg2c.png');
        icon.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'

        txtBox0.style.color = 'rgb(230, 230, 231)';
        txtBox0.style.filter = 'drop-shadow(3px 3px 1.5px blue)';
        txtBox1.style.color = 'rgb(230, 230, 231)';
        txtBox1.style.filter = 'drop-shadow(3px 3px 1.5px blue)';
        txtBox2.style.color = 'rgb(230, 230, 231)';
        txtBox2.style.filter = 'drop-shadow(3px 3px 1.5px blue)';
        txtBox3.style.color = 'rgb(230, 230, 231)';
        txtBox3.style.filter = 'drop-shadow(3px 3px 1.5px blue)';
        document.getElementById('outsideRight').style.color = 'rgb(60, 200, 230)';

    } else {
        modeKnob.style.top = '59%';
        modeKnob.style.border = '2px solid rgb(211, 73, 107)';
        modeTxt.innerHTML = 'ON';
        modeTxt.style.top = '60%';
        img.setAttribute('src', './assets/Black-red/bg2b.jpg');
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/></svg>';

        txtBox0.style.color = 'rgb(240, 216, 216)';
        txtBox0.style.filter = 'drop-shadow(3px 3px 1.5px red)';
        txtBox1.style.color = 'rgb(240, 216, 216)';
        txtBox1.style.filter = 'drop-shadow(3px 3px 1.5px red)';
        txtBox2.style.color = 'rgb(240, 216, 216)';
        txtBox2.style.filter = 'drop-shadow(3px 3px 1.5px red)';
        txtBox3.style.color = 'rgb(240, 216, 216)';
        txtBox3.style.filter = 'drop-shadow(3px 3px 1.5px red)';
        document.getElementById('outsideRight').style.color = 'rgb(219, 67, 105)';

    }
})