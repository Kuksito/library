const container = document.querySelector('[data-container]');
const cardContainer = document.querySelector('[data-card-container]');
const formContainer = document.querySelector('[data-form]');
const dialog = document.querySelector('[data-dialog]');
const addBookBtn = document.querySelector('[data-btn]');
const submitBtn = document.querySelector('[data-submit]');

const myLibrary = [
    {
        title: 'The vampire diaries',
        author: 'L. J. Smith',
        published: '1991',
        pages: 272,
        read: 'have read',
    },
    {
        title: 'The Daughter of Smoke and Bone',
        author: 'Laini Taylor',
        published: '2011',
        pages: 418,
        read: `didn't read`,
    },
    {
        title: 'The Poppy War',
        author: 'R. F. Kuang',
        published: '2018',
        pages: 544,
        read: 'read',
    },
    {
        title: 'Babel',
        author: 'R. F. Kuang',
        published: '2022',
        pages: 545,
        read: 'read',
    },
];

// addBookBtn.addEventListener('click', addBookToLibrary);

function Book(title, author, published, pages, notRead){
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    this.notRead = notRead;
};

function addBookToLibrary(){
    const newBook = new Book();
    myLibrary.push(newBook);
};

addBookToLibrary();

function displayBook(books){
    books.forEach(book => {
        const card = document.createElement('div');
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        card.classList.add('card');
        removeBtn.setAttribute('data', 'remove');
        card.append(book.title, book.author, book.published, book.pages, book.read);
        card.append(removeBtn)
        cardContainer.append(card);
        
    })
}

displayBook(myLibrary);

addBookBtn.addEventListener('click', () => {
    dialog.style.display = 'flex';
     dialog.showModal();
});

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    dialog.style.display = 'none'; //the info in the form stays 
    dialog.close();
})