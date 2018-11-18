import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
interface myData {
  records: Object
}


@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient){}

  getData(){
    return this.http.get<myData>("/api/file.php")
    // return this.http.get<myData>("https://raw.githubusercontent.com/iMansoorAliKhan/ng-app/dev/test/api/file.json");
    }
  }
