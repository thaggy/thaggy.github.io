import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHiraganaComponent } from './learn-hiragana.component';

describe('LearnHiraganaComponent', () => {
  let component: LearnHiraganaComponent;
  let fixture: ComponentFixture<LearnHiraganaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnHiraganaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnHiraganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
