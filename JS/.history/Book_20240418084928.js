const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return "${title} by ${author}, ${pages}, ${read ? 'read' : 'not read yet'}"
    };
}

function addBookToLibrary() {
    myLibrary.push(new Book(title.value, author.value, pages.value, read.checked));
    updateLibrary();
    console.log(read.checked);
}

function updateLibrary() {
    tableContent.innerHTML = "";

    myLibrary.forEach(b => {
        
    });
}