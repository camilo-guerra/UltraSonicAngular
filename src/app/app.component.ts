import { Component } from '@angular/core';
import {UbidotsService} from './ubidots.service';
import 'rxjs/add/operator/map'


@Component({
  selector: 'my-app',
  template: `
  <div class="Medida">
  <header>
    <h1>Medidas </h1>
  </header>
  <section>
  <ul class="Medidas">
    <li *ngFor="let medida of edison.data.results; let i=index" >  <span>  {{i}} </span>  {{medida.value}} cm </li>
  </ul>
  </section>
</div>
  `,
})


export class AppComponent  {
  name = 'Angular';

  constructor(private _ubidotsService: UbidotsService){ }


ngOnInit() {
  this.getEdison();
}


  edison={
    id:'1',
    data:''
  };
getEdison() {
  this._ubidotsService.getEdison().subscribe(
    // the first argument is a function which runs on success
    data => { this.edison.data = data },
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => console.log('Se obtiene correctamente los datos de ubidots')
  );
}

}
