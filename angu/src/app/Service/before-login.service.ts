import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |

  Observable<boolean> | Promise<boolean> {
    return !this.Token.loggedIn();
  }

  constructor(
    private Token : TokenService
  ) { }
}
