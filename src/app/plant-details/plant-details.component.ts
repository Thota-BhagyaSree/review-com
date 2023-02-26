import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantDto } from '../plant-dto';

import { PlantOperationService } from '../plant-operation.service';
import { PlantReviewDTO } from '../plant-review-dto';
import { PlantReviewService } from '../plant-review.service';
@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {
 
  plantId:string='';
  plantName:string='';
  Height:String='';
  Price:string='';
  constructor(){
    this.plantId=localStorage.getItem("plantId")||'';
    this.plantName=localStorage.getItem("plantName")||'';
    this.Height=localStorage.getItem("Height")||'';
    this.Price=localStorage.getItem("Price")||'';
  }
  showReview:boolean=false;



}
