import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCapitulosPage } from './lista-capitulos';

@NgModule({
  declarations: [
    ListaCapitulosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCapitulosPage),
  ],
})
export class ListaCapitulosPageModule {}
