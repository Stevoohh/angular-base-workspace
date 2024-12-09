import { Component } from '@angular/core';
import { AngularBaseComponent } from '@olb/angular-base'


@Component({
    selector: 'app-root',
    imports: [AngularBaseComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-base-demo';
}
