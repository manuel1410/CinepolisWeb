import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasAdminComponent } from './comidas-admin.component';

describe('ComidasAdminComponent', () => {
  let component: ComidasAdminComponent;
  let fixture: ComponentFixture<ComidasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
