// Slider Tests
// Type: functional
//  position(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
input.onButtonPressed(Button.A, function () {
    basic.showNumber((opensciedModules.slider1.position()))
    basic.pause(1000)
    if (
        opensciedModules.slider1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Over,
        )
    ) {
        basic.showIcon(IconNames.Yes)
    }
    if (
        opensciedModules.slider1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Under,
        )
    ) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
})
