import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, from, of, Subject } from 'rxjs/index';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Language } from '../language.enum';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-piglatin',
  templateUrl: './piglatin.component.html',
  styleUrls: ['./piglatin.component.scss']
})
export class PiglatinComponent implements OnInit {
  translatedValue = '';
  translateFrom = Language.English;
  translateTo = Language.Piglatin;

  @ViewChild('input') inputEl: ElementRef;

  ngOnInit() {
    const inputString$ = fromEvent(this.inputEl.nativeElement, 'keyup')
      .pipe(debounceTime(200));
    inputString$.subscribe(str => this.translate(str.target.value));
  }

  translate(value: string) {
    if (/^[aeiou]/i.test(value)) {
      this.translatedValue = value + 'way';
    } else {
      this.translatedValue = value
        .replace(/([bcdfghjklmnpqrstvwxyz]{1,})([aeiou]*)(.*)/i, '$2$3$1ay');
    }
  }

}
