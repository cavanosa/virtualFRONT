import { Component, OnInit } from '@angular/core';
import { Tio } from '../model/tio';
import { TioService } from './tio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-tio',
  templateUrl: './nuevo-tio.component.html',
  styleUrls: ['./nuevo-tio.component.css']
})
export class NuevoTioComponent implements OnInit {
  tio: Tio;
  nombre = '';
  email = '';

  constructor(private tioService: TioService, private router: Router) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.tio = new Tio(this.nombre, this.email);
    this.tioService.nuevo(this.tio).subscribe(
      data => {
        alert(data.mensaje);
        this.router.navigate(['/']);
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }
}
