import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piglatin',
  templateUrl: './piglatin.component.html',
  styleUrls: ['./piglatin.component.scss']
})
export class PiglatinComponent {
  piglatin = '';

  onTranslate(value: string) {
    if (/^[aeiou]/i.test(value)) {
      this.piglatin = value + 'way';
    } else {
      this.piglatin = value
        .replace(/([bcdfghjklmnpqrstvwxyz]{1,})([aeiou]*)(.*)/i, '$2$3$1ay');
    }
  }
}
