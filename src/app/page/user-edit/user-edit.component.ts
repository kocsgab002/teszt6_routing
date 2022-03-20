import { User } from './../../model/user';
import { Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(
    private ar: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }
  user$: Observable<User> = this.ar.params.pipe(switchMap(params => this.userService.get(params['id'])))

  onUpdate(user: User): void {
    this.userService.update(user).subscribe(
      user => this.router.navigate(['/', 'users'])

    )
  }

  ngOnInit(): void {
  }

}
