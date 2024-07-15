import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterMovieComponent } from './harry-potter-movie.component';

describe('HarryPotterMovieComponent', () => {
  let component: HarryPotterMovieComponent;
  let fixture: ComponentFixture<HarryPotterMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPotterMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarryPotterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
