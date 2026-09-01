import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosTeste } from './arquivos-teste';

describe('ArquivosTeste', () => {
  let component: ArquivosTeste;
  let fixture: ComponentFixture<ArquivosTeste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArquivosTeste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquivosTeste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
