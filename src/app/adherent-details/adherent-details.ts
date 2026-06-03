import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adherent-details',
  imports: [],
  templateUrl: './adherent-details.html',
  styleUrl: './adherent-details.scss',
})
export class AdherentDetails implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {

    const userId = this.activatedRoute.snapshot.paramMap.get('id');

    const snapshot = this.activatedRoute.snapshot;
    console.log({
      url: snapshot.url,
      userId: userId,
      paramMap: snapshot.paramMap,
      params: snapshot.params,
      queryParams: snapshot.queryParams,
    });
  }

}
