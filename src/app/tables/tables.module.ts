import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';

import { TablesRoutingModule } from './tables-routing/tables-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoadSpinnerModule } from '../load-spinner/load-spinner.module';
import { AlertModule } from '../shared/alert/alert.module';
import { ProcessDiagramComponent } from './process-diagram/process-diagram.component';
import { FormsModule } from '@angular/forms';
import { customFormsModule } from 'app/forms/forms.module';
@NgModule({
  imports: [
    TablesRoutingModule,
    LoadSpinnerModule,
    AlertModule,
    CommonModule,
    customFormsModule
  ],
  declarations: [TablesComponent, UserDetailComponent, SearchFilterPipe, ProcessDiagramComponent]
})
export class TablesModule { }
