
function bonjour(){


document.getElementById("reponseBonjour").innerHTML = "Bonjour !";

}

const direBonjour =document.querySelector("#direBonjour");

direBonjour.addEventListener("click", () => {

    document.getElementById("reponseBonjour").innerHTML = "Bonjour !";

})

// const monElement = document.querySelector("#direBonjour");

// monElement.value =" Dire au revoir";

function exoGuide() {
    let userFirstName = document.getElementById("userFirstName").value;
    let userName = document.getElementById("userName").value;
    const retourExoGuide = document.getElementById("retourExoGuide")
    retourExoGuide.innerHTML = "Bonjour " + userFirstName + " " + userName + " !";
    retourExoGuide.classList.add("exoGuide");

}

function concatenation() {
    let prenom=prompt("veuillez entrez votre prénom");
    let nom=prompt("Veuillez entrez votre nom");
    console.log(typeof prenom);
    if ((prenom=="") & (nom==""))  {
        alert("bonjour Mr anonyme !\nComment allez-vous ?");
    }
    else {
    alert("bonjour " +prenom+" "+nom+" !\nComment allez-vous ?");
    }
}

function majeur() {
    let age=document.getElementById("age").value;
    if (age <18) {
        retourAge.classList.remove("majeur");
        retourAge.classList.add("mineur");
        retourAge.innerHTML= "vous êtes mineur...";
    }
    else {
        retourAge.classList.remove("mineur");
        retourAge.classList.add("majeur");
        retourAge.innerHTML= "vous êtes majeur...";
    }

}

/* <input type="text" id="prix" placeholder="entrez le prix">
<input type="text" id="quantite" placeholder="entrez la quantité">
<input type="button" value="Calculer le total" onclick="cprix()"> */

function cprix() {
    let prix=document.getElementById("prix").value;
    let quantite=document.getElementById("quantite").value;
    let tva=document.getElementById("tva").value;
    let total= prix * quantite ;
    let mtva= (total * (tva/100));
    let ptvac = total + mtva;

    document.getElementById("rprix").innerHTML = " le total tva comprise est de  " + ptvac;
    
}



/* <input type="text" id="rayon" placeholder="entrez le rayon : ">
<input type="button" value="Calculer le volume de la sphère" onclick="vsphere()">
<p id="rsphere"></p> */

function vsphere() {
    let rayon=document.getElementById("rayon").value;
    calcul = ((4*Math.PI ) * (Math.pow(rayon,3))/3);
    let carrondi = Math.round(calcul * 100) / 100; // arrondir deux chiffres après la virgules
    document.getElementById("rsphere").innerHTML = " le volume de la sphère est de   " + carrondi;

}


function condition1() {
    let age1=document.getElementById("naissanceUser").value;
    let ladate=new Date();
    let annee=ladate.getFullYear();

    if (((annee - age1) > 35) || ((annee-age1) <18)) { 

        document.getElementById("rcondition").innerHTML = "Vous ne rentez pas dans les conditions";
        
    } 
    else 
    document.getElementById("rcondition").innerHTML = "vous rentrez dans les conditions <a href='https://www.interface3namur.be/'>Remplir le formulaire</a>";
   
}



function bissec() {
    let anneBissectile = document.getElementById("anneB").value;
    if (((anneBissectile % 4) ==0) && ((anneBissectile % 100) !=0)) {
        document.getElementById("rbissec").innerHTML = "Année bissectile";
        //année bissectile
    }
    else 
    if (((anneBissectile % 4) ==0) && ((anneBissectile % 100) ==0) && ((anneBissectile % 400 ==0))) {
        document.getElementById("rbissec").innerHTML = "Année bissectile";
        //année bissectiole
    }

    else {
        document.getElementById("rbissec").innerHTML = "Année non bissectile";
        //pas une année bissectile
    }


}

// <input type="text" id="psw"  placeholder="entrez votre mot de passe  : ">
//             <input type="text" id="psw2"  placeholder="répétez votre mot de passe  : ">
//             <input type="button" value="Vérifier votre mot de passe!!!" onclick="passe()">
//             <p id="rpasse"></p>


function passe() {
    document.getElementById("psw2").classList.remove("faux");
    document.getElementById("rpasse").innerHTML ="";
    let passe1=document.getElementById("psw").value;
    let passe2=document.getElementById("psw2").value;
    if (passe1 != passe2) {
        document.getElementById("psw2").classList.add("faux");
        document.getElementById("rpasse").innerHTML ="Vos mots de passe ne sont pas concordants !!!!";

    }
}

function condSwitch() {
    let nbreUser =document.getElementById("condSwitch").value;

    switch(nbreUser){
        case "1":
        case "i":
            alert("vous avez appuyez sur 1");
            break;
        case "2":
            alert("Vous appuyez sur 2");
            break;
        case "3":
            alert("Vous avez appuyez sur 3");
            break;
        case "4":
            alert("Vous avez appuyez sur 4");
            break;
        default:
            alert("Entre 1 et 4 on t'a dit !");
    }
}

function entrez() {
    
    let rsex = document.querySelector('input[name="sexe"]:checked').value;
    let agem = document.getElementById("agesexe").value;
    if ((((rsex=="Femme") || (rsex=="Non Binaire")) && (agem >= 18))
    || ((rsex =="Homme") && ((agem<25 && agem>17) || (agem>55))))
        {
        //entrée gratuite
        document.getElementById("entree").innerHTML ="Bravo, vous pouvez entrer et bénéficiez de l'entrée gratuite ...";
    }
    else if ((rsex=="Homme") &&  ((agem>24) && (agem<56))) {
        //entrée payante
        document.getElementById("entree").innerHTML ="Bravo, vous pouvez entrer mais vous devez payer ...";
    }
    else {
        //pas le droit d'entrer.
        document.getElementById("entree").innerHTML ="Malheureusement, vous ne pouvez pas entrer ...";
    }

    }



