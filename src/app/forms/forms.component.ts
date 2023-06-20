import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  model = new User();
  
  onSubmit(form: any) {
    console.log(form.value);
  }
  ngOnInit(): void {}
}
export class User {
  public firstname!: string;
  public lastname!: string;
  public password!: string;
  public email!: string;
}
