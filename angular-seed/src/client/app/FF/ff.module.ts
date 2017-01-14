import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfComponent } from './ff.component';
import { FfRoutingModule } from './ff-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [CommonModule, FfRoutingModule, SharedModule],
  declarations: [FfComponent],
  exports: [FfComponent],
  providers: [NameListService]
})
export class FfModule { }
