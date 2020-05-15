Crafty.c('Tile', {

    init: function() {
        this.requires("Actor");
        this.size(31, 31);
        return this;
    },

    initialize: function(x, y) {
        this.tileX = x;
        this.tileY = y;
        this.move(this.tileX * 32, this.tileY * 32);
        this.color("#008800");
        return this;
    }
});