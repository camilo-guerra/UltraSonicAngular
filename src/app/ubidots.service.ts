import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class UbidotsService {

    constructor(private http:Http) {
    }
    // Uses http.get() to load a single JSON file
    getEdison() {
        return this.http.get('http://things.ubidots.com/api/v1.6/devices/edison-ultrasonic/ultrasonic/values?token=b8wApPq5HbTvWkgCPFV3DPjcbNhyRL').map((res:Response) => res.json());
    }


}
