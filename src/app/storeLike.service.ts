import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ResourceService } from './resource.service';
import { BehaviorSubject, AsyncSubject } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class StoreLikeService{
    counter = new BehaviorSubject(0); 
    ipAsync = new AsyncSubject();
    tree = new BehaviorSubject({subnodes:[]});

    constructor(
        private _resourceService: ResourceService,
        private _http: Http
    ) { }

    

    IncrementCounter(){
        const nextValue = this.counter.getValue() + 1;
        this.counter.next(nextValue);
    }

    getCounter(){
        console.log('counter.service.getCounter(): ', this.counter);
        return this.counter.value;
    }

    getIpAsync(){
        this._resourceService.getMyIp().subscribe(res => {
            this.ipAsync.next(res.json().ip);
            this.ipAsync.complete();
        });
        return this.ipAsync;
    }

    getTree(){
        return this.tree;
    }

    // in Service i can do something with downloaded data and after that i can set it to my subject which is Observable so can have Observers in e.g components.
    // Thanks to this i can setup watcher also. (There are example on BacicsComponent)

    getJSONtree(){
        console.log('Starting: download JSON tree')
        this._http.get('dataTree.json').subscribe(res => {
            this.tree.next(res.json());
        },
        err => {
            console.warn('Error while downloading JSON tree.')
        });
    }

}
