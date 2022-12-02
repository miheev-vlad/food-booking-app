import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterComponent],
    });

    component = TestBed.inject(RegisterComponent);
  });

  xit('should create a component', () => {
    expect(component).toBeTruthy();
  });
});
