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
    console.log('Params snapshot ', this._activatedRoute.snapshot.params.id);

    this._activatedRoute.params.subscribe((params) => {
      console.log('Params subscribe ', params);
    });

    console.log('==============================================');

    console.log('ParamMap snapshot', this._activatedRoute.snapshot.paramMap.has('id'));

    this._activatedRoute.paramMap.subscribe((params) => {
      console.log('ParamMap subscribe', params.get('id'));
    });
  }

  redirectRelative() {
    this._router.navigate(['about'], { relativeTo: this._activatedRoute });
  }

  redirectAbsolute() {
    this._router.navigate(['/about']);
  }
}
