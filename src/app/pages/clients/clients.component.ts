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
    this.initializeParams();

    console.log('==============================================');

    this.initializeParamMap();

    console.log('==============================================');

    this.initializeFragment();

    console.log('==============================================');

    this.initializeQueryParams();
  }

  redirectRelative() {
    this._router.navigate(['about'], { relativeTo: this._activatedRoute });
  }

  redirectAbsolute() {
    this._router.navigate(['/about']);
  }

  redirectToChildComp() {
    this._router.navigate([1], { relativeTo: this._activatedRoute });
  }

  private initializeParams() {
    console.log('Params snapshot ', this._activatedRoute.snapshot.params.id);

    this._activatedRoute.params.subscribe((params) => {
      console.log('Params subscribe ', params);
    });
  }

  private initializeParamMap() {
    console.log('ParamMap snapshot', this._activatedRoute.snapshot.paramMap.has('id'));

    this._activatedRoute.paramMap.subscribe((params) => {
      console.log('ParamMap subscribe', params.get('id'));
    });
  }

  private initializeFragment() {
    console.log('Fragment snapshot', this._activatedRoute.snapshot.fragment);

    this._activatedRoute.fragment.subscribe((fragment) => {
      console.log('Fragment subscribe', fragment)
    });
  }

  private initializeQueryParams() {
    console.log('Query Params snapshot', this._activatedRoute.snapshot.queryParams);

    this._activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('Query Params subscribe', queryParams);
    });

    console.log(this._activatedRoute.snapshot.queryParamMap.has('age'));
  }
}
