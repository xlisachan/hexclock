let clock = () => {
    let d = new Date();
    let h = d.getHours(); if (h < 10){h = "0"+ h;}
    let m = d.getMinutes(); if (m < 10){m = "0" + m;}
    let s = d.getSeconds(); if (s < 10){s = "0" + s;}
    let clock = document.getElementById('clock');
    clock.innerHTML = `#${h}${m}${s}`;
    document.body.style.backgroundColor = `#${h}${m}${s}`;
    setTimeout('clock()',500);
}

window.addEventListener('load', () => {
    clock();
})