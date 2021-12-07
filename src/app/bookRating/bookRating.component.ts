import { Component, OnInit, Input, Inject } from '@angular/core';
import { Book } from '../book/book';
import { BookComponent } from '../book/book.component';



@Component({
    selector: 'book-rating',
    templateUrl: './bookRating.component.html',
    styleUrls: ['./bookRating.component.css'],
    //providers: [BookService],
  
  })

  export class bookRatingComponent implements OnInit {
      
    @Input() book: Book;

    numberTwelve: number;
    // @Input() parentBook : Book;
    // constructor(@Inject(BookComponent) public book: BookComponent){
    //        }

    constructor(){
        this.numberTwelve = 0;
    }

    ngOnInit()  {
        
    }

    optellen(){
        this.numberTwelve ++;
        console.log(this.numberTwelve);
    }

  }
  
 