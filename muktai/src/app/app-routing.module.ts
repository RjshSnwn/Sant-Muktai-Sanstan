import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MediaComponent } from './components/media/media.component';
import { OnlineServiceComponent } from './components/online-service/online-service.component';
import { TendersComponent } from './components/tenders/tenders.component';
import { TourismComponent } from './components/tourism/tourism.component';

const routes: Routes = [{ 
  path:'', component: MainPageComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'about', component: AboutUsComponent },
{ path: 'tourism', component: TourismComponent},
{ path:'literature', component: LiteratureComponent},
{ path:'online', component: OnlineServiceComponent},
{ path:'media', component: MediaComponent},
{ path:'tenders', component: TendersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
