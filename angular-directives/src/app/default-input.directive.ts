import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDefaultInput]'
})
export class DefaultInputDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  //for text box
  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setAttribute(this.elRef.nativeElement, 'value', 'Enter a Value');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'value');
  }
}
