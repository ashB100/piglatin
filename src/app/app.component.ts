import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/typings/layout';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //animations: [slideInAnimation]
})
export class AppComponent {
  title = 'piglatin';

  // constructor(private breakpointObserver: BreakpointObserver) {}
  //
  // getAnimationData(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
}
