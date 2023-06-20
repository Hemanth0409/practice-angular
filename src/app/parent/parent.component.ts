import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'

})
export class ParentComponent {

  prodList = ['cricket'];

  quantity = 1

  showMyProduct(productno: number) {
    if (productno == 1 || productno < 100) {
      this.quantity++
    }
    else if (productno == 100) {
      Swal.fire({
        title: "!00 product max",
        icon: "warning",
      })
    }
  }

  decproduct(product: number) {
    if (product < 100 && product > 1) {
      this.quantity--
    }
    else if (product <= 1) {
      Swal.fire({
        title: "Atleast one Product",
        icon: "warning",
      })
    }
  }
}
