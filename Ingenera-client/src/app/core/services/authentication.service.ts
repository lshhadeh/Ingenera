import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models';

@Injectable()
export class AuthenticationService {
   // redirectUrl: string;


    constructor(
        // private router: Router,
        // private route: ActivatedRoute
    ) {
      //  this.redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';
    }

    public getUser(): User {
        const localUsr = JSON.parse(localStorage.getItem('currentUser')) as User;

        return localUsr;
    }
    private setUser(usr: User, isRemember = false): void {
        localStorage.setItem('currentUser', JSON.stringify(usr));      
    }



}
