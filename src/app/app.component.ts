import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 //Op1-2 template: '<h1> {{title}}</h1> <h2>{{subtitle}}</h2> <input value="{{title}}"><br> <input [value]="title"><br>', 
 //Opd 3template:'<h1> {{title}}</h1><h2>{{subtitle}}</h2><input value="{{title}}"(change)="title=$any($event.target).value" ><br> <input [value]="title"(change)="changeTitle($event)"><br>', 

 // template: '<h1> {{title}}</h1><input value="{{e_mail}}"><br> <input [value]="e_mail"><br> <input [(ngModel)]="title" >', 
  //template: '<h1> {{title}}</h1><input value="{{title}}"(change)="title=$any($event.target).value" ><br> <input [(ngModel)]="title" >', 
  template: '<input [(ngModel)]="title"><my-student></my-student><my-book></my-book>',
 
})
export class AppComponent {
  title: string = "Hello Angular";
  subtitle: string ="Hello Firuzan";
  e_mail: string = "type hier";

  changeTitle($event:any){
    this.title = $event.target.value;
  }
}
