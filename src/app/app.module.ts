import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ValidatorsComponent } from './pages/validators/validators.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [  
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'blocks', component: BlocksComponent },  
  { path: 'blocks/:hash', component: BlockDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'transactions', component: TransactionsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'validators', component: ValidatorsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    DashboardComponent,
    BlocksComponent,
    TransactionsComponent,
    ValidatorsComponent,
    BlockDetailsComponent,
    TransactionDetailsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
