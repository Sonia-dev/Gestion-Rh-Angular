import { User } from './user';
import { Employee } from "./employee";

export class Conge {

    constructor(){}

    public id:number;
    public date_debut:Date;
    public date_fin:Date;
    public motif:string;
   public etat:string;
    public user:User;
}
