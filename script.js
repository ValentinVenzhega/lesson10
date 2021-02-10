const books = document.querySelector('.books'),
   book = document.querySelectorAll('.book'),
   booksTitle = document.getElementsByTagName('a')[4],
   advertising = document.querySelector('.adv'),
   bookTwo = book[0].querySelectorAll('li'),
   bookFive = book[5].querySelectorAll('li'),
   bookSix = book[2].querySelectorAll('li');

books.append(book[2]);
books.prepend(book[1]);
book[3].before(book[4]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

booksTitle.textContent = 'Книга 3. this и Прототипы Объектов';

advertising.remove();

// книга 2
bookTwo[3].append(bookTwo[6]);
bookTwo[4].prepend(bookTwo[8]);
bookTwo[10].prepend(bookTwo[2]);


// книга 5
bookFive[1].append(bookFive[9]);
bookFive[4].append(bookFive[2]);
bookFive[7].append(bookFive[5]);


// книга 6
const li = document.createElement('li');
li.textContent = 'Глава 8: За пределами ES6';
bookSix[8].append(li);

