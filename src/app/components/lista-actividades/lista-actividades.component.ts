import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadService } from '../../services/actividad.service';
import { Actividad } from '../../models/actividad.model';

@Component({
  selector: 'app-lista-actividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-actividades.component.html',
  styleUrls: ['./lista-actividades.component.scss']
})
export class ListaActividadesComponent implements OnInit {
  actividades: Actividad[] = [];

  constructor(private actividadService: ActividadService) {}

  ngOnInit(): void {
    this.actividades = this.actividadService.getActividades();
  }
}
