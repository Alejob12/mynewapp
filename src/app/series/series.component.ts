import { Component, OnInit } from '@angular/core';
import {Serie} from './Serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  standalone: false,
})
export class SeriesComponent implements OnInit {
  
  constructor(private serieService: SerieService) {}

  series: Serie[] = [];
  averageSeasons: number = 0;
  selectedSerie: Serie | null = null; 


  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    let totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }

  selectSerie(serie: Serie): void { 
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }
}