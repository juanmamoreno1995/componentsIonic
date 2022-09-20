import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  porcentaje: number;
  constructor() { }

  ngOnInit() {
  }

  rangeChange(e) {
    console.log(e.detail.value);
    this.porcentaje = e.detail.value / 100;
  }

}
