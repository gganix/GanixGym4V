import { Routes } from '@angular/router';
import { ListaActividadesComponent } from './components/lista-actividades/lista-actividades.component';

export const routes: Routes = [
  { path: 'actividades', component: ListaActividadesComponent },
  { path: '', redirectTo: '/actividades', pathMatch: 'full' },
];
