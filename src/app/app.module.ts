import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { InputTextBoxComponent } from './input-text-box/input-text-box.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { TableComponent } from './table/table.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    InputTextBoxComponent,
    LoginFormComponent,
    OpenDialogComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
