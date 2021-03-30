import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import {Subscription} from 'rxjs-compat/Subscription';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

export class AppareilViewComponent implements OnInit, OnDestroy {
 isAuth: boolean = true;
  lastUpdate = new Date();
  appareils: any = [];
  appareilSubscription: Subscription = new Subscription();

  @Input() appareilName: string ='';
  @Input() appareilStatus: string = '';
  @Input() index: number = 0;
  @Input() id: number = 0;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void { // execute at the instance creation after the constructor
    // we subscribe to subject that emit the appareils array
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
    this.appareilService.emitAppareilSubject();
    // this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
    // console.log('On allume tout !');
  }

  onEteindre(): void {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
    // console.log('On eteint tout !');
  }

    ngOnDestroy(): void {
    this.appareilSubscription.unsubscribe();
  }

}
