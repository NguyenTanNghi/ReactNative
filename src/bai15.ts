import { Book } from "./bai06";
import { User } from "./bai07";

export class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book "${book.title}" added to library.`);
    }

    addUser(user: User): void {
        this.users.push(user);
        console.log(`User "${user.name}" registered.`);
    }

    listBooks(): void {
        console.log("Books in library:");
        this.books.forEach((b) => b.displayInfo());
    }
}
