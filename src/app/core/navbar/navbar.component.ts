import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  onKey(event: { target: { value: any; }; }) {const inputValue = event.target.value;}

  
}
