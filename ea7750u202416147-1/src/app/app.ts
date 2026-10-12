import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Root component of the application.
 * @author Carlos Céspedes
 */
@Component({
  imports: [RouterOutlet, TranslatePipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
