let Chance = 0
input.onGesture(Gesture.Shake, function () {
    Chance = randint(0, 2)
    if (Chance == 0) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Chance == 1) {
        basic.showLeds(`
            # # # # .
            # . . # #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
