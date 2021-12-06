import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Book }    from './book';
import { newBooks } from './newBooks';


@Injectable()
export class BookService {

    constructor(private http:HttpClient) { }
 
     

    
    getBookServiceByIsbn(isbn:string): Observable<Book>{
      var configUrl= "https://api.itbook.store/1.0/books/" +isbn; 
    
       return this.http.get<any>(configUrl);
    }
    
    
    getAllNewBooksService(): Observable<newBooks>{

        var configUrl = 'https://api.itbook.store/1.0/new';
        return this.http.get<newBooks>(configUrl);
    }

    



}
