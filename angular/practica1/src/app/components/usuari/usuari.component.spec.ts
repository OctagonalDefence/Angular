import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariComponent } from './usuari.component';

describe('UsuariComponent', () => {
  let component: UsuariComponent;
  let fixture: ComponentFixture<UsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
