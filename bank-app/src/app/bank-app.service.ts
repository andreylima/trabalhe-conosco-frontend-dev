import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient} from  '@angular/common/http';


@Injectable()
export class BankAppService {


users : Observable<any>;
selectedUser : any;


constructor(private  httpClient:  HttpClient) { 
	this.users = this.httpClient.get(`${"http://careers.picpay.com/tests/mobdev"}/users`);
}
getCharacters(){
  return this.users;
}
getColumns(): string[]{
  return ["name", "img", "username", "occupation"]
}

setSelected(user){
	this.selectedUser = user;
}

getUser(){
	return this.selectedUser;
}




}