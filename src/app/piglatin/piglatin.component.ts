import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, interval } from 'rxjs/index';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-piglatin',
  templateUrl: './piglatin.component.html',
  styleUrls: ['./piglatin.component.scss']
})
export class PiglatinComponent implements OnInit {
  @ViewChild('input') inputEl: ElementRef;

  piglatin = '';

  onTranslate(value: string) {
    if (/^[aeiou]/i.test(value)) {
      this.piglatin = value + 'way';
    } else {
      this.piglatin = value
        .replace(/([bcdfghjklmnpqrstvwxyz]{1,})([aeiou]*)(.*)/i, '$2$3$1ay');
    }
  }

  ngOnInit() {
    console.log(this.inputEl);
    const inputString$ = fromEvent(this.inputEl.nativeElement, 'keyup');
    inputString$.subscribe(str => this.onTranslate(str.target.value));
  }
}
