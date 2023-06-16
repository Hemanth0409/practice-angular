import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  title = 'json-read-example';
  Trainee_details:any;
  url: string = '/assets/Batch35_trainne.json';
  public show:boolean = true;
  


  constructor(private http: HttpClient) {}
  toggle() {
    this.show = !this.show;

    // Change the name of the button.
  //   if(this.show)  
  //     this.buttonName = "Hide";
  //   else
  //     this.buttonName = "Show";
  }
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.Trainee_details = res;
    });
   
  }
}
