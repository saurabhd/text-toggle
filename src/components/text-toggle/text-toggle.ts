import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-toggle',
  templateUrl: 'text-toggle.html'
})
export class TextToggleComponent {

  @Input() left: string;
  @Input() right: string;
  @Input() selected: string;
  @Output() selectedChange: EventEmitter<string>;

  constructor() {
    this.selectedChange = new EventEmitter<string>();
  }

  isSelected(value: string): boolean {
      return this.selected === value;
  }

  clickLeft(): void {
      this.selected = this.left;
      this.selectedChange.emit(this.selected);
  }

  clickRight(): void {
      this.selected = this.right;
      this.selectedChange.emit(this.selected);
  }

}
