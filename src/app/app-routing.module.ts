import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { InputTextBoxComponent } from './input-text-box/input-text-box.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buttons' , component: ButtonsComponent },
  { path: 'inputTextBox', component: InputTextBoxComponent },
  { path: 'loginForm', component: LoginFormComponent },
  { path: 'dialog', component: OpenDialogComponent },
  { path: 'table', component: TableComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
