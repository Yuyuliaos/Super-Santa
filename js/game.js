


const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,  // Ajustar al tamaño de la pantalla
    height: window.innerHeight, // Ajustar al tamaño de la pantalla
    scale: {
        mode: Phaser.Scale.FIT,  // El juego se ajusta a la pantalla
        autoCenter: Phaser.Scale.CENTER_BOTH  // Centra el juego en la pantalla
    },
    physics: {
        default: 'arcade',
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {

    this.load.image('mountains', '../img/game/montains.png'); 
    this.load.image('snow', '../img/game/snow.png'); 
    this.load.image('platform', '../img/game/platform.png'); 
    this.load.image('santa', '../img/game/santa.png'); 
}

function create() {

    this.add.image(config.width / 2, config.height / 2, 'mountains').setScale(1);

    const snow = this.add.image(config.width / 2, config.height / 2, 'snow');
    snow.setDisplaySize(config.width, config.height); 

    this.add.image(1200, 500, 'platform');

    const santa = this.add.image(config.width / 2.3, config.height * 0.5, 'santa'); 
    santa.setDisplaySize(config.width * 0.9, config.height * 0.9); 

    

}

function update() {

}
