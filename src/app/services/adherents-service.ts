import { Injectable } from '@angular/core';
import { Adherent } from '../models/adherent';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { DirectusResponse } from '../models/directus-response';


@Injectable({
  providedIn: 'root',
})
export class AdherentsService {

  private baseUrl = environment.apiBaseUrl; 

  constructor(private httpClient: HttpClient) {}
  
  getAll(): Observable<Adherent[]> {
    return this.httpClient.get<DirectusResponse<Adherent[]>>(this.baseUrl + '/items/adherents').pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<Adherent> {
    return this.httpClient.get<DirectusResponse<Adherent>>(`${this.baseUrl}/items/adherents/${id}`).pipe(
      map(response => response.data)
    );
  }

}
