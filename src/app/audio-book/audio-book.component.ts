import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-audio-book',
  templateUrl: './audio-book.component.html',
  styleUrls: ['./audio-book.component.scss']
})
export class AudioBookComponent implements OnInit {
  showImg = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setImg();
  }

  constructor() { }

  ngOnInit() {
    this.setImg();
  }

  setImg() {
    if (document.body.offsetWidth <= 480) {
      this.showImg = false;
    } else {
      this.showImg = true;
    }
  }

  goLink(url) {
    window.location.href = url;
  }

}
