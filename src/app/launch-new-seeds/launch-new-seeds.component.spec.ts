import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchNewSeedsComponent } from './launch-new-seeds.component';

describe('LaunchNewSeedsComponent', () => {
  let component: LaunchNewSeedsComponent;
  let fixture: ComponentFixture<LaunchNewSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchNewSeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchNewSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
