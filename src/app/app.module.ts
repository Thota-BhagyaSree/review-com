import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantReviewComponent } from './plant-review/plant-review.component';
import { PlanterReviewComponent } from './planter-review/planter-review.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { ReviewsOnPlantidComponent } from './reviews-on-plantid/reviews-on-plantid.component';
import { LaunchNewSeedsComponent } from './launch-new-seeds/launch-new-seeds.component';
import { SeedDetailsComponent } from './seed-details/seed-details.component';
import { SeedListComponent } from './seed-list/seed-list.component';
import { SeedFilterationsComponent } from './seed-filterations/seed-filterations.component';
import { ViewSeedDetailsComponent } from './view-seed-details/view-seed-details.component';
import { LaunchNewPlantComponent } from './launch-new-plant/launch-new-plant.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { PlantFilterationsComponent } from './plant-filterations/plant-filterations.component';
import { PlantListComponent } from './plant-list/plant-list.component';

const allLinks:Routes=[
  {path:'plant-review',component:PlantReviewComponent},
  {path:'planter-review',component:PlanterReviewComponent},
  {path:'allReviews',component:AllReviewsComponent},
  {path:'reviewListByPlantId',component:ReviewsOnPlantidComponent},
  { path: 'launchseeds', component: LaunchNewSeedsComponent },
  { path: 'viewallseeds', component: ViewSeedDetailsComponent},
  { path: 'seedsInDB', component: SeedListComponent },
  { path: 'seedDetails', component: SeedDetailsComponent },
  { path: 'filterations', component: SeedFilterationsComponent },
  {path:'plantsindb',component:PlantListComponent},
  {path:'LaunchPlants',component:LaunchNewPlantComponent},
  {path:'plantDetail',component:PlantDetailsComponent},
  {path:'plantfiterations',component:PlantFilterationsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PlantReviewComponent,
    PlanterReviewComponent,
    AllReviewsComponent,
    ReviewsOnPlantidComponent,
    LaunchNewSeedsComponent,
    SeedDetailsComponent,
    SeedListComponent,
    SeedFilterationsComponent,
    LaunchNewPlantComponent,
    PlantDetailsComponent,
    PlantFilterationsComponent,
    PlantListComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
