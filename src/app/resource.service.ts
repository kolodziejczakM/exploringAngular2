import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ResourceService {

  constructor(private http: Http) { }

  getMyIp() {
     return this.http.get('http://ip.jsontest.com/');
  }
}
