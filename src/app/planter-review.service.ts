import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlanterReview } from './planter-review';
import { PlanterReviewDTO } from './planter-review-dto';
import { PlantReview } from './plant-review';
@Injectable({
  providedIn: 'root'
})
export class PlanterReviewService {


  baseURL:string = 'http://localhost:6001';
  submitReviewEndPoint:string=this.baseURL+'/nurseryreview/add';
  // ReviewByPlanterIdEndPoint:string=this.baseURL+'/nurseryreview/review/planterId';
   getByReviewEndPoint: string=this.baseURL+ '/nurseryreview/listOfReviews';
   RatingsByPlantIdEndPoint:string=this.baseURL+'/nurseryreview/avgreview/plantId';
 
  
 
  constructor(private http:HttpClient) {
    

   }

  //  getReviewByPlanterId(PlanterId:number):Observable<PlanterReviewDTO[]>{
  //   console.log("inside method 1" +this.ReviewByPlanterIdEndPoint);
  //   this.ReviewByPlanterIdEndPoint= this.ReviewByPlanterIdEndPoint+'/'+PlanterId;
  //   console.log("after getting review 2"+ this.ReviewByPlanterIdEndPoint);

  //   return this.http.get<PlanterReviewDTO[]>(`${this.ReviewByPlanterIdEndPoint}`);
  //  }


   getRatingsByPlanterId(filterReviewbyrating:number):Observable<PlantReview>
    {
     console.log("inside method 1 : Review added" +filterReviewbyrating);
     
     return this.http.post<PlantReview>(`${this.RatingsByPlantIdEndPoint}`,filterReviewbyrating);
    }
   
   
   submitPlanterReview(PlanterReview: PlanterReview):Observable<PlanterReview[]> {

    console.log("inside method 1 : Review added" +PlanterReview);
    
    return this.http.post<PlanterReview[]>(`${this.submitReviewEndPoint}`,PlanterReview);
    
  }
  getByPlanterReview(PlanterReview: PlanterReview):Observable<PlanterReviewDTO[]> {

    console.log("inside method 1 : Review added" +PlanterReview);
    
    return this.http.post<PlanterReviewDTO[]>(`${this.getByReviewEndPoint}`,PlanterReview);
    
  }
  
}
