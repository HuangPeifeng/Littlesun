import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isPhone = false;
  isShowMenu = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setMenu();
  }

  constructor() { }

  ngOnInit() {
    this.setMenu();
  }

  setMenu() {
    if (document.body.offsetWidth < 1280) {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
  }

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  goLink(url, isOpen?) {
    if (!isOpen) {
      window.location.href = url;
    } else {
      window.open(url);
    }
  }

}
