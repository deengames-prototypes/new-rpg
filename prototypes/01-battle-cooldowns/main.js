Game = {
    // This defines our grid's size and the size of each of its tiles
    view: {
        width: 960,
        height: 576,
    },

    start: function() {
        Crafty.init(Game.view.width, Game.view.height);
        Crafty.background('#004400');

        for (var y = 0; y < Game.view.height / 32; y++)
        {
            for (var x = 0; x < Game.view.width / 32; x++)
            {
                Crafty.e("Tile").initialize(x, y);
            }
        }

        Crafty.e("Player").initialize(5, 9);
        Crafty.e("Player").initialize(4, 8);
        Crafty.e("Player").initialize(4, 10);

        Crafty.e("Monster").initialize(25, 9);
        Crafty.e("Monster").initialize(27, 9);
        Crafty.e("Monster").initialize(25, 11);
        Crafty.e("Monster").initialize(27, 11);
    }
}
