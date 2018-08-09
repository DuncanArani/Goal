import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    goals = [
        new Goal(1,'Watch Finding Nemo','', new Date(), ),
        new Goal(2,'Buy Cookies','', new Date(), ),
        new Goal(3, 'Get new Phone Case','', new Date(), ),
        new Goal(4, 'Get Dog Food','', new Date(), ),
        new Goal(5, 'Solve math homework','', new Date(), ),
        new Goal(6, 'Plot my world domination plan','', new Date(), ),
    ]
    
}
