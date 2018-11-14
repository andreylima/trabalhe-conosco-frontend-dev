import { Component, OnInit } from '@angular/core';
import { BankAppService } from '../bank-app.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";


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
    card_flag: new FormControl("null", [Validators.required]),
    card_name: new FormControl("", [Validators.required]),
    card_number: new FormControl("", [Validators.required]),
    expiry_date: new FormControl("", [Validators.required]),
    security_code: new FormControl("", [Validators.required]),
    billing_cep: new FormControl("", [Validators.required]),
  })

  card_flags = [
    {id: "Visa", name: "Visa"},
    {id: "Mastercard", name: "Mastercard"},
    {id: "Express", name: "American Express"},
    {id: "Elo", name: "Elo"},
    {id: "Hipercard", name: "Hipercard"},
    {id: "Diners_Club", name: "Diners Club"}
  ];

  get card_name(){
      return this.cardInfo.get("card_name");
  }

  saveNewCard()
  {
   this.actualCards = localStorage.getItem("mycards");
   if (this.actualCards != null) {
     this.actualCards = JSON.parse(this.actualCards);
     this.actualCards.push(this.cardInfo.value);
   } else {
     this.actualCards = [];
     this.actualCards.push(this.cardInfo.value);
   }

	 localStorage.setItem("mycards", JSON.stringify(this.actualCards));
   this.router.navigate(['/choose-card']);
  }

  ngOnInit() {

  }

}
