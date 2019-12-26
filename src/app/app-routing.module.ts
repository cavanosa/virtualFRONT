import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTioComponent } from './tio/lista-tio.component';
import { DetalleTioComponent } from './tio/detalle-tio.component';
import { NuevoTioComponent } from './tio/nuevo-tio.component';
import { ActualizarTioComponent } from './tio/actualizar-tio.component';

const routes: Routes = [
  {path: '', component: ListaTioComponent},
  {path: 'lista', component: ListaTioComponent},
  {path: 'detalle/:id', component: DetalleTioComponent},
  {path: 'nuevo', component: NuevoTioComponent},
  {path: 'actualizar/:id', component: ActualizarTioComponent},
  {path: '**', redirectTo: 'lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
