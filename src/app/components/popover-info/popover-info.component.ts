import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = Array(10);

  constructor(private popovCtrl: PopoverController) { }

  ngOnInit() { }


  onClick(val: number) {
    console.log(val);
    this.popovCtrl.dismiss({
      item: val
    });
  }
}
