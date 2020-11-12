import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[input-wrapper]'
})
export class InputWrapperDirective extends BaseDirective {
  elClasses = [
    'flex',
    'items-center',
    'px-2',
    'py-1',
    'border',
    'border-gray-400',
    'rounded'
  ]
}
