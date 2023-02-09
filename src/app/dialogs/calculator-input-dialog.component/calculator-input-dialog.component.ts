import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputValues } from 'src/app/types';

@Component({
  selector: 'calc-input',
  styles: [],
  templateUrl: `./calculator-input-dialog.component.html`,
})
export class CalculatorInputDialogComponent {
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: InputValues,
    private _dialogRef: MatDialogRef<CalculatorInputDialogComponent>,
    private _fb: FormBuilder
  ) {
    this.form = this.generateForm(this.data);
  }

  public onCancel(){
    this._dialogRef.close();
  }

  private generateForm(data?: InputValues) {
    return this._fb.group({
      salary: [data?.salary || 0, [Validators.required, Validators.min(0)]],
      contribution_rate: [
        data?.contribution_rate || 0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      inflation_rate: [
        data?.inflation_rate || 0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      earnings: [
        data?.earnings || 0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      fees: [
        data?.fees || 0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      tax: [
        data?.tax || 0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      withdrawal_rate: [
        data?.withdrawal_rate || 0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      withdrawal_age_start: [
        data?.withdrawal_age_start || 66,
        [Validators.required, Validators.min(20), Validators.max(150)],
      ],
      contribution_age_stop: [
        data?.contribution_age_stop || 66,
        [Validators.required, Validators.min(20), Validators.max(150)],
      ],
    });
  }
}
