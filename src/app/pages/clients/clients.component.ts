import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  redirectRelative() {
    this._router.navigate(['about'], { relativeTo: this._activatedRoute });
  }

  redirectAbsolute() {
    this._router.navigate(['/about']);
  }
}
