import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getGrub().subscribe(data => {
        this.brews = data;
        console.log(this.brews);
      })
  }

  // showEvens() {
  //   ngFor
  // }


}
