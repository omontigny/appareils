import {Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {
 title  = 'Devices Manager';
 secondes  = 0;
 counterSubscription: Subscription = new Subscription();

  constructor() {}

    ngOnInit(): void {
    const counter = Observable.interval(1000);

     this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    // @ts-ignore
    this.counterSubscription.unsubscribe();
  }

}
