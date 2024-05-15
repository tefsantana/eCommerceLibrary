import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { CheckoutModule } from './checkout/checkout.module';
import { BookDetailModule } from './book/book-detail.module';
import { CartModule } from './cart/cart.module';
import { AccountModule } from './account/account.module';
import { AboutUsModule } from '../modules/about-us/about-us.module';
import { ContactModule } from '../modules/contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    BookDetailModule,
    CartModule,
    AccountModule,
    CheckoutModule,
    PagesRoutingModule,
    AboutUsModule,
    ContactModule
  ],
  exports: [
    HomeModule,
    BookDetailModule,
    CartModule,
    AccountModule,
    CheckoutModule,
    AboutUsModule,
    ContactModule
  ]
})
export class PagesModule { }