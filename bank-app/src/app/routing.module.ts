import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { ChooseCardComponent } from './choose-card/choose-card.component';
import { RegisterCardComponent } from './register-card/register-card.component';

const appRoutes: Routes = [
  {
    path: 'choose-card',
    component: ChooseCardComponent,
    data: { title: 'Escolha o cartão' }
  },
  {
    path: 'register-card',
    component: RegisterCardComponent,
    data: { title: 'Registrar cartão' }
  },
  {
    path: '',
    component: TableComponent,
    data: { title: 'Table' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}