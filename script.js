// Select UI elements
const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

//Book class object
class Book{
  constructor(title, author, isbn){
     this.title = title;
     this.author = author;
     this.isbn = isbn;
  }
}

//UI class object
class UI{
//   constructor(){//no property so write static methods

// }
  static addToBookList(book){ //method 01
    //console.log(book);
    let list = document.getElementById("book-list");
    let row = document.createElement("tr");
    row.innerHTML = 
    `<td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="delete">X</a></td>`;

      list.appendChild(row);

  }
  static emptyForm(){ //method 02
    document.getElementById("b-title").value = "";
    document.getElementById("b-author").value = "";
    document.getElementById("b-isbn").value = "";
  }
  static showAlert(message, className){//method 03
let div = document.createElement("div");
div.className = `alert ${className}`;
div.appendChild(document.createTextNode(message));
let container = document.querySelector(".container");
let form = document.querySelector("#book-form");
container.insertBefore(div, form);

setTimeout(() =>{
  document.querySelector(".alert").remove();
}, 3000);

  }
  static deleteFromBook(target){
    //console.log(target); 
    if(target.hasAttribute("href")){
    //console.log(target);
    //console.log(target.parentElement.parentElement);
    target.parentElement.parentElement.remove();
    }  

  }
}

//Add addEventListener
form.addEventListener("submit", newBook);
bookList.addEventListener("click", removeBook);


//Define function
function newBook(e){
  //console.log("Hi checked");

  //input value start
  let title = document.getElementById("b-title").value;
  let author = document.getElementById("b-author").value;
  let isbn = document.getElementById("b-isbn").value;
  //input value end

  //let ui = new UI();
  //validation start with condtion
  if(title === "" | author === "" | isbn === ""){
//alert("alert")
UI.showAlert("Please fill all the fields", "error");//pass message & class
}else{
//call from book class start
let book = new Book(title, author, isbn);
//call from book class end

 //call from ui class start
 UI.addToBookList(book); //pass book obj
 UI.emptyForm();
 UI.showAlert("New book added", "success");//pass message & class
 //call from ui class end

}
  //validation end with condtion

  
  //for data hide problem
  e.preventDefault();

}

function removeBook(e){
  //let ui = new UI();//no need
  UI.deleteFromBook(e.target);
  UI.showAlert("Book removed", "success");

   //for data hide problem
   e.preventDefault();
}
