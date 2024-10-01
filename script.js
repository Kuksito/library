const container = document.querySelector('[data-container]');
const cardContainer = document.querySelector('[data-card-container]');
const formContainer = document.querySelector('[data-form]');
const dialog = document.querySelector('[data-dialog]');
const addBookBtn = document.querySelector('[data-btn]');
const submitBtn = document.querySelector('[data-submit]');

const myLibrary = [
    // {
    //     title: 'The vampire diaries',
    //     author: 'L. J. Smith',
    //     published: '1991',
    //     pages: 272,
    //     read: 'have read',
    // },
    // {
    //     title: 'The Daughter of Smoke and Bone',
    //     author: 'Laini Taylor',
    //     published: '2011',
    //     pages: 418,
    //     read: `didn't read`,
    // },
    // {
    //     title: 'The Poppy War',
    //     author: 'R. F. Kuang',
    //     published: '2018',
    //     pages: 544,
    //     read: 'read',
    // },
    // {
    //     title: 'Babel',
    //     author: 'R. F. Kuang',
    //     published: '2022',
    //     pages: 545,
    //     read: 'read',
    // },
];

function Book(title, author, published, pages, bookStatus){
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    this.bookStatus = bookStatus;
};

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
    const bookStatus = document.createElement('p');
    card.classList.add('card');
    removeBtn.classList.add('remove-btn');
    removeBtn.setAttribute('data', 'remove');
    bookTitle.classList.add('book-info');
    bookAuthor.classList.add('book-info');
    bookPublished.classList.add('book-info');
    bookPages.classList.add('book-info');
    bookStatus.classList.add('book-info');
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPublished.textContent = `Published: ${book.published}`;
    bookPages.textContent = `Pages: ${book.pages}"`;
    bookStatus.textContent = `Have read: ${book.bookStatus}`;
    card.append(bookTitle, bookAuthor, bookPublished, bookPages, bookStatus);
    card.append(removeBtn);
    cardContainer.append(card); 
    removeBtn.addEventListener('click', () =>{
        card.remove();
    })
};

addBookBtn.addEventListener('click', () => {
     dialog.showModal();
});

