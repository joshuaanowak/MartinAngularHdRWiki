import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-main',
  imports: [],
  templateUrl: './character-main.component.html',
  styleUrl: './character-main.component.css'
})
export class CharacterMainComponent {
    character: any;

    constructor(private router: Router){};

    ngOnInit(): void {
      // Abrufen des gesamten Character-Objekts aus dem Router State
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras.state) {
        this.character = navigation.extras.state['character'];
      }
    }
}
