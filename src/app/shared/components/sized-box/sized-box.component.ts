import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sized-box',
  templateUrl: './sized-box.component.html',
  styleUrls: ['./sized-box.component.styl'],
})
export class SizedBoxComponent implements OnInit {
  @Input()
  width: number;

  @Input()
  height: number;

  public styles: object;
  constructor() {}

  ngOnInit() {
    this.styles = {
      width: this.width + 'px',
      height: this.height + 'px',
    };
  }
}
