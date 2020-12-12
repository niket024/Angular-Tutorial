import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddRemoveClass]'
})
export class AddRemoveClassDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.addClass(this.elRef.nativeElement, 'hl-text');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.elRef.nativeElement, 'hl-text');
  }
}
