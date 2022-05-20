import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesComidaComponent } from './detalles-comida.component';

describe('DetallesComidaComponent', () => {
  let component: DetallesComidaComponent;
  let fixture: ComponentFixture<DetallesComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
