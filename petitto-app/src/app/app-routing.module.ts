import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DoarComponent } from './doar/doar.component';
import { LoginComponent } from './login/login.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {path:'pets',component:PetsComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'login',component:LoginComponent},
  {path:'doar',component:DoarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
