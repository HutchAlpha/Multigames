// Appliquer le style CSS au body
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.padding = '0';
document.body.style.margin = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.background = '#84B4BF';
document.body.style.margin = '5px';

// Appliquer le style CSS aux éléments de texte
var images = document.getElementsByClassName('image');
for (var i = 0; i < images.length; i++) {
    images[i].style.border = '2px solid #888'; 
    images[i].style.borderRadius = '10px'; 
    images[i].style.width = '100px';
    images[i].style.height = '100px';
}

var paragraphs = document.getElementsByTagName('p');
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.padding = '8px 0';
    paragraphs[i].style.color = '#1B365C';
    paragraphs[i].style.fontFamily = 'Verdana';
    paragraphs[i].style.fontSize = '14px';
    paragraphs[i].style.fontWeight = 'normal';
    paragraphs[i].style.fontStyle = 'normal';
}

var zoneTexte = document.getElementsByClassName('zoneTexte');
for (var i = 0; i < zoneTexte.length; i++) {
    zoneTexte[i].style.background = '#9DC9F5';
    zoneTexte[i].style.border = 'solid';
    zoneTexte[i].style.borderRadius = '10px';
    zoneTexte[i].style.fontSize = '16px';
    zoneTexte[i].style.display = 'none';
    
}

// Appliquer le style CSS aux titres
var h1 = document.getElementsByTagName('h1');
for (var i = 0; i < h1.length; i++) {
    h1[i].style.fontSize = '40px';
    h1[i].style.color = '#164659';
}

var h3 = document.getElementsByTagName('h3');
for (var i = 0; i < h3.length; i++) {
    h3[i].style.fontSize = '20px';
    h3[i].style.color = 'black';
}
var minesSpan = document.getElementById('mines');
minesSpan.style.display = 'block';
minesSpan.style.textAlign = 'center';
minesSpan.style.padding = '10px'; 
minesSpan.style.backgroundColor = '#F2F2F2'; 
minesSpan.style.borderRadius = '5px';  
minesSpan.style.border = '1px solid #CCCCCC'; 
minesSpan.style.fontFamily = 'Arial, sans-serif';
minesSpan.style.fontSize = '18px'; 
minesSpan.style.color = '#333333';  


// Appliquer le style CSS à la classe .plateau
var plateau = document.getElementsByClassName('plateau');
for (var i = 0; i < plateau.length; i++) {
    plateau[i].style.display = 'flex';
    plateau[i].style.justifyContent = 'center';
    plateau[i].style.alignItems = 'center';
    plateau[i].style.borderRadius = '10px';
    plateau[i].style.padding = '10px';
    plateau[i].style.border = 'solid';
    plateau[i].style.backgroundColor = 'white';
}

var score = document.getElementsByClassName('score');
for (var i = 0; i < score.length; i++) {
    score[i].style.display = 'flex';
    score[i].style.flexDirection = 'column';
    score[i].style.justifyContent = 'center';
    score[i].style.alignItems = 'center';
    score[i].style.borderRadius = '10px';
    score[i].style.padding = '10px';
    score[i].style.backgroundColor = 'white';
}

var menus = document.getElementsByClassName('menus');
for (var i = 0; i < menus.length; i++) {
    menus[i].style.display = 'flex';
    menus[i].style.justifyContent = 'center';
    menus[i].style.alignItems = 'center';
}

// Appliquer le style CSS aux classes de menu
var menuFacile = document.getElementsByClassName('menuFacile');
for (var i = 0; i < menuFacile.length; i++) {
    menuFacile[i].style.backgroundColor = 'green';
}

var menuNormal = document.getElementsByClassName('menuNormal');
for (var i = 0; i < menuNormal.length; i++) {
    menuNormal[i].style.backgroundColor = 'orange';
}

var menuDifficile = document.getElementsByClassName('menuDifficile');
for (var i = 0; i < menuDifficile.length; i++) {
    menuDifficile[i].style.backgroundColor = 'red';
}

var menuPerso = document.getElementsByClassName('menuPerso');
for (var i = 0; i < menuPerso.length; i++) {
    menuPerso[i].style.backgroundColor = 'gray';
}

var menusCenter = document.getElementsByClassName('center');
for (var i = 0; i < menusCenter.length; i++) {
    menusCenter[i].style.textAlign = 'center';
}
