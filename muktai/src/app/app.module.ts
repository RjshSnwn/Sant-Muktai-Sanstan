import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TourismComponent } from './components/tourism/tourism.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { OnlineServiceComponent } from './components/online-service/online-service.component';
import { MediaComponent } from './components/media/media.component';
import { TendersComponent } from './components/tenders/tenders.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    MainPageComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    TourismComponent,
    LiteratureComponent,
    OnlineServiceComponent,
    MediaComponent,
    TendersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
