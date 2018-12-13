import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss']
})
export class TopContentComponent implements OnInit {
  @Output() scroll = new EventEmitter();
  showSofa = true;
  showDialog = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setWidth();
    this.setDialog();
  }

  constructor() { }

  ngOnInit() {
    this.setWidth();
    this.setDialog();
  }

  setWidth() {
    if (document.body.offsetWidth < 1024) {
      this.showSofa = false;
    } else {
      this.showSofa = true;
    }
  }

  setDialog() {
    if (document.body.offsetWidth <= 480) {
      this.showDialog = false;
    } else {
      this.showDialog = true;
    }
  }

  setImgHeight() {
    // 700 * 430
    if (document.body.offsetWidth < 1024) {
      const scale = document.body.offsetWidth / 700;
      return `${430 * scale}px`;
    }
  }

  setStarWidth(element) {
    if (document.body.offsetWidth < 1024) {
      const scale = document.body.offsetWidth / 700;
      return `${230 * scale}px`;
    }
  }

  setFamilyHeight() {
    // 1024 * 328
    if (document.body.offsetWidth < 1024) {
      const scale = document.body.offsetWidth / 1024;
      return `${328 * scale}px`;
    }
  }

  goScroll(type) {
    this.scroll.emit(type);
  }
}
