import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerjsLibraryComponent } from './beerjs-library.component';

describe('BeerjsLibraryComponent', () => {
  let component: BeerjsLibraryComponent;
  let fixture: ComponentFixture<BeerjsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerjsLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeerjsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
