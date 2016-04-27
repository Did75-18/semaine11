var pierre = document.getElementById("Pierre");
var ciseaux = document.getElementById("Ciseaux");
var feuille = document.getElementById("Feuille");
var choixUtilisateur;
var choixOrdinateur = Math.random();
var go = document.getElementById("go");
var txtUtilisateur = document.getElementById("txtUtilisateur");
var txtOrdi = document.getElementById("txtOrdi");
var txtResult = document.getElementById("txtResult");


function choixUtilisateurPierre(){
	choixUtilisateur = "Pierre";
	txtUtilisateur.innerHTML = "Vous avez choisi : <br/> " + " " + "'"+ choixUtilisateur +"'";
};

function choixUtilisateurCiseaux(){
	choixUtilisateur = "Ciseaux";
	txtUtilisateur.innerHTML = "Vous avez choisi : <br/> " + " " + "'"+ choixUtilisateur +"'";
};

function choixUtilisateurFeuille(){
	choixUtilisateur = "Feuille";
	txtUtilisateur.innerHTML = "Vous avez choisi : <br/> " + " " + "'"+ choixUtilisateur +"'";
};





function comparer(){
   
    if(choixUtilisateur === choixOrdinateur){

        return "'Egalité !'";

    }else if(choixUtilisateur === "Pierre"){

        if(choixOrdinateur === "Ciseaux"){

            return "'Pierre gagne !!!'";

        }else{

            return "'Feuille gagne !!!'";
        }
    }

    else if( choixUtilisateur === "Ciseaux"){

        if(choixOrdinateur === "Pierre"){

            return "'Pierre gagne !!!'";

        }else{

            return " 'Feuille gagne !!!' ";
        }
    }

    else if(choixUtilisateur === "Feuille"){

        if(choixOrdinateur === "Pierre"){

            return "'Feuille gagne !!!'";

        }else{

            return "'Ciseaux gagne !!!'";
        }
    }

};

function choixOrdi(){
    
    if (choixOrdinateur <= 0.33333) {

        choixOrdinateur = "Pierre";

    } else if(choixOrdinateur <= 0.66666) {

        choixOrdinateur = "Ciseaux";

    } else {

        choixOrdinateur = "Feuille";
    }
    
    txtOrdi.innerHTML = "L' ordinateur à choisi : <br/>  " + " " + "'"+ choixOrdinateur +"'";

    txtResult.innerHTML = comparer();
  
};

pierre.onclick = choixUtilisateurPierre;
ciseaux.onclick = choixUtilisateurCiseaux;
feuille.onclick = choixUtilisateurFeuille;
go.onclick = choixOrdi;


