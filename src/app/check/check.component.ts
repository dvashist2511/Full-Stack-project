import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  admin(): void {
    
    this.router.navigate(['/form/'])
  }

  customer(): void {
    this.router.navigate(['/customer/'])
  }



}
