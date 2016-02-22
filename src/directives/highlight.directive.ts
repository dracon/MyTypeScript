import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: '[myHighLight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighLightDirective {
  @Input('myHighLight') highlightColor: string;
  private _deafultColor = 'red';

  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';
   }

  onMouseEnter() {this._highlight(this.highlightColor || this._deafultColor)}
  onMouseLeave() {this._highlight(null)}

  private _highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
