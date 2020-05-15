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
                var t = Crafty.e("Tile").initialize(x, y);
            }
        }
    }
}
