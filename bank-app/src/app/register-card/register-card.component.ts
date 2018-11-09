import { Component, OnInit } from '@angular/core';
import { BankAppService } from '../bank-app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  constructor(private atService: BankAppService, private router: Router) { }

	cardInfo : any = { 
		cardName: 'Teste' 
	};

	user : any;

  saveNewCard()
  {
	localStorage.setItem(this.user.name, JSON.stringify(this.cardInfo));
  }

  ngOnInit() {
  	this.user = this.atService.getUser();
  }

}
