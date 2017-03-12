import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ResourceService } from './resource.service';
import { BehaviorSubject, AsyncSubject, Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class AppStore{
    counter = new BehaviorSubject(0); 
    ipAsync = new AsyncSubject();

    tree = new BehaviorSubject({subnodes:[]});
    currentNode = new BehaviorSubject({subnodes:[]});
    nodeHistory = [];
    selectOptions = new BehaviorSubject([]);
    currentOption = new BehaviorSubject('');

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

////////////////////////////

    getTree(){
        return this.tree;
    }

    getCurrentNode() {
        return this.currentNode;
    }

    getNodeHistory() {
        return this.nodeHistory;
    }

    getSelectOptions() {
        return this.selectOptions;
    }

    getCurrentOption () {
        return this.currentOption;
    }

    // should be moved as action
    getJSONtree(val){
        console.log('Starting: download JSON tree, with param: ', val);
        this._http.get('dataTree.json').subscribe(res => {
            // res.map etc.
            this.tree.next(res.json());
            this.currentNode.next(res.json());
            this.nodeHistory.push(this.currentNode.getValue());
        },
        err => {
            console.warn('Error while downloading JSON tree.')
        });
    }

    // should be moved as action
    getSelectOptionsJSON(){
        console.log('Starting: download JSON select options');
        this._http.get(`selectOptions.json`).subscribe(res => {
            this.selectOptions.next(res.json().all);
            this.currentOption.next('Loading...');
        },
        err => {
            console.warn('Error while downloading JSON with selectOptions')
        });
    }

}
