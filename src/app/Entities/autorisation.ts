import { User } from './user';
export class Autorisation {

	constructor(){}

	public id:number;
	public motif:string;
	public debut:Date;
	public fin:Date;
	public etat:string;
	public user_aut:User;
	public files:File;
}
