"use strict";

let hrs = 0;
let mnts = 0;

let check = true;

document.querySelector('#current-time .hrs').addEventListener('input', hrsCheck);
document.querySelector('#current-time .mnts').addEventListener('input', mntsCheck);
document.querySelector('#btn-count').addEventListener('click', count);

function hrsCheck(e) {
    if (e.target.value < 0 || e.target.value > 23) {
        check = false;
        return;
    }
    check = true;
    hrs = +e.target.value
}

function mntsCheck(e) {
    if (e.target.value < 0 || e.target.value > 59) {
        check = false;
        return;
    }
    check = true;
    mnts = +e.target.value;
}

function count() {
    if (!check) {
        document.querySelector('#degrees-warning').innerHTML = "Check your time !";
        return;
    }
    let mntsDeg = Math.round(mnts * 6);
    if (hrs > 12)
        hrs -= 12;

    let hrsDeg = Math.round(hrs * 30 + mntsDeg / 24);
    if (mntsDeg === 0)
        mntsDeg = 360;
    if (hrsDeg === 0)
        hrsDeg = 360;
    render(hrsDeg, mntsDeg)
}

function render(hrs, mnts) {
    document.querySelector('#degrees-warning').innerHTML = "";
    document.querySelector('#degrees .hrs').innerHTML = hrs;
    document.querySelector('#degrees .mnts').innerHTML = mnts;
}