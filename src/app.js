const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

// Player Class
class Player {
  constructor(id, name, type) {
    // Progression 1: Create member variables and assign values
    this.name = name;
    this.id = id;
    this.wins = 0;

    this.image = 'images/super-' + (id + 1) + '.png';

    this.type = type;

    this.selected = false;

    this.strength = this.getRandomStrength();
  }

  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here
    let player1 = document.createElement('div');

    player1.classList.add('player');

    player1.setAttribute('data-id', this.id);

    if (this.selected == true) {
      player1.classList.add('selected');
    }

    let image = document.createElement('img');
    image.setAttribute('src', this.image);

    let name = document.createElement('div');
    name.textContent = this.name;

    var strength = document.createElement('div');
    strength.textContent = this.strength;

    strength.className = 'strength';

    player1.append(image, name, strength);

    return player1;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here

    this.players = players.map((player, i) => {
      let type;
      if (i % 2 == 0) {
        type = 'hero';
      } else {
        type = 'villain';
      }
      return new Player(i, player, type);
    });
  }

  // Display players in HTML
  viewPlayers = () => {
    let PlayersTeam = document.getElementById('heroes');
    PlayersTeam.textContent = '';
    let PlayerFragement = this.buildPlayers('hero');
    PlayersTeam.append(PlayerFragement);

    PlayersTeam = document.getElementById('villains');
    PlayersTeam.textContent = '';
    PlayerFragement = this.buildPlayers('villain');
    PlayersTeam.append(PlayerFragement);
  };

  // Build players fragement
  buildPlayers = (type) => {
    let PlayerFragement = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => PlayerFragement.append(player.view()));
    return PlayerFragement;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
