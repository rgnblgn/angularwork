import { Routes } from '@angular/router';
import { HomepageComponent } from '../app/pages/homepage/homepage.component';
import { AboutComponent } from '../app/pages/about/about.component';


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
  }
  
];
