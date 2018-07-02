import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaCapitulosPage } from '../lista-capitulos/lista-capitulos';
import { ConfigurarExamenPage } from '../configurar-examen/configurar-examen';
import { HistorialPage } from '../historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ExamenPorCapitulo(){
    this.navCtrl.setRoot(ListaCapitulosPage);
  }
  ExamenTodosLosCapitulos(){
    this.navCtrl.setRoot(ConfigurarExamenPage);
  }
  historial(){
    this.navCtrl.setRoot(HistorialPage);
  }
}
