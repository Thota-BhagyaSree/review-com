import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchNewPlantComponent } from './launch-new-plant.component';

describe('LaunchNewPlantComponent', () => {
  let component: LaunchNewPlantComponent;
  let fixture: ComponentFixture<LaunchNewPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchNewPlantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchNewPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
