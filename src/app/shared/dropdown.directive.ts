import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open = false;

  @HostListener('click') toggleOpen() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.open = !this.open;
  }
}
