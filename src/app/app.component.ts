import { Component } from '@angular/core';
import 'hammerjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CloudinnProject';

  constructor(
    private router: Router,

  ){}

  ngOnInit() {
    
    if( window.location.pathname ==='/**' ){
      this.router.navigate(['search'],{skipLocationChange: true});
    }
    else if( window.location.pathname ==='/'){
      this.router.navigate(['search']);
      // this.location.replaceState('');
    }

  }
}