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

	cardInfo : any = [{ 
		card_name: "",
    card_flag: "",
    card_number: "",
    expiry_date: "",
    security_code: "",
    billing_cep: ""
	}];

	user : any;
  actualCards : any ;

  saveNewCard()
  {
   this.actualCards = localStorage.getItem(this.user.name);
   this.actualCards.push(this.cardInfo);
	 localStorage.setItem(this.actualCards, JSON.stringify(this.cardInfo));
  }

  ngOnInit() {
  	this.user = this.atService.getUser();

  }

}
