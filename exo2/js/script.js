var pierre = document.getElementById("Pierre");
var ciseaux = document.getElementById("Ciseaux");
var feuille = document.getElementById("Feuille");
var choixUtilisateur;
var choixOrdinateur = Math.random();
var go = document.getElementById("go");
var txtUtilisateur = document.getElementById("txtUtilisateur");
var txtOrdi = document.getElementById("txtOrdi");
var txtResult = document.getElementById("txtResult");
var gainUtilisateur = document.getElementById("gainUtilisateur");
var gainOrdi = document.getElementById("gainOrdi");
var pointUtilisateur = 0;
var pointOrdi = 0;
var pourcentage = document.getElementById("pourcentage");



function choixUtilisateurPierre(){
	choixUtilisateur = "Pierre";
	txtUtilisateur.innerHTML = "Vous avez choisi : <br/> " + " " + "'"+ choixUtilisateur +"'";
    choixOrdinateur = Math.random();
    txtResult.innerHTML ="Résultat :";
    txtOrdi.innerHTML = "Choix de l'ordinateur :";
};

function choixUtilisateurCiseaux(){
	choixUtilisateur = "Ciseaux";
	txtUtilisateur.innerHTML = "Vous avez choisi : <br/> " + " " + "'"+ choixUtilisateur +"'";
    choixOrdinateur = Math.random();
    txtResult.innerHTML ="Résultat :";
    txtOrdi.innerHTML = "Choix de l'ordinateur :";
};

function choixUtilisateurFeuille(){
	choixUtilisateur = "Feuille";
	txtUtilisateur.innerHTML = "Vous avez choisi : <br/> " + " " + "'"+ choixUtilisateur +"'";
    choixOrdinateur = Math.random();
    txtResult.innerHTML ="Résultat :";
    txtOrdi.innerHTML = "Choix de l'ordinateur :";
};
    

function comparer(){
    if(choixUtilisateur === "Pierre"){
        if(choixOrdinateur === "Ciseaux"){
            return txtResult.innerHTML = "'La pierre gagne !!!'";
        }else{
            return txtResult.innerHTML = "'La feuille gagne !!!'";
        }
    }
    else if( choixUtilisateur === "Ciseaux"){
        if(choixOrdinateur === "Pierre"){
            return txtResult.innerHTML = "'La pierre gagne !!!'";
        }else{
            return txtResult.innerHTML = " 'Les ciseaux gagnent !!!' ";
        }
    }
    else if(choixUtilisateur === "Feuille"){
        if(choixOrdinateur === "Pierre"){
            return txtResult.innerHTML = "'La feuille gagne !!!'";
        }else{
            return txtResult.innerHTML = "'Les ciseaux gagnent !!!'";
        }
    }
};

function compter(){
   
    if(choixUtilisateur === choixOrdinateur){

       txtResult.innerHTML = "'Egalité parfaite ! aucun point attribué....'";

    }else if(choixUtilisateur === "Pierre"){
        if(choixOrdinateur === "Ciseaux"){
            pointUtilisateur += 1;
            gainUtilisateur.innerHTML = pointUtilisateur;
        }else{
            pointOrdi += 1;
            gainOrdi.innerHTML = pointOrdi;
        }
    }
    else if( choixUtilisateur === "Ciseaux"){
        if(choixOrdinateur === "Pierre"){
            pointOrdi += 1;
            gainOrdi.innerHTML = pointOrdi;
        }else{
            pointUtilisateur += 1;
            gainUtilisateur.innerHTML = pointUtilisateur;
        }
    }
    else if(choixUtilisateur === "Feuille"){
        if(choixOrdinateur === "Pierre"){
            pointUtilisateur += 1;
            gainUtilisateur.innerHTML = pointUtilisateur;
        }else{
            pointOrdi += 1;
            gainOrdi.innerHTML = pointOrdi;
        }
    }
};

function calculer(){
    var nbjeu = pointOrdi + pointUtilisateur;
    var Pourcent = Math.round((pointUtilisateur / nbjeu) * 100);
   // if (Pourcent === NaN) {
        // pourcentage.innerHTML = "Pas de point pour l'instant";   
   // }else{
        pourcentage.innerHTML = Pourcent + " " + "%";
         
    //}

    //console.log(nbjeu);
    //console.log(Pourcent);

};


function jouer(){
    if (choixOrdinateur <= 0.33333) {
        choixOrdinateur = "Pierre";
    } else if(choixOrdinateur <= 0.66666) {
        choixOrdinateur = "Ciseaux";
    } else {
        choixOrdinateur = "Feuille";
    }
    
    txtOrdi.innerHTML = "L' ordinateur à choisi : <br/>  " + " " + "'"+ choixOrdinateur +"'";
    txtResult.innerHTML = comparer();

    compter();
    calculer();
  
};


pierre.onclick = choixUtilisateurPierre;
ciseaux.onclick = choixUtilisateurCiseaux;
feuille.onclick = choixUtilisateurFeuille;
go.onclick = jouer;

gainUtilisateur.innerHTML = pointUtilisateur;
gainOrdi.innerHTML = pointOrdi;