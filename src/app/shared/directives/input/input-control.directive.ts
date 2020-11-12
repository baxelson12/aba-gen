import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[input-control]'
})
export class InputControlDirective extends BaseDirective{
  elClasses = [
    'w-full',
    'appearance-none',
    'bg-transparent',
    'border-none',
    'focus:outline-none'
  ]
}
