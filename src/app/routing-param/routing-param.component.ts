import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-routing-param',
  templateUrl: './routing-param.component.html',
  styleUrls: ['./routing-param.component.css']
})
export class RoutingParamComponent implements OnInit{
  id!: string |null
  constructor(private route: ActivatedRoute) {}   
    ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }

}
