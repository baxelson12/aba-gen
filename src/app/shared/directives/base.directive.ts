import { Directive, HostBinding } from '@angular/core';

@Directive()
export abstract class BaseDirective {
  abstract elClasses: string[];

  @HostBinding('class')
  get elementClass(): string {
    return this.elClasses.join(' ');
  }
}