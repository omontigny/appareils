import { Subject } from 'rxjs-compat/Subject';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService {
  statusOff: string = "Eteint";
  statusOn: string = "Allumé";

  // Create a subject to make subject emit all appareils. this is an Observable on which
  // we have to subscribe
  appareilsSubject = new Subject<any[]>();


  // avoid direct acces to this array
  private appareils: any = [];
  /*  [
    {
      id: 1,
      name: 'Machine à laver',
      status: this.statusOn
    },
    {
      id: 2,
      name: 'Television',
      status: this.statusOff
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: this.statusOff
    },
  ];*/

  constructor(private httpClient: HttpClient) {}
  // tslint:disable-next-line:typedef
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = this.statusOn;
    }
    this.emitAppareilSubject();
  }


  // tslint:disable-next-line:typedef
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = this.statusOff;
    }
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  switchOnOne(index: number) {
    this.appareils[index].status = this.statusOn;
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  switchOffOne(index: number) {
    this.appareils[index].status = this.statusOff;
    this.emitAppareilSubject();
  }

  getAppareilById(id: number): any {
    const appareil = this.appareils.find(
      (appareilObject: any) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject(): void {
    // this.appareils.slice() give a copy of Apparail Array
    this.appareilsSubject.next(this.appareils.slice());
  }

  addAppareil(name: string, status: string): void {
    const appareilObject = {
      id: 0,
      name: '',
      status : '',
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://http-client-angular-demo-b2220-default-rtdb.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement Terminé');
        },
        (error) => {
          console.log("Erreur d'enregistrement");
        }
      );
  }

  getAppareilsFromServer(){
     this.httpClient
       .get<any[]>('https://http-client-angular-demo-b2220-default-rtdb.firebaseio.com/appareils.json', this.appareils)
       .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de chargement ! ' + error);
        }
      );
  }
}
