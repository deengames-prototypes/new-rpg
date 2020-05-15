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

        this.keyPress(Crafty.keys.LEFT_ARROW, () => this.moveIfSelected(-1, 0));
        this.keyPress(Crafty.keys.RIGHT_ARROW, () => this.moveIfSelected(1, 0));
        this.keyPress(Crafty.keys.UP_ARROW, () => this.moveIfSelected(0, -1));
        this.keyPress(Crafty.keys.DOWN_ARROW, () => this.moveIfSelected(0, 1));

        return this;
    },

    moveIfSelected: function(dx, dy) {
        if (this.isSelected)
        {
            this.tileX += dx;
            this.tileY += dy;
            this.updateDisplay();
        }
    },

    initialize: function(x, y) {
        this.tileX = x;
        this.tileY = y;
        this.updateDisplay();
        this.color("white");
        return this;
    },

    updateDisplay: function() {
        this.move(this.tileX * 32, this.tileY * 32);
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