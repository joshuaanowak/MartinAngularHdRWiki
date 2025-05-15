import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-header',
  imports: [],
  templateUrl: './overview-header.component.html',
  styleUrl: './overview-header.component.css'
})
export class OverviewHeaderComponent {  
  search() {
    console.log('Search button clicked');
    // Hier kannst du dann deine Suchlogik hinzufügen, z.B. API-Aufruf für Charaktere
  }
}
