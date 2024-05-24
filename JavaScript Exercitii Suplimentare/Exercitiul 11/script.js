// Exercise: Write a form for data about people and display the data in a card  .
// Objective: 
// 8.1 Form with name, age, address, inputs and a checkbox that determines if the person is student or not. 
// 8.2 Validation to check that the inputs are not empty and show a hint msg under the inputs with the error . 
// 8.3 Each person should have it's data inside an object and you should save them inside an array of objects . 
// 8.4 Display this array of objects inside a card


document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("personForm");
    const cardContainer = document.getElementById("cardsContainer");
    const people = [];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        //Get user values
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const address = document.getElementById("address").value.trim();
        const isStudentYes = document.getElementById("studentYes").checked;
        const isStudentNo = document.getElementById("studentNo").checked;

        //We will validate
        let valid = true;

        if(!name){
            valid = false;
            document.getElementById("nameLabel").append("Name is required");
        }

        if(!age){
            valid = false;
            document.getElementById("ageLabel").append("Age is required");
        }

        if(!address){
            valid = false;
            document.getElementById("adressLabel").append("Address is required");
        }

        if(isStudentYes && isStudentNo){
            valid = false;
            document.getElementById("studentLabel").append("Selection only one option");
        }

        if(!isStudentYes && !isStudentNo){
            valid = false;
            document.getElementById("studentLabel").append("Selection is required");
        }


        if(valid){
            //Create person object
            const person = {
                name: name,
                age: age,
                address: address,
                isStudent: isStudentYes ? "Yes" : (isStudentNo ? "No" : "")
            };

            //Add person in array
            people.push(person);

            //Display cards
            displayCards();
        }
    })


    function displayCards(){
        //delete the cards before adding new ones
        cardContainer.innerHTML = "";

        //We will iterate through every person from array
        people.forEach(function(person){
            //We create new "div" element
            let card = document.createElement("div");

            //We built the card content
            let content = "Name: " + person.name + " Age: " + person.age + " Address: " + person.address + " Student: " + (person.isStudent === "Yes" ? "Yes" : "No");

            //We set the HTML card contain
            card.innerHTML = content;

            //We add the card at card container
            cardContainer.appendChild(card);
        })
    }
})