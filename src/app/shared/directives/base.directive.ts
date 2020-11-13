import { Directive, HostBinding } from '@angular/core';

@Directive()
export abstract class BaseDirective {
  abstract elClasses: string[];

  // Create string of classes based on array
  @HostBinding('class')
  get elementClass(): string {
    return this.elClasses.join(' ');
  }
}
