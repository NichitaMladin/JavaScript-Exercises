//Asiguram identificatorul principal
let itemId = 1;

//Functia pentru crearea unui element in list
function addItemToList(title, description, price){
    const shoppingList = document.getElementById("shoppingList");
    const listItem = document.createElement("li");

//Adaugam clasa .shopping-item elementului creat
    listItem.classList.add("shopping-item");

//Asiguram identificatorul unic elementului din lista
    listItem.setAttribute("id", "item" + itemId);

//Construim textul afisat pentru elementul din lista
    listItem.textContent = `${title} - ${description} - $${price}`;

//Realizam butonul pentru stergerea elementului
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

//Adaugam butonul "Delete" pentru fiecare item
    listItem.appendChild(deleteButton);

//Adaugam elementul in lista de cumparaturi
    shoppingList.appendChild(listItem);

//Incrementam identificatorul pentru urmatorul element
    itemId++;
}

//Functia pentru validarea inputurilor
function validateInputs(title, description, price){
    return title.trim() !== "" && description.trim() !== "" && !isNaN(price) && price > 0;
}

//Functia pentru adaugarea unui produs in lista
function addItem(event){
//Oprim comportamentul implicit de submit al formularului
    event.preventDefault();

//Obtinem valorile introduse de utilizator in formulat
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

//Validam inputurile
    if(validateInputs(title, description, price)){
    //Adaugam produsul in lista
        addItemToList(title, description, price);

    //Resetam formularul
        document.getElementById("addItemForm").reset();
    }else{
        alert("Please fill the document corectly");
    }
}

document.getElementById("addItemForm").addEventListener("submit", addItem);