import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrHomeComponent } from './qr-home/qr-home.component';
import { ReturnFormComponent } from './return-form/return-form.component';

const routes: Routes = [
  { path: 'return', component: ReturnFormComponent },
  { path: '', component: QrHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
