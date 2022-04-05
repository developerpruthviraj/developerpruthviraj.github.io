
function show_nav() {
    let nav = document.querySelector(".nav");

    nav.style.width = "100%";

}

function hide_nav() {
    let nav = document.querySelector(".nav");

    nav.style.width = "0%";
}


//=============================
const copyright = function () {

    let footer = document.querySelector(".footer");

    footer.innerHTML = "<p> Copyright &copy; By Pruthviraj " + new Date().getFullYear() + "</p>";
}


function information() {

    // let message = document.querySelector(".message");

    let date = document.querySelector(".date");

    let time = document.querySelector(".time");

    let today = new Date().getDate() + " : " + new Date().getMonth() + " : " + new Date().getFullYear();

    date.innerHTML = new Date().toDateString();

    setInterval(function () {

        let message = document.querySelector(".message");

        let hours = new Date().getHours();

        if (hours >= 6 && hours < 12) { message.innerHTML = "Good Morning" }

        else if (hours < 17) { message.innerHTML = "Good Afternoon" }

        else if (hours < 20) { message.innerHTML = "Good evening" }

        else if (hours > 20 && hours < 24) { message.innerHTML = "Good Night" }

        else if (hours > 0 && hours < 6) { message.innerHTML = "Good Night"; }


        let now = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
        time.innerHTML = now;
    }, 1000)

}
// =================
function init() {
    information();
    copyright();

}
init();


const apicall = function (url, element) {
    let box = document.querySelector(element);

    let data = fetch(url);
    data.then((a) => a.text().then((a) => box.innerHTML = a))
}