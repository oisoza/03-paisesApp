import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';


import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }
  ngOnInit(): void {
    // this.activateRoute.params.subscribe(({CountryId}) => {
    //   this.paisService.getPaisAlpha(CountryId).subscribe(pais => {
    //     console.log(pais);
    //   });
    // });
    this.activateRoute.params
    .pipe(
      switchMap(({CountryId}) => this.paisService.getPaisAlpha(CountryId)),
      tap(console.log)
      )
    .subscribe(pais => {
      this.pais = pais[0];
    });
  }
}
