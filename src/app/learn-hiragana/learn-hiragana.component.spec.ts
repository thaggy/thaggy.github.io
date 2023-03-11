import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHiraganaComponent } from './learn-hiragana.component';
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {MatSliderModule} from "@angular/material/slider";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

describe('LearnHiraganaComponent', () => {
  let component: LearnHiraganaComponent;
  let fixture: ComponentFixture<LearnHiraganaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnHiraganaComponent, NavbarComponent ],
      imports: [RouterModule, NgbModule, MatProgressBarModule, MatInputModule, FormsModule, BrowserAnimationsModule, MatSlideToggleModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnHiraganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("getRandomInteger", () => {
    it("should Produce Non Negative Number", () => {
      expect(component.getRandomInteger(10)).toBeGreaterThan(-1);
    });
  });
  describe("getThreeRandomIntegers", () => {
    it("should Produce 3 Unique Numbers", () => {
      const arr = component.getThreeRandomIntegers(10);
      expect(new Set(arr).size).toEqual(arr.length);
    });
  });
  describe("getChoicesForMultipleChoice", () => {
    it("should Contain Answer", () => {
      component.hiraganaSections[0].isEnabled = true;
      component.addSelectedFields();
      const arr = component.getChoicesForMultipleChoice(component.selectedHiragana.length, 0);
      expect(new Set(arr).size).toEqual(arr.length);
      const containsAnswer = arr.some((arr) => arr === component.selectedHiragana[0].japanese)
      expect(containsAnswer).toBeTruthy();
    });
  });
});
