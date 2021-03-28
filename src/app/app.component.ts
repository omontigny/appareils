import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Devices Manager';
  isAuth: boolean = true;
  lastUpdate = new Date();
  appareils: any = [
    {
      name: 'Machine à laver',
      status: 'Allumé'
    },
    {
      name: 'Television',
      status: 'Eteint'
    },
    {
      name: 'Ordinateur',
      status: 'Eteint'
    },
  ];
  onAllumer() {
    console.log('On allume tout !');
}
}
