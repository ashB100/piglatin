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
    const subject = new Subject<number>();

    // I don't understand this. Does the subscribe make subject the observer
    // with provided next function definitions? Here we have 2 subscriptions
    // so there are 2 observers?? So the observable is being multicast by
    // using subject as the observer??
    subject.subscribe({
      next: (v) => console.log(`observerA ${v}`)
    });

    subject.subscribe({
      next: (v) => console.log(`observerB ${v}`)
    });

    subject.next(10);
    subject.next(20);

    const observable = from([1, 2, 3]);
    observable.subscribe(subject);
  }

  ngOnInit() {
    // Error: property target does not exist on {}
    this.inputString$ = fromEvent(this.inputEl.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        map(event => event.target.value)
      );

    this.translate$ = combineLatest(this.translateFrom$, this.inputString$);

    this.translate$.subscribe(value => {
      //console.log(value[0], value[1]);
      this.translate(value[0], value[1]);
    });

    this.inputString$.subscribe(str => this.inputValue = str);
  }

  ngAfterViewInit() {
    this.translateFrom$.next(this.translateFrom);
  }

  translate(translateFrom, value: string) {
    if (translateFrom === Language.English) {
      if (/^[aeiou]/i.test(value)) {
        this.translatedValue = value + 'way';
      } else {
        this.translatedValue = value
          .replace(/([bcdfghjklmnpqrstvwxyz]{1,})([aeiou]*)(.*)/i, '$2$3$1ay');
      }
    } else {
      // Both words starting with vowel and cons will now start with vowel
      // to see if it was a vowel, check if ends with way

      // From Piglatin

      // starts with vowel
      if (/way$/.test(value)) {
        this.translatedValue = value.replace(/(.*)(way$)/, '$1')
      } else {
        let tempValue = value.replace(/(.*)(ay$)/, '$1');

        tempValue = tempValue
          .split('')
          .reverse()
          .join('');

        let constPart = tempValue.match(/[bcdfghjklmnpqrstvwxyz]{1,}/);
        console.log('Consonant', constPart);

        let rest = tempValue.replace(/([bcdfghjklmnpqrstvwxyz]{1,})([aeiou*].)/, '$2');

        console.log('Rest: ', rest);

      }
      }


    //   if (/^[aeiou]/i.test(value)) {
    //     this.translatedValue = value.replace(/way/, '');
    //   } else {
    //     this.translatedValue = value
    //     .split('')
    //     .reverse()
    //     .join('')
    //     .replace(/([ay]{1})([bcdfghjklmnpqrstvwxyz]{1,})([aeiou]*)(.*)/, '$2$3$4' );
    // }
    }

  switchLanguage() {
    const temp = this.translateFrom;
    this.translateFrom = this.translateTo;
    this.translateTo = temp;
    this.translateFrom$.next(this.translateFrom);
  }
}
