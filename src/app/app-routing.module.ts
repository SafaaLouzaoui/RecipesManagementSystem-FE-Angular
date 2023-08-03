import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRecetteComponent } from './view-recette/view-recette.component';
import { ListRecetteComponent } from './list-recette/list-recette.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'recette/:id', component: ViewRecetteComponent},
  {path: 'recettes/:id', component: ListRecetteComponent},
  {path: 'recettes', component: ListRecetteComponent},
  {path:'login',component:LoginFormComponent},
  {path:'signup',component:SignupFormComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'categories',component:ListCategorieComponent},
  {path:'categories/add',component:AddCategorieComponent},
  {path:'categories/update/:id',component:AddCategorieComponent},
  {path:'ingredients/add',component:AddIngredientComponent},
  {path:'ingredients/update/:id',component:AddIngredientComponent},
  {path:'ingredients',component:ListIngredientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }