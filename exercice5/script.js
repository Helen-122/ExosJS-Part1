
//Cette foction permet d'afficher le resultat de la multiplication des valeurs des 2 imputs.

function displayResult() {
  var errorMessage = 'Veuillez remplir tous les champs';
  //On stocke la valeur de nos imputs dans une variable

  var firstNumber = document.getElementById('first').value;

  var secondNumber = document.getElementById('second').value;
//Cette variable contient le resultat de la multiplicatation des 2 autres variables
  var result = firstNumber * secondNumber;

  //On verifie l'existence de nos variables. Si elles existent on l'affiche dans une modale
  if (firstNumber && secondNumber) {
    //les variables existent, leur contenus apparaissent dans une modale
    alert(result);
    //Sinon, on affiche un message d'erreur
  }else {
    alert(errorMessage);
  }

}
