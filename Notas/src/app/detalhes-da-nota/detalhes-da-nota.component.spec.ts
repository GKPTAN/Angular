import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDaNotaComponent } from './detalhes-da-nota.component';

describe('DetalhesDaNotaComponent', () => {
  let component: DetalhesDaNotaComponent;
  let fixture: ComponentFixture<DetalhesDaNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesDaNotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesDaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
