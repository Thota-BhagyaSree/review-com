import { Component } from '@angular/core';
import { Plant } from '../plant';

import { PlantOperationService } from '../plant-operation.service';
@Component({
  selector: 'app-launch-new-plant',
  templateUrl: './launch-new-plant.component.html',
  styleUrls: ['./launch-new-plant.component.css']
})
export class LaunchNewPlantComponent {
  model:Plant = new Plant(0,'',0,'','','',0,0,0,'');
  constructor(private plantService:PlantOperationService){}
  ngOnInit(): void {
    
  }
  onSubmit()
  {
    console.log(this.model);
    this.doSaveToServer();
    
  }

  doSaveToServer()
  {
    this.plantService.addPlant(this.model).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
    
  }

}
