import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isPhone = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setFooter();
  }

  constructor() { }

  ngOnInit() {
    this.setFooter();
  }

  setFooter() {
    if (document.body.offsetWidth <= 480) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
  }

  goLink(url, isOpen?) {
    if (!isOpen) {
      window.location.href = url;
    } else {
      window.open(url);
    }
  }

}
