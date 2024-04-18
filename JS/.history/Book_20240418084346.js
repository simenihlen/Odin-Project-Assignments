function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
}
  
const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 };
 
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return '${title} by ${author}, ${pages}, ${read ? "read" : "not read yet"}'
    };
}

function addBookToLibrary() {

}