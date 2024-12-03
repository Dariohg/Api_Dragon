import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  standalone: true
})
export class CharacterCardComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() ki!: string;
  @Input() maxKi!: string;
  @Input() race!: string;
}
