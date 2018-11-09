import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { ChooseCardComponent } from './choose-card/choose-card.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { BankAppService } from './bank-app.service';
import { HttpClientModule } from  '@angular/common/http';


import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    ChooseCardComponent,
    RegisterCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BankAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
