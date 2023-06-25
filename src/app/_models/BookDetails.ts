import { Author } from "./Author"
import { Genre } from "./Genre"
import { LikedBook } from "./LikedBook"
import { ReadBook } from "./ReadBook"

export interface BookDetails {
    id: number
    title: string
    description: string
    authorId: number
    author: Author
    coverPath: string
    isbn: string
    publish_date: string
    userLikes: number
    usersRead: number
    readBooks: ReadBook[]
    genres: Genre[]
    likedBooks: LikedBook[]
  }
  
