import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  private route = inject(ActivatedRoute);

  constructor(){
    console.log(this.route.snapshot.params);
  }

}
