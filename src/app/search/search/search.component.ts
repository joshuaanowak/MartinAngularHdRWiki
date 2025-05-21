import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../character.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() characters: Character[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() characterSelected = new EventEmitter<Character>();

  searchQuery: string = '';

 get filteredCharacters(): Character[] {
  const query = this.searchQuery.trim().toLowerCase();

  if (query.length < 3) {
    return []; // Nur suchen, wenn mindestens 3 Zeichen
  }

  return this.characters.filter(c =>
    c.name.toLowerCase().includes(query)
  );
}

  onOverlayClick() {
    this.close.emit();
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  selectCharacter(character: Character) {
    this.characterSelected.emit(character);
    this.close.emit(); // optional: schließen beim Auswählen
  }
}
