import { Routes } from '@angular/router';
import { HomepageComponent } from '../app/pages/homepage/homepage.component';
import { AboutComponent } from '../app/pages/about/about.component';
import {LoginComponent} from '../app/pages/auth/login/login.component'
import {RegisterComponent} from '../app/pages/auth/register/register.component'
import {ProductDetailComponent} from '../app/pages/products/product-detail/product-detail.component'
import {ProductListComponent } from '../app/pages/products/product-list/product-list.component'
import {BasketComponent } from '../app/pages/basket/basket.component'
import {CheckoutComponent } from '../app/pages/checkout/checkout.component'

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Ana Sayfa'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Hakkında'
  },
  {
    path: 'giris-yap',
    component: LoginComponent,
    title: 'Giriş Yap'
  },
  {
    path: 'uye-ol',
    component: RegisterComponent,
    title: 'Üye Ol'
  },
  {
    path: 'urun-detay',
    component: ProductDetailComponent,
    title: 'Ürün Detay'
  },{
    path: 'urun-liste',
    component: ProductListComponent,
    title: 'Ürün Listesi'
  },
  {
    path: 'sepetim',
    component: BasketComponent,
    title: 'Sepet'
  },
  {
    path: 'odeme-sayfasi',
    component: CheckoutComponent,
    title: 'Ödeme'
  }
  
];
