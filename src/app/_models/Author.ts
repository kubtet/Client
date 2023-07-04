
export interface Author {
    id: number;
    name: string;
    surname: string;
    country: string; 
}

export class Author {
   
    constructor() {
        this.name = '';
        this.surname = '';
        this.country = '';
    }
}
