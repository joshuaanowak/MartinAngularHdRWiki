import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewMainComponent } from './overview/main/overview-main.component';
import { CharacterMainComponent } from './character/main/character-main.component';

const routes: Routes = [
  // Route für die Overview-Seite
  { path: '', component: OverviewMainComponent },  // Standardroute zur Overview-Seite
  
  // Route für die CharacterMain-Seite
  { path: 'character', component: CharacterMainComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
