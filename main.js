let clock = () => {
    let d = new Date()
        h = d.getHours()
        m = d.getMinutes()
        s = d.getSeconds();

    if (h < 10) h = "0"+ h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    // set time
    let hr = document.getElementById('hr')
        min = document.getElementById('min')
        sec = document.getElementById('sec');

    hr.innerHTML = `${h}`;
    min.innerHTML = `${m}`;
    sec.innerHTML = `${s}`;

    // set background color
    let panel = document.getElementById('panel')
        backPanel = document.getElementById('panel-back');

    panel.style.backgroundColor = `#${h}${m}${s}`;
    backPanel.style.backgroundColor = `#${h}${m}${s}`;
    
    // determine and set font color by converting hex to rgb
    let hex = `${h}${m}${s}`
        rgb = parseInt(hex, 16)
        r = (rgb >> 16) & 255
        g = (rgb >> 8) & 255
        b = rgb & 255;

    panel.style.color = ((r + g + b) < (127 * 3)) ? 'white' : 'black';

    setTimeout('clock()', 500);
};

window.addEventListener('load', () => {
    clock();
});

// event listener - flip panels
let panelClicked = false
    backButton = document.getElementById('back-button')
    infoButton = document.getElementById('info-button')
    innerPanel = document.getElementById('panel-inner');

infoButton.addEventListener('click', () => {
    panelClicked = true;
    innerPanel.style.transform = 'rotateY(180deg)';
});

backButton.addEventListener('click', () => {
    panelClicked = false;
    innerPanel.style.transform = 'rotateY(0deg)';
});