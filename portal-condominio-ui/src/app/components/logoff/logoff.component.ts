import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { fadeInOutAnimation } from 'src/app/services/animation';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css'],
  animations: [fadeInOutAnimation]
})
export class LogoffComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogoff() {
    this.authService.logout();
    this.router.navigate(['home']);
  }

}
