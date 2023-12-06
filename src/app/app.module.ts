import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './Counter/counter.module';
import { HeoresModule } from './heroes/Heroes.module';
import { MainPageComponent } from './dbz/pages/main-page.component';
import { DbzModule } from './dbz/dbz.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeoresModule,
    DbzModule,
     ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
