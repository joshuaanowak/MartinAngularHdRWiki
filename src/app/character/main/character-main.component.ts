import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../character.model';


@Component({
  selector: 'app-character-main',
  imports: [],
  templateUrl: './character-main.component.html',
  styleUrl: './character-main.component.css'
})
export class CharacterMainComponent {
  @Input() character!: Character;
  @Output() close = new EventEmitter<void>();


  onOverlayClick() {
    this.close.emit();
  }

  onContentClick(event: MouseEvent) {
    event.stopPropagation(); // verhindert Schließen beim Klick auf das Popup selbst
  }
    
}
