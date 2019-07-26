
export class Car  { // export the class, function 

    //all properties in vehicle comes accessbile in car
    
        constructor(id) {
            this.id = id;
        }
    
        identify() { 
            return `Car ID: ${this.id}`;
        }

    }