import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseyourdateComponent } from './chooseyourdate.component';
import {ModalButtonComponent} from "../modal-button/modal-button.component";
import {ModalBodyComponent} from "../modal-body/modal-body.component";
import {By} from "@angular/platform-browser";

describe('ChooseyourdateComponent', () => {
  let component: ChooseyourdateComponent;
  let fixture: ComponentFixture<ChooseyourdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseyourdateComponent, ModalButtonComponent, ModalBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseyourdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`currentOption`, () => {
    it(`should update when firstButton is clicked`, () => {
      let nextKey = component.currentOption.exitKeyOne;
      component.handleOptionOneClick();
      expect(component.currentOption.key).toEqual(nextKey);
    });
    it(`should update when secondButton is clicked`, () => {
      let nextKey = component.currentOption.exitKeyTwo;
      component.handleOptionTwoClick();
      expect(component.currentOption.key).toEqual(nextKey);
    });
    describe(`showCompletion`, () => {
      it('should show completed button when true',  () => {
        component.showCompletion = true;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("#completionButton"))).toBeTruthy();
      });
      it('should not show completed button when false',  () => {
        component.showCompletion = false;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("#completionButton"))).toBeFalsy();
      });
      it('should not show completed button when true',  () => {
        component.showCompletion = true;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("#optionDiv"))).toBeFalsy();
      });
      it('should show completed button when false',  () => {
        component.showCompletion = false;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("#optionDiv"))).toBeTruthy();
      });
    });
    describe(`isDateFinished`, () => {
      it(`should show completion when showCompletion is false and key is 11`, () => {
        component.currentOption.key = 11;
        component.showCompletion = false;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("#finishText"))).toBeTruthy();
      });
      it(`should not show key is 11`, () => {
        component.currentOption.key = 11;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("#optionDiv"))).toBeFalsy();
      });
      it(`should not show completion when showCompletion is true and key is 11`, () => {
        component.currentOption.key = 11;
        component.showCompletion = true;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("#finishText"))).toBeFalsy();
      });
      it(`should not show completion when showCompletion is false and key is not 11`, () => {
        component.currentOption.key = 12;
        component.showCompletion = false;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("#finishText"))).toBeFalsy();
      });
    });
  });
});
