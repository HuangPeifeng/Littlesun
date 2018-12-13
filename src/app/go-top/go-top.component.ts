import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {
  @Output() goTop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  go() {
    this.goTop.emit(null);
  }

}
