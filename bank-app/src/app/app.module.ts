import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ChooseCardComponent } from './choose-card/choose-card.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { BankAppService } from './bank-app.service';
import { HttpClientModule } from  '@angular/common/http';


import { AppRoutingModule } from './routing.module';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChooseCardComponent,
    RegisterCardComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BankAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
