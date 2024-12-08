import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, SalesPersonListComponent, ProductListComponent],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-angular-project';
}
