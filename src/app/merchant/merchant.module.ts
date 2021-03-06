import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import { MerchantDashboardComponent } from './components/merchant-dashboard/merchant-dashboard.component';
import { StallRegistrationComponent } from './components/merchant-dashboard/stall-registration/stall-registration.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreatIndentComponent } from './components/merchant-dashboard/creat-indent/creat-indent.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    MerchantComponent,
    MerchantDashboardComponent,
    StallRegistrationComponent,
    CreatIndentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MerchantRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    TypeaheadModule.forRoot(),
    MatDatepickerModule,
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    MatInputModule,
    MatDialogModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() ,
  ],
})
export class MerchantModule {}
