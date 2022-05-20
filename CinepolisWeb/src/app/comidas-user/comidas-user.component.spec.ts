import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasUserComponent } from './comidas-user.component';

describe('ComidasUserComponent', () => {
  let component: ComidasUserComponent;
  let fixture: ComponentFixture<ComidasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidasUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
