import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from './pets.models';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  baseUrl = " http://localhost:3001/pets" //Trocar por endereço da api no Heroku!

  constructor(private http: HttpClient) { }

  //Interação com back-end
  create(pets:Pets): Observable<Pets>{
  return this.http.post<Pets>(this.baseUrl, pets)
  }


}
