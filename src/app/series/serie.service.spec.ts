import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SerieService } from './serie.service';
import { Serie } from './Serie';
import { environment } from '../../environments/environment';

describe('SerieService', () => {
  let service: SerieService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(SerieService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('pide las series al JSON remoto y las devuelve', () => {
    const esperadas = [new Serie(1, 'Breaking Bad', 'AMC', 5, 'desc', 'https://amc.com', 'poster.jpg')];

    service.getSeries().subscribe(series => expect(series).toEqual(esperadas));

    const req = http.expectOne(environment.baseUrl + 'series.json');
    expect(req.request.method).toBe('GET');
    req.flush(esperadas);
  });
});
