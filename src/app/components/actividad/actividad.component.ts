import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actividad } from '../../models/actividad.model';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent {
  @Input() actividad!: Actividad;
}
