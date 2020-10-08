import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const endpoint = 'https://restcountries.eu/rest/v2/region/americas';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  paises;


  constructor(private http : HttpClient) 
  {
 
  }

  getUsers() {
    return this.http.get(endpoint);
  }


}
