import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { BlogComponent } from './components/blog/blog.component';
import { DemoComponent } from './components/demo/demo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoService } from './service/contacto.service';
import { ContactosListComponent } from './components/contactos-list/contactos-list.component';
import { DemoService } from './service/demo.service';
import { BotiquinComponent } from './components/botiquin/botiquin.component';
import { LeyproteccionComponent } from './components/leyproteccion/leyproteccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenesPipe,
    CaracteristicasComponent,
    BlogComponent,
    DemoComponent,
    ContactoComponent,
    PrivacidadComponent,
    AcercadeComponent,
    InicioComponent,
    ContactosListComponent,
    BotiquinComponent,
    LeyproteccionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration(), ContactoService, DemoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
