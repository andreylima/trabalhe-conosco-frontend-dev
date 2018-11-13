import { Component, OnInit } from '@angular/core';
import { BankAppService } from '../bank-app.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  constructor(private atService: BankAppService, private router: Router) { }

	user : any;
  actualCards : any;

  cardInfo = new FormGroup({
    card_flag: new FormControl(),
    card_name: new FormControl(),
    card_number: new FormControl(),
    expiry_date: new FormControl(),
    security_code: new FormControl(),
    billing_cep: new FormControl(),
  })

  saveNewCard()
  {

   this.actualCards = localStorage.getItem("mycards");
   if (this.actualCards != null) {
     this.actualCards.push(this.cardInfo);
   } else {
     this.actualCards = [];
     this.actualCards.push(JSON.stringify(this.cardInfo));
   }

	 localStorage.setItem("mycards", this.actualCards);
   this.router.navigate(['/choose-card']);
  }

  ngOnInit() {

  }

}
