//Задание 7
const oneAndTwo = document.querySelectorAll(".one, .two");

let start = Date.now();



if (oneAndTwo) {
    let timer = setInterval(function() {

        let timePassed = Date.now() - start;

        if (timePassed >= 2000) {
            clearInterval(timer);
            return;
        }

        down(timePassed);

    }, 20);

    let item;
    for (item of oneAndTwo) {
        item.classList.add("three");
        item.style.position = "relative";
    }
    function down(timePassed) {
        for (item of oneAndTwo) {
            item.style.top = timePassed / 15 + 'px';
        }
    }
}
