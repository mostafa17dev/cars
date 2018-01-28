export class AddCar  {
    $key: string;
    file: File;
    url: string;
    progress: number;
    brand: string;
    country: string;
    year: number;
    name: string;
    createdOn: Date = new Date();

    constructor(file: File, carObject){
        this.file = file;
        this.brand = carObject.brand;
        this.country = carObject.country;
        this.year = carObject.year;
    }
}