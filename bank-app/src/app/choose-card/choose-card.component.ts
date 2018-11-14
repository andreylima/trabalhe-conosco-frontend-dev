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
  cardsArray : any = [];
  selectedCard : any = 0;

  registerNewCard()
  {
  	this.router.navigate(['/register-card']);
  }

  selectCard(i){
    this.selectedCard = i;
  }

  confirmCard(){
    
  }

  ngOnInit() {
  	this.user = this.atService.getUser();
  	this.cachedUserData = localStorage.getItem("mycards");
  	if (this.cachedUserData != null) {
  		this.hasCardRegistered  = true;
      this.cardsArray = JSON.parse(this.cachedUserData);
  	}


  }

}
