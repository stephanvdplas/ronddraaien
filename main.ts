let lichtje = game.createSprite(0, 0)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        lichtje.move(1)
        basic.pause(25)
    }
    lichtje.turn(Direction.Right, 90)
})
