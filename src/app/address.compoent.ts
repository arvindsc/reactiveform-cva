import { Component, forwardRef } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ControlValueAccessor,
  Validator,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ValidationErrors,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "addressForm",
  template: `
    <ng-container [formGroup]="addressForm">
      <label> address : <input type="text" formControlName="address" /> </label>
      <label> suburb : <input type="text" formControlName="suburb" /> </label>
    </ng-container>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressCompoent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressCompoent),
      multi: true
    }
  ]
})
export class AddressCompoent implements ControlValueAccessor, Validator {
  addressForm = new FormGroup({
    address: new FormControl("", [Validators.required]),
    suburb: new FormControl("")
  });

  public onTouched: () => void = () => {};

  writeValue(value: any): void {
    value && this.addressForm.setValue(value, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  validate(control: AbstractControl): ValidationErrors | null {
    return this.addressForm.valid
      ? null
      : { inValidForm: { valid: false, message: "addressForm is invalid" } };
  }
}
