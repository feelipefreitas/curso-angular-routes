import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-description',
  templateUrl: './client-description.component.html',
  styleUrls: ['./client-description.component.scss']
})
export class ClientDescriptionComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      console.log('Params ClientDescriptionComponent ', params);
    });
  }
}
