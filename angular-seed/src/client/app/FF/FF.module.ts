import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFComponent } from './FF.component';
import { FFRoutingModule } from './FF-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [CommonModule, FFRoutingModule, SharedModule],
  declarations: [FFComponent],
  exports: [FFComponent],
  providers: [NameListService]
})
export class FFModule { }
