/*Library
Реализуйте функционал для работы с книгами в библиотеке:

создание книги(добавление новой книги в библиотеку)
Выдача книги читателю
Получение книги от читателя
Получение у кого книга сейчас находится
Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

name - имя книги
author - имя автора
year - год книги
reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null
Необходимо реализовать на прототипе следующие методы работы с книгой:

isAvailable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи*/

function Book(name, author, year) {
	this.name = name,
		this.author = author,
		this.year = year,
		this.reader = null
}

Book.prototype.isAvailable = function () {
	return !this.reader ? true : false
}
Book.prototype.takeBook = function (readerName) {
	if (this.reader === null) {
		this.reader = readerName;
		return true
	}

	return false
};

Book.prototype.returnBook = function () {
	if (this.reader !== null) {
		this.reader = null;
		return true;
	} 
	return false;
}

Book.prototype.changeBookName = function (newBookName) {
	if (this.name !== newBookName) {
		this.name = newBookName
		return true
	}

	return false
};

Book.prototype.changeAuthorName = function (newAuthorName) {
	if (this.name !== newAuthorName) {
		this.name = newAuthorName;
		return true;
	}

	return false;
};

Book.prototype.getCurrentReader = function () {
	return this.reader
};



const a = new Book('egor', 'egor', '1998')

console.log(a.takeBook('Egor'));
console.log(a.reader)