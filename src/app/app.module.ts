import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './Components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    DetalleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
