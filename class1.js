class ToyotaCar {
    constructor ToyotaCar(brand,mileage){
        console.log("Creating New Object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar("fortuner",10);
console.log(fortuner);