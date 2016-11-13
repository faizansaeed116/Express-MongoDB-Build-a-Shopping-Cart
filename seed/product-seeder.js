var mongoose = require('mongoose');
var Product = require('../models/product');

mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Gothic is a single-player action role-playing video game for Windows developed by the German company Piranha Bytes...',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/20/StarCraft_II_-_Box_Art.jpg',
        title: 'StarCraft II Video Game',
        description: 'StarCraft II: Wings of Liberty is a military science fiction real-time strategy video game developed and published by Blizzard Entertainment.',
        price: 20
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/28/Doom_Cover.jpg',
        title: 'Doom Video Game',
        description: 'Doom (stylized as DOOM) is a first-person shooter video game developed by id Software and published by Bethesda Softworks. ',
        price: 25
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
        title: 'Grand Theft Auto V Video Game',
        description: 'Grand Theft Auto V is an open world action-adventure video game developed by Rockstar North and published by Rockstar Games.',
        price: 30
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/d/da/Super_Mario_Maker_Artwork.jpg',
        title: 'Super Mario Maker Video Game',
        description: 'Super Mario Maker is a side-scrolling platform video game and game creation system developed and published by Nintendo for the Wii U game console, which released worldwide in September 2015.',
        price: 40
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Mortal_Kombat_X_Cover_Art.png',
        title: 'Mortal Kombat X Video Game',
        description: 'Mortal Kombat X is a fighting video game developed by NetherRealm Studios and published by Warner Bros. Interactive Entertainment.',
        price: 40
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
