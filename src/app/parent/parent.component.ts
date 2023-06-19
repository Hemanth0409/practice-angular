import { Component } from '@angular/core';
import * as product from'src/assets/product1.json'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
// p:any=(product as any).default;
}
