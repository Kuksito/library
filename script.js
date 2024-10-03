const container = document.querySelector('[data-container]');
const cardContainer = document.querySelector('[data-card-container]');
const formContainer = document.querySelector('[data-form]');
const dialog = document.querySelector('[data-dialog]');
const addBookBtn = document.querySelector('[data-btn]');
const closeBtn = document.querySelector('[data-close]');

const myLibrary = [];

function Book(title, author, published, pages, bookStatus){
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    this.bookStatus = bookStatus;
};

closeBtn.addEventListener('click', () =>{
    dialog.close();
})

function addBookToLibrary(){
    formContainer.addEventListener('submit', (e) => {
        e.preventDefault();        
        let newBook = new Book(title.value, author.value, published.value, pages.value, document.querySelector('input[name="book_status"]:checked').value);
        myLibrary.push(newBook);
        dialog.close();
        displayBook();
        formContainer.reset();
    });
};

addBookToLibrary();

function displayBook(){
    cardContainer.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++){
        displayBookCard(myLibrary[i]);
    }
}

function displayBookCard(book){
    const card = document.createElement('div');
    const removeBtn = document.createElement('button');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPublished = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookStatusBtn = document.createElement('button');
    const bookStatusPara = document.createElement('div');
    card.classList.add('card');
    removeBtn.classList.add('remove-btn');
    removeBtn.setAttribute('data', 'remove');
    bookTitle.classList.add('book-info');
    bookAuthor.classList.add('book-info');
    bookPublished.classList.add('book-info');
    bookPages.classList.add('book-info');
    bookStatusBtn.classList.add('toggle');
    bookStatusPara.classList.add('book-info');
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPublished.textContent = `Published: ${book.published}`;
    bookPages.textContent = `Pages: ${book.pages}`;
    bookStatusPara.textContent = 'Have read: ';
    bookStatusBtn.textContent = `${book.bookStatus}`;
    bookStatusPara.append(bookStatusBtn);
    card.append(bookTitle, bookAuthor, bookPublished, bookPages, bookStatusPara);
    card.append(removeBtn);
    cardContainer.append(card);  

    removeBtn.addEventListener('click', () =>{
        card.remove();
    });

    if(bookStatusBtn.textContent === 'no'){
        bookStatusBtn.style.cursor = 'pointer';
        bookStatusBtn.addEventListener('click', () => {
            bookStatusBtn.textContent = 'yes';
            bookStatusBtn.style.color = 'green';
            bookStatusBtn.style.cursor = 'default';
        });
    } else {
        bookStatusBtn.style.color = 'green';
    };
};

addBookBtn.addEventListener('click', () => {
     dialog.showModal();
});

