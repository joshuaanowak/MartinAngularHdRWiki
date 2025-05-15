import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewHeaderComponent } from './overview/header/overview-header.component';
import { OverviewMainComponent } from './overview/main/overview-main.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OverviewHeaderComponent, OverviewMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HdRwiki';
}
