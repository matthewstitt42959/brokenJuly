import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaxwellComponent } from './maxwell/maxwell.component'; 
import { PopsicleComponent } from './popsicle/popsicle.component'; 
import { PrintsComponent } from './prints/prints.component'; 
import { SignsComponent } from './signs/signs.component'; 
import { NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
 {path: '', redirectTo: '/home',  pathMatch: 'full'}, 
  { path: '**', component: NotFoundComponent }
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
