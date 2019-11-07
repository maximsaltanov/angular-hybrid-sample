import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {  
  name: string = 'test angular8 app';
  
  ngOnInit(){
    console.log('angular8.$onInit()');
  }
}
