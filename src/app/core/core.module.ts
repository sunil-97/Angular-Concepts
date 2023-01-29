import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from '../modules/data-binding/data-binding.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DataBindingComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    DataBindingComponent,
    TopbarComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
