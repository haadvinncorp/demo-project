import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';
  abc(a: number){
    if( a == 1){
      console.log("yes");
    }
    else{
      console.log("no");
    }
  }
}
