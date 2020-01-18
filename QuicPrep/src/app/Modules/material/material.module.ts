import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatCardModule } from '@angular/material';

 const MaterialProp =  [
  MatButtonModule,
  MatCardModule
]

@NgModule({
  imports: [
  MaterialProp
  ],
  exports: [
  MaterialProp
  ]
})
export class MaterialModule { }
