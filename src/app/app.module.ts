import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

//Formato de fechas
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { CardModule } from 'primeng/card';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
