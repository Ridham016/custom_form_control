import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-remember-me',
  templateUrl: './remember-me.component.html',
  styleUrls: ['./remember-me.component.scss'],
  providers: [{
    provide:NG_VALUE_ACCESSOR,
    useExisting: RememberMeComponent,
    multi: true
  }]
})
export class RememberMeComponent  implements OnInit, ControlValueAccessor {

  value = false;
  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  constructor() { }

  writeValue(obj: boolean): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange=fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched=fn;

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnInit() {}

  onClick(){
    this.value=!this.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
