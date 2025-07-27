import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { NavbarComponent } from "./features/layout/navbar/navbar.component";
import { FooterComponent } from "./features/layout/footer/footer.component";
import { NgxSpinnerModule } from "ngx-spinner";

 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Products_gallery-web_app';

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log("flowbite loaded" , flowbite);
    });
  }
}
