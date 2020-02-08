const form = document.getElementById('form');
const formButton = document.getElementById('form__button');
const overlay = document.getElementById('overlay');

const showForm = () => {
    form.style["right"] = "0";
    form.style["display"] = "flex";
    formButton.style["right"] = "236px";
    formButton.style["top"] = "218px";
    overlay.style["display"] = "block";
}
const hideForm = () => {
    form.style["right"] = "-265px";
    form.style["display"] = "none";
    formButton.style["right"] = "-31px";
    formButton.style["top"] = "94px";
    overlay.style["display"] = "none";
}
let today = moment().format('dddd, MMMM Do')

const datepicker = () =>{
    new Date()
}
document.getElementById("arrival").setAttribute("placeholder", today);
document.getElementById("departure").setAttribute("placeholder", today);

