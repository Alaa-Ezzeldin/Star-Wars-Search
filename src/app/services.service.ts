import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './People';
import {  HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Result } from './result';

// import 'cors';

const baseUrl: string = 'https://swapi.co/api/';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  public getJSON(stringInput:String):Promise<Result> {
    return this.http.get(baseUrl+'people/?search='+stringInput)
        .toPromise()
        .then(response => response as Result)
        .catch(err => {
          return Promise.reject(err);
        });  
      }

    public getNextPage(pageNum:number,stringInput:String):Promise<Result> {
      return this.http.get(baseUrl+'people/?'+'page='+pageNum+'&search='+stringInput)
          .toPromise()
          .then(response => response as Result)
          .catch(err => {
            return Promise.reject(err);
          });  
        } 

}
