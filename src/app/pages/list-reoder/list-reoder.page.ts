import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorder } from '@ionic/angular';

@Component({
  selector: 'app-list-reoder',
  templateUrl: './list-reoder.page.html',
  styleUrls: ['./list-reoder.page.scss'],
})
export class ListReoderPage implements OnInit {

  disabled = false;
  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Wonder Woman', 'Flash'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(e: any) {
    e.detail.complete();
    const itemMover = this.personajes.splice(e.detail.from, 1)[0];
    this.personajes.splice(e.detail.to, 0, itemMover);

    console.log(e);
    console.log(this.personajes);
  }

  enabledReorder() {
    this.disabled = !this.disabled;
  }

}
