import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string ='';
  @Input() appareilStatus: string = '';
  @Input() index: number = 0;
  @Input() id: number = 0;

  statusOff: string = "Eteint";
  statusOn: string = "Allumé";

  constructor (private appareilService: AppareilService) {}

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  onAllumer(): void {
    //this.appareilStatus = this.statusOn;
    this.appareilService.switchOnOne(this.index);
  }

   onEteindre(): void {
    //this.appareilStatus = this.statusOff;
    this.appareilService.switchOffOne(this.index);

  }

  getColor(): string {
    if (this.appareilStatus === this.statusOff) {
      return 'red';
    }else if (this.appareilStatus === this.statusOn) {
      return 'green';
    }else {
      return 'orange';
    }
  }
}
