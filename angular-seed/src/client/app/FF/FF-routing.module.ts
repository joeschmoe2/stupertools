import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FFComponent } from './FF.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'FF', component: FFComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FFRoutingModule { }
