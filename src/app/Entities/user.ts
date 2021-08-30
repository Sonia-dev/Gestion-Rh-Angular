import { Autorisation } from './autorisation';
import { Conge } from './conge';
export class User {
    constructor(){}


    public  id:number;
   public username:number;
   public email:string;
   public conges:Conge[];
   public aut:Autorisation[];
}
