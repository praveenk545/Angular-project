import { Component } from '@angular/core';
import { Router,RouterLink,Route,RouterModule } from '@angular/router';

@Component({
  selector: 'app-lazy-demo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lazy-demo.component.html',
  styleUrl: './lazy-demo.component.css'
})
export class LazyDemoComponent {

}
