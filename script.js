const knightForm = document.getElementById('knight-form'); 

const fighterContainer = document.getElementById('fighter-container');

const knightFormClass = document.getElementById('fighter-class');
const knightFormName = document.getElementById('knight-name');
const knightFormWeapon = document.getElementById('fighter-weapon');

class Knight {
    constructor(name,weapon,fighterClass) {
        this.name = name;
        this.weapon = weapon;
        this.fighterClass = fighterClass;
        this.appearance = fighterClass === 'Knight' ? './sprites/knight.jpeg' : './sprites/mage.jpeg';
        this.health = 100;
    }
    attack() {
        // return `Attacked with ${this.weapon}`;
        // Figure out where to access the object calling this so you can get properties.
        return console.log(`${this.name} attacked with ${this.weapon}`);
    }
}

async function getAllCharacters() {
    const charactersList = [];
    const allCharacters = await fetch('http://localhost:3000/characters').then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

   await allCharacters.forEach((character) => {
        charactersList.push(character);
        console.log(`${character.name} who uses ${character.weapon}`);
    })
  return allCharacters;
}

function getValues(e) {
    e.preventDefault();
    let knightName = knightFormName.value;
    let knightWeapon = knightFormWeapon.value;
    let knightClass = knightFormClass.value;
    // console.log('knightName',knightName);
    // console.log('knightWeapon',knightWeapon);
    createKnight(knightName,knightWeapon,knightClass);
}

function createKnight(name,weapon,fighterClass) {
    
    window.alert(`New Knight: ${name} with a ${weapon}`);
    const newKnight = new Knight(name,weapon,fighterClass);

    buildKnight(newKnight);
}

function buildKnight(knight) {
    let knightAppearance = document.createElement('img');
    let knightAttack = document.createElement('button');
    let knightStatsContainer = document.createElement('div');
    let knightStatsName = document.createElement('h3');
    let knightStatsClass = document.createElement('p');
    let knightStatsWeapon = document.createElement('p');
    let knightStatsHealth = document.createElement('p');

    knightStatsContainer.classList.add('knight-stats-container');

    knightStatsClass.textContent = `Class: ${knight.fighterClass}`;
    knightStatsWeapon.textContent = `Weapon: ${knight.weapon}`;
    knightStatsHealth.textContent = `Health: ${knight.health}`;
    knightStatsName.textContent = knight.name;

    knightStatsContainer.append(knightStatsName,knightStatsClass,knightStatsWeapon,knightStatsHealth);

    knightAttack.textContent = 'Attack';
    knightAttack.addEventListener('click',knight.attack);

    knightAppearance.src = knight.appearance;
    knightAppearance.width = 50;

    fighterContainer.append(knightAppearance);
    fighterContainer.append(knightAttack);
    fighterContainer.append(knightStatsContainer);

    sendKnightData(knight.name,knight.weapon);
}

async function sendKnightData(knightName,knightWeapon) {
    // fetch('http://localhost:3000/characters',{
    //     method: "POST",
    //     mode: "no-cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         name: knightName,
    //         weapon: knightWeapon,
    //     }),
    // }).then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));

//     fetch('http://localhost:3000/characters').then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
    

}

knightForm.addEventListener('submit',getValues);
getAllCharacters();