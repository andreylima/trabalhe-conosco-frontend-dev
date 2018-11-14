import { Component, OnInit } from '@angular/core';
import { BankAppService } from '../bank-app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private atService: BankAppService,private router: Router) { }

  userData : any = {};
  cachedUserData : any;
  hasCardRegistered : boolean = false;
  user : any;
  finalNumber : number;

  chooseCard()
  {
  	this.router.navigate(['/choose-card']);
  }

  registerCard()
  {
  	this.router.navigate(['/register-card']);
  }

  ngOnInit() {
  	this.user = this.atService.getUser();
  	this.cachedUserData = localStorage.getItem("mycards");
  	if (this.cachedUserData != null) {
  		this.hasCardRegistered  = true;
  		this.cachedUserData = JSON.parse(this.cachedUserData)[0];
  	}
  }

}
