import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDescriptionComponent } from './client-description.component';

describe('ClientDescriptionComponent', () => {
  let component: ClientDescriptionComponent;
  let fixture: ComponentFixture<ClientDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
