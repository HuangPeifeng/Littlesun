import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  type = new Subject<string>();

  @ViewChild('top') top: ElementRef;

  goScroll($event) {
    this.type.next($event);
  }

  goTop($event) {
    const ele = this.top;
    ele.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
