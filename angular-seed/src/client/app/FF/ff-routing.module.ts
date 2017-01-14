import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FfComponent } from './ff.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'FF', component: FfComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FfRoutingModule { }
