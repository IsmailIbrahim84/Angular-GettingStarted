import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './Product/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacePipe} from './shared/convert-to-space.pipe';
import {StarComponent} from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ProductDetailsComponent } from './product/product-details.component';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacePipe,
      StarComponent,
      ProductDetailsComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent}, {path: 'products/:id', component: ProductDetailsComponent},
      {path: 'welcome', component: WelcomeComponent}, {path: '', redirectTo: 'welcome', pathMatch: 'full'}, {path: '**', redirectTo: 'welcome', pathMatch: `full`}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
