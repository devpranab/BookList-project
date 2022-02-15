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
  constructor(){

}
  addToBookList(book){ //method 01
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
  emptyForm(){ //method 02
    document.getElementById("b-title").value = "";
    document.getElementById("b-author").value = "";
    document.getElementById("b-isbn").value = "";
  }
}

//Add addEventListener
form.addEventListener("submit", newBook);

//Define function
function newBook(e){
  console.log("Hi");

  //input value start
  let title = document.getElementById("b-title").value;
  let author = document.getElementById("b-author").value;
  let isbn = document.getElementById("b-isbn").value;
  //input value end

  //call from book class
  let book = new Book(title, author, isbn);

   //call from ui class
   let ui = new UI();
   ui.addToBookList(book); //pass book obj
   ui.emptyForm();



  //for data hide problem
  e.preventDefault();

}
