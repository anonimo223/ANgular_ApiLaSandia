import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandiasComponent } from './sandias/sandias.component';

@NgModule({
  declarations: [
    AppComponent,
    SandiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Se importa FormsModule.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
