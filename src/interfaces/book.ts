/**
 * A book contains two types of information: 
    * Book specific information
    * - Title, Author, Publishing Date, Genre, Cover Image
    * Personal info relatiing to the book read
    * - Reading Start Date (opt), Reading Finish Date, Completion Checkbox, 
 */

export interface Book {
    id: string;
    title: string;
    author: string;
}

// Create a book with no information
export function createBlankBook(): Book {
    return { 
        id: "", 
        title: "", 
        author: ""
    };
}

// Create a new book with the recieved information
export function createNewBook( newId: string, newTitle: string, newAuthor: string ): Book {
    return {
        id: newId,
        title: newTitle,
        author: newAuthor,
    };
}