let clock = () => {
    let d = new Date()
        h = d.getHours()
        m = d.getMinutes()
        s = d.getSeconds();

    if (h < 10) h = "0"+ h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    let clock = document.getElementById('clock');
    clock.innerHTML = `#${h}:${m}:${s}`;
    document.body.style.backgroundColor = `#${h}${m}${s}`;
    document.body.style.color = ((h + m + s) > (127 * 3)) ? 'white' : 'black';
    
    setTimeout('clock()', 500);
}

window.addEventListener('load', () => {
    clock();
})