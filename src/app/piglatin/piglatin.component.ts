import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piglatin',
  templateUrl: './piglatin.component.html',
  styleUrls: ['./piglatin.component.scss']
})
export class PiglatinComponent {
  piglatin = '';

  onTranslate(value: string) {
    const vowel = /^[aeiou]/;
    const consonant = /([bcdfghjklmnpqrstvwxyz+])/;
    // if begins with vowel add way to end
    if (/^[aeiou]/.test(value)) {
      this.piglatin = value + 'way';
    } else {
      this.piglatin = value
        .replace(/([bcdfghjklmnpqrstvwxyz]{1,})([aeiou*])(.*)/, '$2$3$1ay');

    }

  }
}
