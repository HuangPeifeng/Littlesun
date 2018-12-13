import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {
  allImg = true;
  twoImg = false;
  threeImg = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setImg();
  }

  constructor() { }

  ngOnInit() {
    this.setImg();
  }

  setImg() {
    if (document.body.offsetWidth <= 563) {
      this.allImg = false;
      this.twoImg = false;
      this.threeImg = true;
    } else if (document.body.offsetWidth <= 768) {
      this.allImg = false;
      this.twoImg = true;
      this.threeImg = false;
    } else if (document.body.offsetWidth <= 1024) {
      this.allImg = true;
      this.twoImg = false;
      this.threeImg = false;
    }
  }

  goLink(url) {
    window.location.href = url;
  }

}
