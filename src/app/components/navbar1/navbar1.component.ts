import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar1',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule],
  templateUrl: './navbar1.component.html',
  styleUrl: './navbar1.component.scss'
})
export class Navbar1Component {

}
