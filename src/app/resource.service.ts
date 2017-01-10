import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ResourceService {

    constructor(private http: Http) { }

    getMyIp(url = 'http://ip.jsontest.com/') {
        return this.http.get(url);
    }

    postData(url= 'https://httpbin.org/post', data:any):Observable<Response>{
        return this.http.post(url,data);
    }

    updateWhole(url ='https://httpbin.org/put', data:any):Observable<Response>{
        return this.http.put(url,data);
    }

    updateOnlyPart(url:string,data:any):Observable<Response>{
        return this.http.patch(url,data);
    }

    deletePointed(url = 'https://httpbin.org/delete',data:any):Observable<Response>{
        return this.http.delete(url,data);
    }
}
