"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to library.`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" registered.`);
    }
    listBooks() {
        console.log("Books in library:");
        this.books.forEach((b) => b.displayInfo());
    }
}
exports.Library = Library;
