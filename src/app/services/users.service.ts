import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';


interface State{
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: true
  });


  public users = computed(()=>this.#state().users);
  public loading = computed(()=>this.#state().loading);


  constructor() {
    this.http.get<UserResponse>('https://reqres.in/api/users')
    .subscribe( res =>{
      this.#state.set({
        loading: false,
        users: res.data
      })
    });
  }
}
