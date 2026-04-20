// Weight Tests
// Type: functional
//  weight(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
//  tare(): void
//  calibrate(calibrationWeight: number): void
input.onButtonPressed(Button.A, function () {
    basic.showNumber((opensciedModules.weight1.weight()))
    basic.pause(1000)
    if (
        opensciedModules.weight1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Over,
        )
    ) {
        basic.showIcon(IconNames.Yes)
    }
    if (
        opensciedModules.weight1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Under,
        )
    ) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    opensciedModules.weight1.calibrate(10)
})
input.onButtonPressed(Button.B, function () {
    opensciedModules.weight1.tare()
})
