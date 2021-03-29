import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
 isAuth: boolean = true;
  lastUpdate = new Date();
  appareils: any = [];
  @Input() appareilName: string ='';
  @Input() appareilStatus: string = '';
  @Input() index: number = 0;
  @Input() id: number = 0;

  constructor(private appareilService: AppareilService) { }


  ngOnInit(): void { //execute at the instance creation after the constructor
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
    //console.log('On allume tout !');
  }
  onEteindre() {
     this.appareilService.switchOffAll();
    //console.log('On eteint tout !');
  }
}
