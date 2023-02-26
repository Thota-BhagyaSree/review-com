import { Component } from '@angular/core';
import { SeedOperationService } from '../seed-operation.service';
import { Seed } from '../seed';
@Component({
  selector: 'app-launch-new-seeds',
  templateUrl: './launch-new-seeds.component.html',
  styleUrls: ['./launch-new-seeds.component.css']
})
export class LaunchNewSeedsComponent {
  numberOfStars = [1,2,3,4,5];
  s: Seed = new Seed(0,'','','',0,0,'','',0,0,0);

  constructor(private seedService:SeedOperationService)
  {
 
  }
  ngOnInit(): void {
    
  }
  onSubmit()
  {
    console.log(this.s);
    this.doSaveTOServer();
  }


  doSaveTOServer()
  {
    this.seedService.addSeed(this.s).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }

  
}
