import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
    + parametros.pais + '&category=' + parametros.categoria + '&apikey=55cf9f2ca7e94ef7a11ce57b3bac83e4'

    return this.http.get(URL);
  }

}
