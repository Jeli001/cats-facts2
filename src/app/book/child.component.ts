import {Component, Input, EventEmitter, ElementRef,   Renderer2, Output} from '@angular/core';

import { Book } from './book';
import { BookComponent } from './book.component';

//import {BookService } from './'


@Component({
    selector: 'my-child',
   // templateUrl: '../bookRating/bookRating.component.html',
    template: '<div class="child"><button (click)="parentClickFun()">{{getal}}Show info of book</button><ng-content></ng-content></div>',
    //styleUrls: ['../book.component.css'],
   // providers: [BookService],
  
  })

  export class ChildComponent {
      @Input() book: Book;
      @Output() bookselected = new EventEmitter<void>();
      getal: number;
    



    // @Input() childBook : Book;
    // constructor(@Inject(BookComponent) public book: BookComponent){
      
    // }
    constructor(private el: ElementRef,private rend: Renderer2){
      this.getal= 0;  
    };
    bookParent : BookComponent;


  //     @Input() name: string;
  //     childClickFun():void{
  //     console.log("Properties of Child Component is Accessed");
  // }

   parentClickFun():void{
    //this.bookParent.getAllNewBooks();
    this.bookselected.emit();
    this.getal++;
   }

}
