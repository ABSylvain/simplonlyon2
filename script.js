let fichePerso = document.getElementById('fichePerso');
let contenu = document.getElementById('contenu');

fichePerso.addEventListener("mouseenter", function() { moveHover() });
fichePerso.addEventListener("mouseout", function() { moveOut() });
fichePerso.addEventListener("click", function() { click() });

function moveHover() {
    fichePerso.style.right = "50%";
}

function moveOut() {
    fichePerso.style.right = "80%";
}

function click() {
    if (fichePerso.style.right == "50%") {
        fichePerso.style.right = "0%";
    } else if (fichePerso.style.right == "0%") {
        fichePerso.style.right = "50%";
    }
}
/*function click() {
    fichePerso.style.right = "0%";
}*/