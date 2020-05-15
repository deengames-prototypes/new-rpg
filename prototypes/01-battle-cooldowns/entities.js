Crafty.c('Player', {

    init: function() {
        this.requires("Actor, Text2");

        this.ap = 3;

        this.size(32, 32);
        this.click(() => {
            Crafty.forEach("Player", (p) => {
                p.color("white");
                p.isSelected = false;
            });
            
            this.color("blue");
            this.isSelected = true;
        });

        this.text(this.ap);
        this.size(32, 32);

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