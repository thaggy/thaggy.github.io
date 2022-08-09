import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements OnInit {
  // This is an input field so that if you want to set isMinimized to any specific value to start
  @Input() public startsMinimized = false;
  @Input() public panelId = "basicId";
  public panelClass: string = "collapse show";

  constructor() {
  }

  ngOnInit(): void {
    if (this.startsMinimized) {
      this.panelClass = "collapse";
    }
  }

}
