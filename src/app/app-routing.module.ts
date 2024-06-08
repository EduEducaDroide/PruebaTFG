import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { BlogComponent } from './components/blog/blog.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DemoComponent } from './components/demo/demo.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactosListComponent } from './components/contactos-list/contactos-list.component';
import { BotiquinComponent } from './components/botiquin/botiquin.component';
import { LeyproteccionComponent } from './components/leyproteccion/leyproteccion.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'acerca_de',
    component: AcercadeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'caracteristicas',
    component: CaracteristicasComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'privacidad',
    component: PrivacidadComponent,
  },
  {
    path: 'contactos',
    component: ContactosListComponent,
  },
  {
    path: 'botiquin',
    component: BotiquinComponent,
  },
  {
    path: 'ley_proteccion_datos',
    component: LeyproteccionComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
