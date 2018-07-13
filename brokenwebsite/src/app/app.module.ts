import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PopsicleComponent } from './popsicle/popsicle.component';
import { SignsComponent } from './signs/signs.component';
import { PrintsComponent } from './prints/prints.component';
import { MaxwellComponent } from './maxwell/maxwell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DialogComponent } from './popsicle/dialog/dialog.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'popsicle', component: PopsicleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopsicleComponent,
    SignsComponent,
    PrintsComponent,
    MaxwellComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DialogComponent,
    
  ],
 imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
 
  bootstrap: [AppComponent]
 
})
export class AppModule { }