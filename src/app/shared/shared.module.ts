import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLabelDirective } from './directives/input/input-label.directive';
import { InputWrapperDirective } from './directives/input/input-wrapper.directive';
import { InputControlDirective } from './directives/input/input-control.directive';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    InputLabelDirective,
    InputWrapperDirective,
    InputControlDirective,
    InputComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputControlDirective,
    InputLabelDirective,
    InputWrapperDirective,
    InputComponent,
  ],
})
export class SharedModule {}
