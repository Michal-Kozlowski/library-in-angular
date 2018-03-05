import { Component, OnInit } from '@angular/core';
import { Book } from '../../app/book';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books = this.data.books;

  numberOfStars(stars: number) {
    return Array.from(Array(stars), (_,x) => x);
  }

  search: string = '';

  matchName(book: Book) {
    return book.name.toLowerCase().includes(this.search.toLowerCase());
  }

  matchAuthor(book: Book) {
    return book.author.toLowerCase().includes(this.search.toLowerCase());
  }

  rating(book) {
    return Math.round(book.rate.sum/book.rate.voters.length);
  }

  constructor(private data:DataService) { }

  ngOnInit() {
  }
}
