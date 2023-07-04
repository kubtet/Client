export interface BookCreate {
    title: string;
    description: string;
    authorId: number;
    isbn: string;
    publish_date: string;
    genresId: number[];
}

export class BookCreate {
    
    constructor() {
        this.description = '';
        this.title = '';
        this.isbn = '';
        this.publish_date = '';        
    }
}