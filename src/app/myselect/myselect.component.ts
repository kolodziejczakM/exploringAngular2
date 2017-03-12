import { Component, OnInit, Input } from '@angular/core';
import { AppStore } from '../app.store';

@Component({
    selector: 'app-myselect',
    templateUrl: './myselect.component.html',
    styleUrls: ['./myselect.component.scss']
})
export class MyselectComponent implements OnInit {

    selectOptions
    currentOption;
    selectModel;

    constructor(
        private _appStore: AppStore
    ) { }

    ngOnInit() {
        this.getSelectOptions();
        this.getCurrentOption();
    }

    getSelectOptions () {
         this._appStore.getSelectOptions().subscribe(data => {
            this.selectOptions = data;
            console.log('Select options now: ', this.selectOptions);
        });
    }

    getCurrentOption () {
         this._appStore.getCurrentOption().subscribe(data => {
            this.currentOption = data;
            console.log('currentOption is: ', this.currentOption);
        });
    }

    // should be moved as action
    setCurrentOption ($event) {
        console.log('Set current option from select Component called',);
        const newVal = String($event.target.value);
        this._appStore.currentOption.next(newVal);
    }

}
