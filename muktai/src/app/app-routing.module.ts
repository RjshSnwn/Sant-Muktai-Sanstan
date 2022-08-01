import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TourismComponent } from './components/tourism/tourism.component';

const routes: Routes = [{ 
  path:'', component: MainPageComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'about', component: AboutUsComponent },
{ path: 'tourism', component: TourismComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
