import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user/user';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
