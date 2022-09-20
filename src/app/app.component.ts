import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { MenuController, Platform } from '@ionic/angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>;

  constructor(
    private platform: Platform,
    private menuCtrl: MenuController,
    private dataService: DataService) {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.componentes = this.dataService.getMenuOpt();
    });
  }
}

