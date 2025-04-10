import {Component} from "@angular/core"
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector:"app-homepage",
    templateUrl:"./homepage.component.html",
    imports: [CommonModule, RouterModule],

    styleUrls:["./homepage.component.css"]
})

export class HomepageComponent{};