let clock = () => {
    let d = new Date()
        h = d.getHours()
        m = d.getMinutes()
        s = d.getSeconds();

    if (h < 10) h = "0"+ h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    // set time
    let clock = document.getElementById('clock');
    clock.innerHTML = `#${h}:${m}:${s}`;

    // set background color
    document.body.style.backgroundColor = `#${h}${m}${s}`;
    
    // determine and set font color by converting hex to rgb
    let hex = `${h}${m}${s}`
        rgb = parseInt(hex, 16)
        r = (rgb >> 16) & 255
        g = (rgb >> 8) & 255
        b = rgb & 255;

    document.body.style.color = ((r + g + b) < (127 * 3)) ? 'white' : 'black';

    setTimeout('clock()', 500);
}


window.addEventListener('load', () => {
    clock();
})