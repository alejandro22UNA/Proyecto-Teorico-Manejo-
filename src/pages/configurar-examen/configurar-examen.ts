import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfigurarExamenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configurar-examen',
  templateUrl: 'configurar-examen.html',
})
export class ConfigurarExamenPage {

   CantidadPreguntas:number = 20;
   CantidadSegundos:number = 30;
   Dificultad:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Dificultad = 'medio';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurarExamenPage');
  }

}
