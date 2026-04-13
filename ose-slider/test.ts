// Slider Tests
// Type: functional
//  position(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
console.log("position: " + opensciedModules.slider1.position())
input.onButtonPressed(Button.A, function () {
    if (
        opensciedModules.slider1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Over,
        )
    ) {
        console.log(opensciedModules.slider1.position() + " is over 25%")
    }
    if (
        opensciedModules.slider1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Under,
        )
    ) {
        console.log(opensciedModules.slider1.position() + " is under 25%")
    }
    basic.pause(1000)
})
