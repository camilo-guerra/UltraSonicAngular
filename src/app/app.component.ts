import { Component } from '@angular/core';
import {UbidotsService} from './ubidots.service';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `<h1>Datos Obtenidos con un UltraSonic Ranger sensor</h1>
  <h2>Medidas</h2>

  <ul>
    <li *ngFor="let medida of edison.results">{{medida.value}} cm </li>
  </ul>`,
})


export class AppComponent  {
  name = 'Angular';

  constructor(private _ubidotsService: UbidotsService){ }

ngOnInit() {
  this.getEdison();
}
  public edison;
getEdison() {
  this._ubidotsService.getEdison().subscribe(
    // the first argument is a function which runs on success
    data => { this.edison = data},
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => console.log('Se obtiene correctamente los datos de ubidots')
  );
}
}
