import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextDanger]'
})
export class TextDangerDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    //old way
    //this.elRef.nativeElement.style.color = 'green';
    //REcommended way to change style
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');

    //createElement / appendChild / createText 
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('New li element from renderer');
  
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.elRef.nativeElement, li);
  }

}
