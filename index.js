//handling the submit button 

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(e){

    e.preventDefault();//This prevents form from submitting and reloading the page

    
   
    btn.textContent = "Loading..."; //Change text to loading
    btn.style.background ="Red"; //Background changes
    btn.style.color ="White"; //Makes the text looks visible




    setTimeout(() => {
    alert("Your details have been submitted successfully");
    btn.textContent = "Submitted"; //Change text after alert pops

    }, 2000); //2 seconds delay
   

    //change background and text color permanently

});

//Tips If the button is inside the html form, the e.preventDefault() method is 100% required.

