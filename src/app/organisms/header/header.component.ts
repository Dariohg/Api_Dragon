import { Component } from '@angular/core';
import {LogoComponent} from "../../molecules/logo/logo.component";
import {NavbarComponent} from "../../molecules/navbar/navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    NavbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
