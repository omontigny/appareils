import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string ='';
  @Input() appareilStatus: string = '';

  statusOff: string = "Eteint";
  statusOn: string = "Allumé";

  constructor() {}

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  onAllumer(): void {
    this.appareilStatus = this.statusOn;
  }

   onEteindre(): void {
    this.appareilStatus = this.statusOff;
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
