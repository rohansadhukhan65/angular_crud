import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTmpComponent } from './new-tmp.component';

describe('NewTmpComponent', () => {
  let component: NewTmpComponent;
  let fixture: ComponentFixture<NewTmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
