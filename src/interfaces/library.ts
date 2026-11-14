/**
 * A library can be a matrix or an array.
 * For now, it will be an array.
 * Eventually, may convert to a matrix for faster indexing.
 */

import { Book } from "./book";

export interface Library {
    id: string;
    name: string;
    library: Book[];
}