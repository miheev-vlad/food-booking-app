import { TestBed } from '@angular/core/testing';
import { AuthModule } from './auth.module';

describe('AuthModule', () => {
  let module: AuthModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule],
    });

    module = TestBed.inject(AuthModule);
  });

  xit('should create a module', () => {
    expect(module).toBeTruthy();
  });
});
