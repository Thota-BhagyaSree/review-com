import { Component } from '@angular/core';
import { PlantDto } from '../plant-dto';
import { PlantOperationService } from '../plant-operation.service';
@Component({
  selector: 'app-plant-filterations',
  templateUrl: './plant-filterations.component.html',
  styleUrls: ['./plant-filterations.component.css']
})
export class PlantFilterationsComponent {
  allPlants:PlantDto[]=[];

  constructor(private plantService:PlantOperationService)
  {

  }

  // getPlantId(plantId:string){
  //   this.plantService.getDetailsByPlantId(parseInt(plantId)).subscribe (
  //     data=>{
  //       this.allPlants = data;
  //   },
  //   err=>{
  //     console.log("Error "+err);
      
  //   }

  //   );
  // }

  getTypeOfPlant(typeOfPlant:string){

    this.plantService.getDetailsByTypeOfPlant(typeOfPlant).subscribe (
      data=>{
        this.allPlants = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );


}
}
