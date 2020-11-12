import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[input-label]'
})
export class InputLabelDirective extends BaseDirective {
  elClasses = [
    'text-xs',
    'text-gray-500'
  ]
}
