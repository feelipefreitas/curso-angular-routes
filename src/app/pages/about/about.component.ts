import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _router: Router) { }
  
  ngOnInit(): void {
  }

  redirectToClientsWithId() {
    this._router.navigate(['/clients', 1]);
  }

  redirectToClientsWithObj() {
    this._router.navigate(['/clients', { id: 1 }]);
  }

  redirectToClientsWithFragment() {
    this._router.navigate(['/clients'], {
      fragment: 'editMode'
    });
  }

  redirectToClientsWithQueryParams() {
    this._router.navigate(['/clients'], {
      queryParams: {
        id: 1,
        name: 'Felipe'
      }
    });
  }
}
