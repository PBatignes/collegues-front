export class Collegue {
    matricule:string;
    nom:string;
    prenom:string;
    email:string;
    dateDeNaissance:Date;
    photoUrl:string;

    constructor(matricule:string, nom:string, prenom:string, email:string, dateDeNaissance:Date, photoUrl:string) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.dateDeNaissance = dateDeNaissance;
        this.photoUrl = photoUrl;
    }
}