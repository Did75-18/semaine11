var choixOrdi = function(min, max) {
  return Math.random() * (max - min) + min;
}

var arrondiOrdi = Math.round(choixOrdi(0,101));// choix ordinateur arrondi
//alert(arrondiOrdi);

function jouer(){

var choixJoueur = prompt("Choisissez un nombre entre 0 et 100");

	if(choixJoueur<arrondiOrdi){
		texte.innerHTML = "Vous avez choisi le" + " " + "'"+ choixJoueur +"'" +" " +"et c'est trop petit :o(<br/> Essayez encore !!!";
		texte.classList.remove("red");

	}else if (choixJoueur>arrondiOrdi) {
		texte.innerHTML = "Vous avez choisi le" + " " + "'"+ choixJoueur +"'" +" " +"et c'est trop grand <br/> Essayez encore !!!!!!";
		texte.classList.remove("red");

	}else if (choixJoueur == arrondiOrdi){
		texte.innerHTML = "Bravo, vous avez choisi le" + " " + "'"+ choixJoueur +"'" +" " +"et vous avez gagné !!! <br/>:o)";
		texte.classList.add("red");

	}else{
		if(choixJoueur.typeof !== Number){
			texte.innerHTML = "Merci d'entrer un nombre !!";
			texte.classList.add("red");
		}
	}
};


choixJoueur.onclick =jouer;

