function scrollToElement(elementSelector, instance = 0){
    //Select all elements match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // check if there are elements matching the selector and if the requested instance exists
    if(elements.length > instance){
        // Scroll to the specified element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});
