import { Component } from '@angular/core';
import { RecordsService } from "./records.service";

interface myData {
  records: Object
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'New Angular App';
  records
  constructor(private recordSrv: RecordsService){
  }
  ngOnInit(){
    this.recordSrv.getData().subscribe(data => {
      this.records = data.records;
    });
  }
}
