import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  // Obtener personajes por página
  getCharacters(page: number, limit: number = 20): Observable<any> {
    const url = `${this.baseUrl}?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }

  // Obtener todos los personajes
  getAllCharacters(limit: number = 20): Observable<any[]> {
    return this.http.get(`${this.baseUrl}?limit=${limit}`).pipe(
      map((data: any) => {
        const totalPages = data.meta.totalPages; // Total de páginas
        const requests: Observable<any>[] = [];

        // Crear un arreglo de solicitudes para todas las páginas
        for (let page = 1; page <= totalPages; page++) {
          requests.push(this.getCharacters(page, limit));
        }

        return requests;
      }),
      switchMap((requests) => {
        // Ejecutar todas las solicitudes simultáneamente y aplanar el resultado
        return forkJoin(requests).pipe(
          map((responses: any[]) => {
            // Combinar los resultados de todas las páginas
            return responses.flatMap((response) => response.items);
          })
        );
      })
    );
  }
}
