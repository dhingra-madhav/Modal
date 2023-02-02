'use strict';

// Modal : window that is displayed on the screen when a button is clicked

// Show Modal Buttons QS
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Cross Button QS
const btnCloseModal = document.querySelector(".close-modal");

// Modal QS
const modal = document.querySelector(".modal");

// Overlay QS 
// Overlay : the blurred portion when the modal is displayed
const overlay = document.querySelector(".overlay");

// Opening modal functionality 
const openModal = function(){

    // classList returns the CSS classnames of an element
    // remove function removes the specified class
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Closing modal functionality
const closeModal = function(){

    // add function adds the specified class
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Adding click event listeners to each of the show modal button
for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}

/*
The modal can be closed in 3 ways : 
a. When the cross button is clicked
b. When there is a click in the overlay region
c. When Esc key is pressed
*/

// Adding click event listener to the cross button and the overlay
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

// Adding keydown event listener to the keyboard (basically the document object)
document.addEventListener('keydown',function(e){
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        closeModal();
    }
});
