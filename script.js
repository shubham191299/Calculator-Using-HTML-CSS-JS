//Create an empty string
let string = "";

//Select all buttons
let buttons = document.querySelectorAll(".button");

//Iterate over all the buttons
Array.from(buttons).forEach((button) => {
  //Add an Event listener for each button
  button.addEventListener("click", (e) => {
    try {
      //If equal is pressed simply evaluate the string.
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.querySelector(".input").value = string;
        return;
      
        //If Clear is pressed then empty the string.
      } else if (e.target.innerHTML == "C") {
        string = "";
        document.querySelector(".input").value = string;
        return;
      }
      //If X is pressed, pop the last element from string.
        else if (e.target.innerHTML == "X") {
          string = string.slice(0,-1);
          document.querySelector(".input").value = string;
          return;
        //Otherwise append each char to string.
      } else {
        string += e.target.innerHTML;
        document.querySelector(".input").value = string;
      }
      //Catch the error if any.
    } catch (e) {
        document.querySelector(".input").value = "Wrong Input !!";
        }
  });
})
