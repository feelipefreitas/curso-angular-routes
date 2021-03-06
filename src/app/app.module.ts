import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ClientDescriptionComponent } from './pages/client-description/client-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    AboutComponent,
    PageNotFoundComponent,
    ClientDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
