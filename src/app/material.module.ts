import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const MAT_MODULES: Type<any>[] = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
];

@NgModule({
  exports: [...MAT_MODULES],
})
export class MaterialModule {}
