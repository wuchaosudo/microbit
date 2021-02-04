input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
basic.showIcon(IconNames.Target)
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    while (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Sad)
    }
    while (input.isGesture(Gesture.LogoUp)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    while (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    while (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    while (input.isGesture(Gesture.TiltRight)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
