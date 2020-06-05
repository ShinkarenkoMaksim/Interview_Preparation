"use strict";

let hrs = 0;
let mnts = 0;

let bias = 0;

document.querySelector('#current-time .hrs').addEventListener('input', hrsCheck);
document.querySelector('#current-time .mnts').addEventListener('input', mntsCheck);
document.querySelector('#new-time').addEventListener('blur', finalTime);

function hrsCheck(e) {
    if (e.target.value < 0)
        e.target.value = 0;
    if (e.target.value > 23)
        e.target.value = 23;
    hrs = e.target.value;
}

function mntsCheck(e) {
    if (e.target.value < 0)
        e.target.value = 0;
    if (e.target.value > 59)
        e.target.value = 59;
    mnts = e.target.value;
}

function checkMnts(mnts = 0) {
    if (mnts >= 60){
        mnts -= 60;
        bias++;
        return checkMnts(mnts);
    } else if (mnts < 0) {
        mnts += 60;
        bias--;
        return checkMnts(mnts);
    } else {
        return mnts;
    }

}

function finalTime(e) {
    let finalMnts = +mnts;
    finalMnts += +e.target.value;
    if (finalMnts >= 60 || finalMnts < 0) {
        finalMnts = checkMnts(finalMnts);
    }

    let finalHrs = +hrs;

    finalHrs += bias;

    if (finalHrs >= 24) {
        finalHrs = finalHrs % 24;
    } else if (finalHrs < 0) {
        finalHrs = 24 + finalHrs;
    }

    bias = 0;

    if (finalMnts < 10)
        finalMnts = '0' + String(finalMnts);

    if (finalHrs < 10)
        finalHrs = '0' + String(finalHrs);

    document.querySelector('#final-time .hrs').innerHTML = finalHrs;
    document.querySelector('#final-time .mnts').innerHTML = finalMnts;
}

