import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.getToken()){
      this.login = true;
    }
  }

  onLogOut(){
    localStorage.clear();
    try{
      this.authService.logout();
      this.login = false;
      this.router.navigateByUrl('/auth/register');
    }catch(e){
      console.log(e)
    }
  }

}
