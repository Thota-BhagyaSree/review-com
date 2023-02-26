export class PlantReviewDTO {
    id:number;
    customerName:string;
    plantId : number;
    orderId : number;
    starRating:number;
    msg :string;

    constructor(id:number,customerName:string,plantId:number, orderId : number, starRating:number, msg :string ){
        this.id=id;
        this.customerName=customerName;
        this.plantId = plantId;
        this.orderId = orderId;
        this.starRating= starRating;
        this.msg = msg;

    }
    
}
