import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SeriesComponent } from './series.component';
import { Serie } from './Serie';
import { environment } from '../../environments/environment';

describe('SeriesComponent', () => {
  let fixture: ComponentFixture<SeriesComponent>;
  let component: SeriesComponent;
  let http: HttpTestingController;

  const series = [
    new Serie(1, 'Breaking Bad', 'AMC', 5, 'Un profesor de química...', 'https://amc.com', 'a.jpg'),
    new Serie(2, 'Sherlock', 'BBC', 4, 'Un detective consultor...', 'https://bbc.com', 'b.jpg'),
    new Serie(3, 'Dark', 'Netflix', 3, 'Una serie alemana...', 'https://netflix.com', 'c.jpg')
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SeriesComponent]
    });
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    http = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    http.expectOne(environment.baseUrl + 'series.json').flush(series);
    fixture.detectChanges();
  });

  it('muestra una fila por serie', () => {
    const filas = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(filas.length).toBe(3);
  });

  it('calcula el promedio de temporadas', () => {
    expect(component.averageSeasons).toBe(4);
    expect(fixture.nativeElement.querySelector('.average-seasons').textContent).toContain('4');
  });

  it('muestra el detalle al seleccionar una serie', () => {
    expect(fixture.nativeElement.querySelector('.serie-details')).toBeNull();
    fixture.nativeElement.querySelectorAll('tbody tr')[1].click();
    fixture.detectChanges();
    const detalle = fixture.nativeElement.querySelector('.serie-details');
    expect(detalle.textContent).toContain('Sherlock');
    expect(component.selectedSerie).toBe(series[1]);
  });
});
