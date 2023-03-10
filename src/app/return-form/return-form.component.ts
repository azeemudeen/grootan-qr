import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-return-form',
  templateUrl: './return-form.component.html',
  styleUrls: ['./return-form.component.css']
})
export class ReturnFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
