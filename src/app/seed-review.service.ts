// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { SeedReview } from './seed-review';
// import { SeedReviewDTO } from './seed-review-dto';
// @Injectable({
//   providedIn: 'root'
// })
// export class SeedReviewService {
 
//   baseURL:string = 'http://localhost:6001';
//   RatingsByPlantIdEndPoint:string=this.baseURL+ '/nurseryreview/avgreview/plantId';

//   constructor(private http:HttpClient) { }
//   getRatingsBySeedName(filterReviewbyrating:number):Observable<SeedReviewDTO>
//   {
//    console.log("inside method 1 : Review added" +filterReviewbyrating);
//    return this.http.post<SeedReviewDTO>(`${this.RatingsByseedNameEndPoint}`,filterReviewbyrating);
//   }
 
// }
