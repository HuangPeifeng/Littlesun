import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-red-block',
  templateUrl: './red-block.component.html',
  styleUrls: ['./red-block.component.scss']
})
export class RedBlockComponent implements OnInit {
  @Input() type;
  @ViewChild('why') why: ElementRef;
  @ViewChild('blog') blog: ElementRef;

  constructor() { }

  ngOnInit() {
    this.type.subscribe(type => {
      if (type) {
        const ele = type === 'why' ? this.why : this.blog;
        ele.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  setRedBg() {
    // 1366 * 1261
    const bodtWidth = document.body.offsetWidth;
    if (bodtWidth <= 1366) {
      const height = bodtWidth / 1366 * 1261;
      return `
        url(assets/images/red-bg.png) no-repeat,
        url(assets/images/red-bg2.png) no-repeat 0px ${height}px,
        url(assets/images/red-bg2.png) no-repeat 0px ${height * 2}px
      `;
    }
  }

  setGreenBg() {
    // 1366 * 1707
    const bodtWidth = document.body.offsetWidth;
    if (bodtWidth <= 1366) {
      const height = bodtWidth / 1366 * 1707;
      return `
        url(assets/images/blog-bg.png) no-repeat,
        url(assets/images/blog-bg2.png) no-repeat 0px ${height}px,
        url(assets/images/blog-bg2.png) no-repeat 0px ${height * 2}px
      `;
    }
  }

  goLink(url) {
    window.open(url);
  }

}
