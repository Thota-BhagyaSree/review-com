import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seed } from '../seed';
import { SeedOperationService } from '../seed-operation.service';
@Component({
  selector: 'app-seed-details',
  templateUrl: './seed-details.component.html',
  styleUrls: ['./seed-details.component.css']
})
export class SeedDetailsComponent {
  seedName: string='';
    bloomSeason: string='';
    typesOfSeeds: string='';
    seedsStock: string='';
    seedsPerPacket: string='';
    about: string='';
    discount: string='';
    price: string='';
    starRating: string='';

  constructor()
  {
    this.seedName=localStorage.getItem("seedName") ||'';
    this.bloomSeason=localStorage.getItem("bloomSeason") || '';
    this.typesOfSeeds=localStorage.getItem("typesOfSeeds") ||'';
    this.seedsStock=localStorage.getItem("seedsStock") || '';
    this.about=localStorage.getItem("about") ||'';
    this.discount=localStorage.getItem("discount") || '';
    this.price=localStorage.getItem("price") ||'';
    this.starRating=localStorage.getItem("starRating") || '';
  }
}
