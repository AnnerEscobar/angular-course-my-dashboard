import { TitleComponent } from './../../../shared/title/title.component';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from '../../../services/users.service';
import { switchMap } from 'rxjs';

@Component({
  imports: [TitleComponent, CommonModule],
  template: `

  <app-title [title]="titleLabel()"/>

  @if(user()){
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()?.first_name"/>
      <h3>{{user()?.first_name}} {{user()?.last_name}}</h3>
      <p>{{user()?.email}}</p>
    </section>
  }@else {
    <p>Cargando informacion</p>
  }

  `
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);


  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  )

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Informacion del usuerio ${this.user()?.first_name} ${this.user()?.last_name}`
    }
      return 'Informacion del usuario'
  })


}
