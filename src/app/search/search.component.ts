import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { People } from '../People';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputString:String= new String();
  people: People[]=new Array();
  result: Result;
  
  constructor(
    private service: ServicesService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      // save the input as inputString
      this.inputString = params['input'];
      
      //send request with the inputString
      this.service.getJSON(this.inputString).then(response => {
        this.result =  response;
        this.people= this.result.results;
        // pages is how many pages the search is divided into 
        // given that every pages contains 10 items
        let pages:number= Math.ceil(this.result.count/10);
        // send request by the number of page ans the inputString
        // start from 2 since 1 is already sent before 
        for(let i=2; i<=pages;i++){
          this.getNextPage(i,this.inputString)
        }
      });
    });
  }

  // Request by snding number of page and inputString
  public getNextPage(pageNum:number,stringInput:String){
      this.service.getNextPage(pageNum,stringInput).then(response => {
      this.result =  response;
      // push the result into "people" Array
      for(var person of this.result.results){
        this.people.push(person);
      }
      return this.result.next;
    })
  }

}


