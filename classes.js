//to create a object from class : Syntax :- let object = new  className();

class toyotaCar {
    start() {
        console.log("car started");

    }

    stop() {
        console.log("car stopped");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new toyotaCar(); //fortuner is an object of toyotaCar class
fortuner.start();
fortuner.stop();
fortuner.setBrand("Fortuner");