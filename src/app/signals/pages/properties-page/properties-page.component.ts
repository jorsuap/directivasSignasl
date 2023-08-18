import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-reqrest.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  })

  public fullName = computed( ()=> `${ this.user().first_name } ${ this.user().last_name }`)

  onfieldUpdate( field: keyof User, value: string){

    // this.user.set({...this.user(), [field]:value})

    // this.user.update( currrent => {
    //   return {
    //     ...currrent,
    //     [field]: value
    //   }
    // })

    this.user.mutate( current => {
      switch( field){
        case 'email':
          current.email = value;
        break;
        case 'first_name':
          current.first_name = value;
        break;
        case 'last_name':
          current.last_name = value;
        break;
        case 'id':
          current.id = Number(value);
        break;
      }
    })
  }
}
