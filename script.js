const container = document.querySelector('[data-container]');

const addButton = document.createElement('button');
addButton.classList.add('btn');
container.append(addButton);

const myLibrary = [
    {
        title: 'The vampire diaries',
        author: 'L. J. Smith',
        published: '1991',
        pages: 272,
    },
    {
        title: 'The Daughter of Smoke and Bone',
        author: 'Laini Taylor',
        published: '2011',
        pages: 418,
    },
    {
        title: 'The Poppy War',
        author: 'R. F. Kuang',
        published: '2018',
        pages: 544,
    },
    {
        title: 'Babel',
        author: 'R. F. Kuang',
        published: '2022',
        pages: 545,
    },
];

function Book(title, author, published, pages, notRead){
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    this.notRead = notRead;
};

function addBookToLibrary(books){
    books.forEach((book) => {
        const card = document.createElement('div');
        card.append(book);
        container.append(card);
    })
};

// addBookToLibrary(myLibrary);