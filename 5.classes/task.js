class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5
    };
    set state(val) {
        if (val > 100) {
            this._state = 100;
        } else if (val < 0) {
            this._state = 0;
        } else {
            this._state = val;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = `magazine`;
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = `book`;
        this.author = author;
    }
}

class NovelBook extends Book {
    type = `novel`;
}

class FantasticBook extends Book {
    type = `fantastic`;
}

class DetectiveBook extends Book {
    type = `detective`;
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    };
    findBookBy(type, value) {
        for (let elem of this.books) {
            if (elem[type] === value) {
                return elem;
            }
        }
        return null;
    };
    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(elem => elem.name === bookName);
        if (bookIndex === -1) {
            return null;
        } else {
            let book = this.books[bookIndex]
            this.books.splice(bookIndex, 1);
            return book;
        }
    };
}

// Задание 3. =================================
class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = new Map();
    }
    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            return console.error("Ошибка, оценка должна быть числом от 1 до 5.");
        }
        let markZ = this.marks.get(subjectName);
        if (markZ === undefined) {
            markZ = [mark];
        } else {
            markZ.push(mark);
        }
        this.marks.set(subjectName, markZ);
    }
    getAverageBySubject(subjectName) {
        if (!this.marks.has(subjectName)) {
            return console.error("Несуществующий предмет.");
        }
        let sum = 0;
        if (this.marks.get(subjectName) === undefined) {
            return console.error(`Нет оценок по данному предмету.`);
        } else {
            for (let el of this.marks.get(subjectName)) {
                sum += el;
            }
            return sum / this.marks.get(subjectName).length;
        }
    }
    getAverage() {
        let sum = 0;
        for (let key of this.marks.keys()) {
            sum += this.getAverageBySubject(key);
        }
        return sum / this.marks.size;
    }
}
Student.prototype.exclude = function (reason) {
    delete this.marks;
    this.excluded = reason;
}