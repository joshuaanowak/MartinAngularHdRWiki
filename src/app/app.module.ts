import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // RouterModule importieren
import { OverviewMainComponent } from './overview/main/overview-main.component';
import { CharacterMainComponent } from './character/main/character-main.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewMainComponent,
    CharacterMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   // Hier wird das Routing-Modul importiert
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
