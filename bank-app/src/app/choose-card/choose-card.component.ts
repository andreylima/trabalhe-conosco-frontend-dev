import { Component, OnInit } from '@angular/core';
import { BankAppService } from '../bank-app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.css']
})
export class ChooseCardComponent implements OnInit {

  constructor(private atService: BankAppService, private router: Router) { }

  userData : any = {};
  cachedUserData : any;
  hasCardRegistered : boolean = false;
  user : any;

  registerNewCard()
  {
  	this.router.navigate(['/register-card']);
  }

  ngOnInit() {
  	this.user = this.atService.getUser();
  	this.cachedUserData = localStorage.getItem(this.userData.username);
  	if (this.cachedUserData != null) {
  		this.hasCardRegistered  = true;
  	}

  }

}
