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
  describe("startsMinimized", () => {
    it("should start showing if startsMinimized is false", () => {
      component.startsMinimized = false;
      component.ngOnInit();
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("#" + component.panelId)).classes).toEqual({collapse: true, show: true})
    });
    it("should start minimized when startsMinimized is true", () => {
      component.startsMinimized = true;
      component.ngOnInit();
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css("#" + component.panelId)).classes).not.toEqual({collapse: true, show: true});
    });
  });
});
