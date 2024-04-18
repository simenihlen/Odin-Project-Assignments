function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        console.log(title + " by " + author + ", " + pages + read)
    };
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  
Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true
