import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, interval } from 'rxjs/index';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';

@Component({
  selector: 'app-piglatin',
  templateUrl: './piglatin.component.html',
  styleUrls: ['./piglatin.component.scss']
})
export class PiglatinComponent implements OnInit {
  piglatin = '';

  @ViewChild('input') inputEl: ElementRef;

  translate(value: string) {
    if (/^[aeiou]/i.test(value)) {
      this.piglatin = value + 'way';
    } else {
      this.piglatin = value
        .replace(/([bcdfghjklmnpqrstvwxyz]{1,})([aeiou]*)(.*)/i, '$2$3$1ay');
    }
  }

  ngOnInit() {
    const inputString$ = fromEvent(this.inputEl.nativeElement, 'keyup')
      .pipe(debounceTime(200));
    inputString$.subscribe(str => this.translate(str.target.value));
  }
}
