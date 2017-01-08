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
    let data = this._resService.getMyIp().subscribe(res=>{
      this.fetchedIp = res.json().ip;
      console.log("Fetched: ", this.fetchedIp);
      return this.fetchedIp;
    });
  }


}
