import { Component } from '@angular/core';
import { Plant } from '../plant';
import { PlantDto } from '../plant-dto';
import { PlantOperationService } from '../plant-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PlantReviewDTO } from '../plant-review-dto';
import { PlantReviewService } from '../plant-review.service';
import { PlantReview } from '../plant-review';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent {
  allPlants: PlantDto[] = [];
  allReviews: PlantReviewDTO [] = [];
  a=0;
  reviewForFlight=0;
  __plantService:PlantOperationService;
  router:Router;

  constructor(private plantService:PlantOperationService, private plantReviewService: PlantReviewService,router:Router)
  {
    this.__plantService = plantService;
    this.router = router;
    this.plantService.getAllPlantsFromSpring().subscribe(
      data=>{
          this.allPlants = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }
 /* viewProductDetails()
  {
    
    this.router.navigate(['planterDetail']);
  }*/
  viewProductDetails(plantId:number,plantName:string,typeOfPlant:string,height:number,price:number,bloomSeason:string)
  {
    localStorage.removeItem('plantId')
    localStorage.removeItem('plantName')
    localStorage.removeItem('typeOfPlant')
    localStorage.removeItem('height')
    localStorage.removeItem('price')
    localStorage.removeItem('bloomSeason')

   

    localStorage.setItem("plantId",plantId+'');
    localStorage.setItem("plantName",plantName);
    localStorage.setItem("typeOfPlant",typeOfPlant);
    localStorage.setItem("height",height+'');
    localStorage.setItem("price",price+'');
    localStorage.setItem("bloomSeason",bloomSeason);
    this.router.navigate(['plantDetail']);
    
    
  }
  showReview:boolean=false;
  goForReview(plant:number)
  {
    
    this.plantReviewService.getAllReviewsByPlantId(plant).subscribe(
      data=>{
        this.allReviews = data;
        this.showReview = true;
        let sum=0;

    for (var j = 0; j < this.allReviews.length; j++){
      sum += this.allReviews[j].starRating;
      
      

      }


      this.a=sum/this.allReviews.length;

      console.log(this.allReviews);
      console.log(this.a);
      }

    )
    
    let sum=0;
    for (var j = 0; j < this.allReviews.length; j++){
      sum += this.allReviews[j].starRating;
      
      
      }
      this.a=sum/this.allReviews.length;


}

}
