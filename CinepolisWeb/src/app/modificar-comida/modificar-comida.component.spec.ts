import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarComidaComponent } from './modificar-comida.component';

describe('ModificarComidaComponent', () => {
  let component: ModificarComidaComponent;
  let fixture: ComponentFixture<ModificarComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
