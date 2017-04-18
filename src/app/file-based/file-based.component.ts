import { Component, OnInit } from '@angular/core';
import { AppStore } from '../app.store';
import { ParentService } from '../parent.service';

@Component({
    selector: 'app-file-based',
    templateUrl: './file-based.component.html',
    styleUrls: ['./file-based.component.scss']
})
export class FileBasedComponent extends ParentService implements OnInit {
    tree;
    currentNode = {subnodes:[]};
    selectOptions;
    currentOption;
    boolVal;
    constructor(
        private _appStore: AppStore,
        private _parentService: ParentService
    ) {
        super();
     }

    ngOnInit() {
        this.fetchData();

        this.getTree();
        this.getCurrentNode();
        this.getBoolVal();
    }

    getBoolVal() {
       //  this._appStore.getBoolVal().unsubscribe();
        this._appStore.getBoolVal().subscribe(storeVal  => {
            this.boolVal = storeVal;
            console.log('boolVal (fileBasedComp) ', this.boolVal);
        });
    }

    getBool(){
        console.log('boolVal (advancedComp) ', this.boolVal);
    }

    setBoolVal() {
        this._appStore.getBoolVal().next('FileBased');
    }

    fetchData() {
        this._appStore.getSelectOptionsJSON();
        this._appStore.getCurrentOption().subscribe(val => {
             this._appStore.getJSONtree(val);
        })   
    }

    getTree() {
        this._appStore.getTree().subscribe(jsonable  => {
            this.tree = jsonable.subnodes;
        });
    }

    getCurrentNode() {
        this._appStore.getCurrentNode().subscribe(storeVal  => {
            this.currentNode = storeVal;
            this.tree = this.currentNode.subnodes;
            console.log('currentNode is now: ', this.currentNode);
            return storeVal;
        });
    }

    goBack() { 
        if(this._appStore.nodeHistory.length > 1){
            this._appStore.nodeHistory[this._appStore.nodeHistory.length - 1].extended = false;
            this._appStore.nodeHistory.pop(); 
            this.setCurrentNode(this._appStore.nodeHistory[this._appStore.nodeHistory.length - 1]);
            console.log('history now (recursiveTreeComp): ', this._appStore.nodeHistory);
        }
    }

    // should be moved to actions
    setCurrentNode(node){
        this._appStore.currentNode.next(node);
        if(this._appStore.nodeHistory.length === 0){
            this._appStore.nodeHistory.push(node);
        }else if(this._appStore.nodeHistory[this._appStore.nodeHistory.length -1].name !== node.name){
            this._appStore.nodeHistory.push(node);
        }
        console.log('currentNode set.');
    }

}
