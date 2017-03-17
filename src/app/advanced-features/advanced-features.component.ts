import { Component, OnInit } from '@angular/core';
import { AppStore } from '../app.store';

@Component({
    selector: 'app-advanced-features',
    templateUrl: './advanced-features.component.html',
    styleUrls: ['./advanced-features.component.scss']
})
export class AdvancedFeaturesComponent implements OnInit {
    boolVal;
    currentNode;
    tree;
    nodeMock: {id:120, subnodes:[ {id:100, subnodes:[1], name:'LOL'}], name:'LOL'};

    constructor(
        private _appStore: AppStore
    ) { }

    ngOnInit() {
        this.getBoolVal().unsubscribe();
        this.getCurrentNode();
        this.getBoolVal();
    }

    changeActualNode(){
        this.setCurrentNode(this.nodeMock);
    }

    getBoolVal() {
        return this._appStore.getBoolVal().subscribe(storeVal  => {
            this.boolVal = storeVal;
            console.log('boolVal (advancedComp) ', this.boolVal);
        });
    }

    getBool(){
        console.log('boolVal (advancedComp) ', this.boolVal);
    }

    setBoolVal() {
        this._appStore.getBoolVal().next('Advanced');
    }


    getCurrentNode() {
        this._appStore.getCurrentNode().subscribe(storeVal  => {
            this.currentNode = storeVal;
            console.log('currentNode is now: ', this.currentNode);
            return storeVal;
        });
    }

    setCurrentNode(node){
        this._appStore.currentNode.next(node);
        if(this._appStore.nodeHistory.length === 0){
            this._appStore.nodeHistory.push(node);
        }else if(this._appStore.nodeHistory[this._appStore.nodeHistory.length -1].id !== node.id ){
            this._appStore.nodeHistory.push(node);
        }
        console.log('currentNode set.');
    }
}
