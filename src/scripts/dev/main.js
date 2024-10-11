'use strict'

const root = document.documentElement;

const dateField = $(".js-dateField");


new AirDatepicker('.js-dateDay', {
    isMobile: true,
    autoClose: true,
    dateFormat: 'dd MMMM yyyy'
})


const navToggle = document.querySelector("#js-navToggle");
navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
    
});

$(document).ready(function() {
    $('#js-navToggle').click(function() {
        $(this).toggleClass('active');  
        $('#js-panel').toggleClass('active'); 
    });
})