import { User } from './../../model/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UserService,
    
  ) { }
  user$: Observable<User[]> = this.userService.getAll()

  onDelete(user: User): void {
    this.userService.delete(user.id).subscribe(
      user => this.user$ = this.userService.getAll(),
    )
  }



  ngOnInit(): void {
  }

}
