import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Book } from '../book';

@Component({
    selector: 'app-bookList',
    templateUrl: './bookList.component.html',
    styleUrls: ['./bookList.component.css']
  })
  export class BookList implements OnInit {
    
    constructor() { } 
    
    ngOnInit() { }

  }
