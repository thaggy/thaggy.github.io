import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPanelComponent } from './accordion-panel.component';
import {By} from "@angular/platform-browser";

describe('AccordionPanelComponent', () => {
  let component: AccordionPanelComponent;
  let fixture: ComponentFixture<AccordionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("isMinimized", () => {
    it("should be truthy when not minimized", () => {
      component.isMinimized = false;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("#body-element"))).toBeTruthy()
    });
    it("should be falsy when minimized", () => {
      component.isMinimized = true;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("#body-element"))).toBeFalsy();
    });
  });
});
