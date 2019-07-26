// Vor dem Funktionsaufruf
let menu = { width: 200, height: 300, title: "Titel" };

// Erster Lauf
multiProperties(menu); 

if(menu.width === 400 && menu.height === 600 && menu.title == 'Titel') {
    console.log('first run ✓');
}

// Neues Property hinzugefügt
menu.newProperty = 10;

// Neues Property hinzugefügt
menu.justAnotherProperty = 'Hallo';

// Second run
multiProperties(menu);

if(menu.width === 800 && menu.height === 1200 && menu.newProperty === 20 && menu.title == 'Titel' && menu.justAnotherProperty === 'Hallo') {
    console.log('second run ✓');
}

// Nach dem 1. Funktionsaufruf
//menu = { width: 400, height: 600, title: "Titel" };
// Nach deem 2. Funktionsaufruf
//menu = { width: 800, height: 1200, newProperty = 20, title: "Titel", justAnotherProperty: "Hallo" };

// Your code here