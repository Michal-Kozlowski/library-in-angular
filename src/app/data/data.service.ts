import { Injectable } from '@angular/core';

import { Books } from '../../api/books/books';

@Injectable()
export class DataService {
  books = Books;
  users: {name: string, password: string}[] = [
    { name: 'Michał', password: 'password'},
    { name: 'Monika', password: 'password'},
    { name: 'Max', password: 'password'}
  ];
  logged: { name: string, password: string } = { name: 'Michał', password: 'password'};  
  comments: { bookID: number, text: string, author: string }[] = [
    { bookID: 1, text: "This is the first comment" , author: "Michał" },
    { bookID: 1, text: "This is the second comment" , author: "Monika" },
    { bookID: 1, text: "This is the third comment" , author: "Michał" },
    { bookID: 2, text: "This is the fourth comment" , author: "Max" },
    { bookID: 3, text: "This is the fifth comment" , author: "Monika" }
  ];

  saveData() {
    let local = {books: this.books, users: this.users, logged: this.logged, comments: this.comments};
    localStorage.setItem('libraryState', JSON.stringify(local));
  }

  loadData() {
    let local = localStorage.getItem('libraryState');
    if(local) {   
      this.books = JSON.parse(local).books;    
      this.users = JSON.parse(local).users;
      this.logged = JSON.parse(local).logged;
      this.comments = JSON.parse(local).comments;
    }
  }

  rating(book) {
    return Math.round(book.rate.sum/book.rate.voters.length);
  }

  numberOfStars(stars: number) {
    return Array.from(Array(stars), (_,x) => x);
  }
  
  rate(vote){
    this.books[vote.id].rate.sum += vote.value + 1;
    this.books[vote.id].rate.voters.push(this.logged.name);
    this.saveData();
  }

  starsHover(index, id) {
    for(let i:number = 0; i<=index; i++) {
      for(let j:number = 0; j<5; j++) {document.querySelectorAll("i")[(5*(id-1))+j].classList.add('noRate');} 
      document.querySelectorAll("i")[(5*(id-1))+index-i].classList.add('starHover');
    }
  }

  starsLeave(index, id) {
    for(let i:number = 0; i<=index; i++) {
      for(let j:number = 0; j<5; j++) {document.querySelectorAll("i")[(5*(id-1))+j].classList.remove('noRate');}  
      document.querySelectorAll("i")[(5*(id-1))+index-i].classList.remove('starHover');
    }
  }

  starRate(index, book) {
    if(this.logged.name){
      if(!this.books[book.id-1].rate.voters.includes(this.logged.name)) { 
        const vote = {
          value: index,
          id: book.id-1
        }  
        this.rate(vote);
      } else {
        alert("You have already rated this book!");
      }          
    } else {
      alert("You have to log in to do that!"); 
    }
  }

  constructor() { }

}