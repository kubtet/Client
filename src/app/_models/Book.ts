export interface Book {
  id: number
  title: string
  isbn: string
  coverPath: string
  publish_date: string
  userLikes: number
  authorName: string
  authorSurname: string
  usersRead: string
  genres: any[]
}

export class Book {
  
  constructor() {
    this.title = '',
    this.isbn = '',
    this.coverPath = '',
    this.publish_date = '',
    this.userLikes = 0,
    this.authorName = '',
    this.authorSurname = '',
    this.usersRead = '',
    this.genres = []    
  }
}