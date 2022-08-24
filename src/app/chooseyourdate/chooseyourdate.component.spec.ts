import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseyourdateComponent } from './chooseyourdate.component';

describe('ChooseyourdateComponent', () => {
  let component: ChooseyourdateComponent;
  let fixture: ComponentFixture<ChooseyourdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseyourdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseyourdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
