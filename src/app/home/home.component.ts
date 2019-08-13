import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  InputForm: FormGroup;
  submitted: boolean= false;
  show:boolean=true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {

    //input reactive form
    this.InputForm = this.formBuilder.group({
      stringInput: ['', Validators.required],
    })

    // to hide the logo of star wars if searching  
    if(window.location.pathname.length>7)
    this.show=false;
  }

  onSubmit(){
    //if form is empty
    if (this.InputForm.invalid){
      this.submitted=true;
    return;
    }
    //if form is valid hide the logo and navigate to the search page
    this.show=false;
    this.router.navigate(['search',this.InputForm.value.stringInput]);
  }


}
