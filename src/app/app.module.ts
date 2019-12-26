import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaTioComponent } from './tio/lista-tio.component';
import { NuevoTioComponent } from './tio/nuevo-tio.component';
import { DetalleTioComponent } from './tio/detalle-tio.component';
import { ActualizarTioComponent } from './tio/actualizar-tio.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaTioComponent,
    NuevoTioComponent,
    DetalleTioComponent,
    ActualizarTioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
