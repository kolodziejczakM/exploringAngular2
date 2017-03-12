import { Component, OnInit, Input } from '@angular/core';
import { AppStore } from '../app.store'

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

    @Input()
    treejson;

    constructor(
    private _appStore: AppStore
    ) { }

    ngOnInit() {
    }

    extendThat($event, node){
        $event.stopPropagation();
        node.extended = true;
        this.setCurrentNode(node);
       
    }

    // should be moved to actions
    setCurrentNode(node){
        this._appStore.currentNode.next(node);
        if(this._appStore.nodeHistory.length === 0){
            this._appStore.nodeHistory.push(node);
        }else if(this._appStore.nodeHistory[this._appStore.nodeHistory.length - 1].name !== node.name){
            this._appStore.nodeHistory.push(node);
        }
        console.log('history after set: ',this._appStore.nodeHistory);
    }

    getNodeHistory(){
        this._appStore.getNodeHistory();
    }

}
