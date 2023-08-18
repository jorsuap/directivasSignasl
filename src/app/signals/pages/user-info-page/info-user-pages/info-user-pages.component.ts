import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { User } from 'src/app/signals/interfaces/user-reqrest.interface';
import { UserServiceService } from 'src/app/signals/services/userService.service';

@Component({
  selector: 'app-info-user-pages',
  templateUrl: './info-user-pages.component.html',
  styleUrls: ['./info-user-pages.component.scss']
})
export class InfoUserPagesComponent implements OnInit {

  private userService = inject(UserServiceService);

  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);

  public userWasFound = signal(true);

  public fullName = computed<string>(() => {
    if ( !this.currentUser() ) return 'Usuario no encontrado';
    return `${ this.currentUser()?.first_name } ${ this.currentUser()?.last_name }`
  })

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser( id: number ){
    if(id <= 0) return;
    this.currentUser.set( undefined );
    this.userId.set(id);
    this.userService.getUserById( id ).subscribe({
      next: ( user ) => {
        this.currentUser.set( user );
        this.userWasFound.set( true );
      },
      error: () => {
        this.userWasFound.set( false );
        this.currentUser.set( undefined );
      }
    })
  }



}
