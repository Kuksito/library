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

function Book(title, author, published, pages, status){
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    this.status = status;
};

function addBookToLibrary(){
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let newBook = new Book(title.value, author.value, published.value, pages.value, status.value);
        myLibrary.push(newBook);
        console.log(myLibrary);
        console.log(newBook);
        dialog.close();
        displayBook(myLibrary)
    })

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

addBookBtn.addEventListener('click', () => {
     dialog.showModal();
});

