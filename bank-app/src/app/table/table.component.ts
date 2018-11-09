import { Component, OnInit } from '@angular/core';
import { BankAppService } from '../bank-app.service';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  characters: Observable<object>;
  columns: string[];
  selectedUser: any;

  constructor(private atService: BankAppService, private router: Router) { }

  ngOnInit() {

  this.columns = this.atService.getColumns(); 
  
  this.characters = this.atService.getCharacters();
  

  }

  onSelect(selectedItem: any){
    this.atService.setSelected(selectedItem);
    this.router.navigate(['/choose-card']);
  }

}
