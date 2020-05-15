Crafty.c('Player', {

    init: function() {
        this.requires("Actor");
        return this;
    },

    initialize: function(x, y) {
        this.tileX = x;
        this.tileY = y;
        this.move(this.tileX * 32, this.tileY * 32);
        this.color("white");
        return this;
    }
});

Crafty.c('Monster', {

    init: function() {
        this.requires("Actor");
        return this;
    },

    initialize: function(x, y) {
        this.tileX = x;
        this.tileY = y;
        this.move(this.tileX * 32, this.tileY * 32);
        this.color("red");
        return this;
    }
});