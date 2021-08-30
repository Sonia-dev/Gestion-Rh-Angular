import { Contrat } from 'src/app/Entities/contrat';
import { Departement } from './departement';
export class Employee {

    constructor(){}
    public id_empl:number;
    public nom_empl:string;
    public prenom_empl:string;
    public telephone:string;
    public date_embauche:string;
    public date_naissance:string;
    public diplome:string;
    public email:String;
    public lieu_naissance:String;
    public nbre_enfant:number;
    public nom_mere:String;
    public nom_pere:String;
    public situation:String;
    public departements:Departement;
    public contrat:Contrat;

    


}



