import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividad.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  getActividades(): Actividad[] {
    return [
      { id: 1, fecha: '2024-12-01', lugar: 'Sala 1', monitor: 'Ganix Gorosabel', tipo: 'Karate' },
      { id: 2, fecha: '2024-12-02', lugar: 'Sala 2', monitor: 'Iker Ibero', tipo: 'Pilates' },
      { id: 3, fecha: '2024-12-03', lugar: 'Sala 3', monitor: 'Youness Mouhcine', tipo: 'Ciclismo' },

    ];
  }
}
