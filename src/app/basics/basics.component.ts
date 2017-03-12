import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { AppStore } from '../app.store';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-basics',
    templateUrl: './basics.component.html',
    styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
    title = 'Test angular 2 functionality & elements!';
    fetchedIp:String;
    name: string; 
    ipAsync;
    
    constructor(
        private _appStore: AppStore,
        private _resService: ResourceService) {}

    ngOnInit(){
        this.counterWatcher();
    }

    incrementCounter(){
        this._appStore.IncrementCounter();
    }

    getCounter(){
        return this._appStore.getCounter();
    }

    getIpAsync(){
        this._appStore.getIpAsync().subscribe(res =>{
            this.ipAsync = res;
        });
    }

    counterWatcher() {
        this._appStore.counter.subscribe({
            next: (v) => console.log('CounterWatcher: counter has changed: ' + v)
        });
    }

    getMyIp(){
        let data = this._resService.getMyIp().subscribe(
            res=>{
                this.fetchedIp = res.json().ip;
                console.log("Fetched: ", this.fetchedIp);
                return this.fetchedIp;
            },
            err=>{
                console.log("Error on GET: ", err);
            }
        );
    }

    postFirstName(){
        let sendThat = {
            firstName: 'Marcin'
        };
        this._resService.postData(undefined,sendThat).subscribe(
            res=>{
                console.log("Response on post: ", res.json());
            },
            err =>{
                console.log("Error response on post: ", err);
            }
        );
    }
    
    changeFirstName(){
        let updateThat = {
            firstName: 'Lukasz'
        };
        this._resService.updateWhole(undefined,updateThat).subscribe(
            res=>{
                console.log("Response on put: ", res.json());
            },
            err =>{
                console.log("Error response on put: ", err);
            }
        );
    }

    deleteFirstName(){
        let deleteThat = {
            firstName: 'Lukasz'
        };
        this._resService.deletePointed(undefined, deleteThat).subscribe(
            res=>{
                console.log("Response on delete: ", res.json());
            },
            err =>{
                console.log("Error response on delete: ", err);
            }
        );
    }
}
