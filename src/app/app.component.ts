import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { CrudComponent } from './crud/crud.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LazyDemoComponent,CrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'try';
}
