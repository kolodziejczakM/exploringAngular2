import { Component } from '@angular/core';
import { ResourceService } from './resource.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers:[ResourceService]
})
export class AppComponent {
    title = 'Test angular 2 functionality & elements!';
    fetchedIp:String;
    constructor(private _resService: ResourceService) {}

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
