const button1 = document.getElementById("bttn");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");


const port = document.querySelector('.allport');

button2.addEventListener("click", () => {
    port.classList.remove("allport3");
    port.classList.add("allport2");
    port.classList.remove("port-height-1");
    port.classList.add("port-height-2");


});
button3.addEventListener("click", () => {
    port.classList.remove("allport3");
    port.classList.add("allport2");
    port.classList.remove("port-height-1");
    port.classList.add("port-height-2");


});
button4.addEventListener("click", () => {

    port.classList.add("allport2");
    port.classList.remove("allport3");
    port.classList.remove("port-height-1");
    port.classList.add("port-height-2");

});
button5.addEventListener("click", () => {

    port.classList.add("allport2");
    port.classList.remove("allport3");
    port.classList.remove("port-height-1");
    port.classList.add("port-height-2");

});
button6.addEventListener("click", () => {

    port.classList.add("allport2");
    port.classList.remove("allport3");
    port.classList.remove("port-height-1");
    port.classList.add("port-height-2");

});
button7.addEventListener("click", () => {

    port.classList.add("allport2");
    port.classList.remove("allport3");
    port.classList.remove("port-height-1");
    port.classList.add("port-height-2");

});
button8.addEventListener("click", () => {

    port.classList.add("allport2");
    port.classList.remove("allport3");
    port.classList.remove("port-height-1");
    port.classList.add("port-height-2");

});
button9.addEventListener("click", () => {

    port.classList.add("allport2");
    port.classList.remove("allport3");
    port.classList.remove("port-height-1");
    port.classList.add("port-height-2");

});

button1.addEventListener("click", () => {
    port.classList.add("allport3");
    port.classList.remove("allport2");
    port.classList.remove("port-height-2");
    port.classList.add("port-height-1");
});