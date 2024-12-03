import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent implements OnInit {
  characters: any[] = []; // Almacena todos los personajes

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadAllCharacters(); // Cargar todos los personajes al iniciar
  }

  // Método para cargar todos los personajes
  loadAllCharacters(): void {
    this.apiService.getAllCharacters().subscribe((data: any[]) => {
      this.characters = data; // Asignar todos los personajes al array
    });
  }
}
