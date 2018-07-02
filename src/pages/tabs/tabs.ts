import { Component } from '@angular/core';
import { HistorialPage } from '../historial/historial';
import { HomePage } from '../home/home';
import { CuentaPage } from '../cuenta/cuenta';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistorialPage;
  tab3Root = CuentaPage;

  constructor() {

  }
}
