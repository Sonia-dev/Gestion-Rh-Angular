
import { Employee } from "./employee";

export class Contrat {

    constructor(){}

    public id:number;
    public type:string;
    public duree:string;
    public date_debut:Date;
    public date_fin:Date;
    public salaire:number;
    public fonction:string;
    public employee:Employee;
   
}
