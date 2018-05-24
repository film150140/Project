import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Showfood } from '../../models/showfood';


@Injectable()
export class AuthenServiceProvider {


  apiUrl:string = "http://localhost/APIPJ/crud_food.php";
  constructor(public http: HttpClient) {
    console.log('Hello AuthenServiceProvider Provider');
  }

main(typef: string):Observable<Showfood[]>{
  const header ={'Content-Type':'application/json'};
  let data = {
    'cmd' : 'select',
    'foodtype': typef
  };
  return this.http.post<Showfood[]>(this.apiUrl,data,{headers:header});
  }
}
