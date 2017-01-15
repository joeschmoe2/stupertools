import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFComponent } from './ff.component';
import { FfRoutingModule } from './ff-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { FFDataService } from './services/ff-getdata.service';

@NgModule({
  imports: [CommonModule, FfRoutingModule, SharedModule],
  declarations: [FFComponent],
  exports: [FFComponent],
  providers: [NameListService, FFDataService]
})
export class FfModule { }
