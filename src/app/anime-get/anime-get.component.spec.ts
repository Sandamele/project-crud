import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeGetComponent } from './anime-get.component';

describe('AnimeGetComponent', () => {
  let component: AnimeGetComponent;
  let fixture: ComponentFixture<AnimeGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
