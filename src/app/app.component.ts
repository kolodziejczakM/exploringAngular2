import { Component, OnInit } from '@angular/core';
import { StoreLikeService } from './storeLike.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   
    constructor(
        private _storeLikeService: StoreLikeService
        ) {}

    ngOnInit(){
       this._storeLikeService.getJSONtree();
    }

}
