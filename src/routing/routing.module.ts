import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from '../component/nav/nav.component';
import { PredictComponent } from '../component/predict/predict.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
  },
  {
    path: 'predict',
    component: PredictComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
