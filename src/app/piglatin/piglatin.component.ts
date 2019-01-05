import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, Subject } from 'rxjs/index';
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
  inputValue;
  translateFrom = Language.English;
  translateTo = Language.Piglatin;

  @ViewChild('input') inputEl: ElementRef;

  // translation$ combines translateFrom and inputStream
  translateFrom$ = new Subject<Language>();
  inputString$;
  translate$;

  constructor() {
    this.translateFrom$.next(Language.English);
  }
  ngOnInit() {
    this.inputString$ = fromEvent(this.inputEl.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        map(event => event.target.value)
      );

    this.translate$ = combineLatest(this.translateFrom$, this.inputString$);

    this.translate$.subscribe(value => {
      console.log(value[0], value[1]);
      this.translate(value[0], value[1]);
    });

    this.inputString$.subscribe(str => this.inputValue = str);
  }

  ngAfterViewInit() {
    this.translateFrom$.next(this.translateFrom);
  }

  translate(translateFrom, value: string) {
    if (/^[aeiou]/i.test(value)) {
      this.translatedValue = value + 'way';
    } else {
      this.translatedValue = value
        .replace(/([bcdfghjklmnpqrstvwxyz]{1,})([aeiou]*)(.*)/i, '$2$3$1ay');
    }
  }

  switchLanguage() {
    const temp = this.translateFrom;
    this.translateFrom = this.translateTo;
    this.translateTo = temp;
    this.translateFrom$.next(this.translateFrom);

    // switch piglatin and inputValue
    const tempInput = this.inputValue;
    this.inputEl.nativeElement.value = this.translatedValue;
    this.inputValue = this.translatedValue;
    this.translatedValue = tempInput;
  }
}
