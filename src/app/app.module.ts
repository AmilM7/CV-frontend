import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LeftPartComponent} from './left-part/left-part.component';
import {RightPartComponent} from './right-part/right-part.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponentComponent} from './main-component/main-component.component';
import {HttpClientModule} from "@angular/common/http";
import {SkillServices} from "./service/skills.service";


@NgModule({
  declarations: [
    AppComponent,
    LeftPartComponent,
    RightPartComponent,
    MainComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    SkillServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
