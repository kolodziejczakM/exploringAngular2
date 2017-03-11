import { Component, OnInit } from '@angular/core';
import { StoreLikeService } from '../storeLike.service';

@Component({
    selector: 'app-recursive-tree',
    templateUrl: './recursive-tree.component.html',
    styleUrls: ['./recursive-tree.component.scss']
})
export class RecursiveTreeComponent implements OnInit {
    tree;
    constructor(
        private _storeLikeService: StoreLikeService
    ) { }

    ngOnInit() {
        this.getTree();
    }

    // this should be moved to another file => 'actions?' and should be called with this context.
    getTree() {
        this._storeLikeService.getTree().subscribe(jsonable  => {
            this.tree = jsonable.subnodes;
        });
    }

}
