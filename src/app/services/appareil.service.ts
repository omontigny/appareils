export class AppareilService {
  statusOff: string = "Eteint";
  statusOn: string = "Allumé";

appareils: any = [
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
  ];

  // tslint:disable-next-line:typedef
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = this.statusOn;
    }
  }

  // tslint:disable-next-line:typedef
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = this.statusOff;
    }
  }

  // tslint:disable-next-line:typedef
  switchOnOne(index: number) {
    this.appareils[index].status = this.statusOn;
  }

  // tslint:disable-next-line:typedef
  switchOffOne(index: number) {
    this.appareils[index].status = this.statusOff;
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject: any) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
}

}
