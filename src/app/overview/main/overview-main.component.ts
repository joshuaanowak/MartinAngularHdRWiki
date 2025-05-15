import { Component } from '@angular/core';
import { Character } from '../../character.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-overview-main',
  imports: [],
  templateUrl: './overview-main.component.html',
  styleUrl: './overview-main.component.css'
})
export class OverviewMainComponent {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  selectedLetters: string[] = [];
  characters: Character[] = [];
  selectedCharacters: Character[] = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.apiService.getCharacters().subscribe(response => {
      // Array von Charakteren aus der "docs" Eigenschaft
      this.characters = response.docs;
    });

    console.log(this.characters);
  }

  // Diese Methode wird aufgerufen, wenn ein Filter (Checkbox) geändert wird
  onFilterChange(letter: string) {
    this.selectedLetters = [letter];
    // Hier könnte später eine Filterung der Charaktere erfolgen
    console.log('Aktuelle ausgewählte Buchstaben:', this.selectedLetters);
    this.getSelectedCharacters();
  }

  onCharacterClick(character:any):void{
    console.log('Clicked character:', character);
  }

  getSelectedCharacters(){
    this.selectedCharacters = this.characters.filter(character => {
      const firstLetter = character.name.charAt(0).toUpperCase();
      return firstLetter === this.selectedLetters[0];})
  }
}

