import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {CuentaPage} from '../pages/cuenta/cuenta';
import { HistorialPage } from '../pages/historial/historial';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegistroPage } from '../pages/registro/registro';
import { ListaCapitulosPage } from '../pages/lista-capitulos/lista-capitulos';
import { ConfigurarExamenPage } from '../pages/configurar-examen/configurar-examen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,LoginPage,CuentaPage,HistorialPage,RegistroPage, ListaCapitulosPage, ConfigurarExamenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,CuentaPage, HistorialPage,RegistroPage, ListaCapitulosPage,ConfigurarExamenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
