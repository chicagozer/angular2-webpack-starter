import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NgPage } from './ngpage';
import { BoroughComponent } from './borough';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: BoroughComponent },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'ngpage', component: NgPage },
  { path: 'borough', component: BoroughComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
