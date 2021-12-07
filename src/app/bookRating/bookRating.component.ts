import {Component, Inject, Input, OnInit} from '@angular/core';
import { Book } from '../book/book';
import { BookComponent } from '../book/book.component';

//import {BookService } from './'


@Component({
    selector: 'book-rating',
    templateUrl: './bookRating.component.html',
    //template: '<div class="child"><button (click)="parentClickFun()">Show text Of Parent Element</button><button (click)="childClickFun()">Show text Of Child Element</button><ng-content></ng-content></div>',
    styleUrls: ['./bookRating.component.css'],
   // providers: [BookService],
  
  })

  export class bookRatingComponent  implements OnInit {
      Rating: string;

  @Input() book: Book; 
    constructor(){
      
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    
  }