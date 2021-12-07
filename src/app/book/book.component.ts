import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { newBooks } from './newBooks';


@Component({
    selector: 'my-book',
    templateUrl: '../book/book.component.html',
    styleUrls: ['../book/book.component.css'],
    providers: [BookService],
  
  })

export class BookComponent implements OnInit {
replyBooksNew: Book[] = [];
replyWebServei : Book;
newBook : newBooks;

constructor(private bookService: BookService) { 
}    
    ngOnInit(): void {
        this.getBookByIsbn();
        this.getAllNewBooks();
    }

    getBookByIsbn(){  
        this.bookService.getBookServiceByIsbn('9781617294136').subscribe((response)=>{
            this.replyWebServei = response;
            console.log(this.replyWebServei); 
          })     
      }
   
      getAllNewBooks(){
          this.bookService.getAllNewBooksService().subscribe(response=>{
              //this.replyBooksNew = response;
      if(typeof response === 'string') response == JSON.parse(response);

      this.replyBooksNew = response['books'];
      console.log(this.replyBooksNew);
    
            //   this.newBook = response;
            //   console.log(this.newBook.books);
          })
      }

    //   fillBooks(){
    //       this.replyBooksNew.push(this.replyWebServei)
    //   }

}