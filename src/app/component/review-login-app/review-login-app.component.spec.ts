import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLoginAppComponent } from './review-login-app.component';

describe('ReviewLoginAppComponent', () => {
  let component: ReviewLoginAppComponent;
  let fixture: ComponentFixture<ReviewLoginAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewLoginAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewLoginAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
