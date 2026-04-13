// Weight Tests
// Type: functional
//  weight(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
console.log("weight: " + opensciedModules.weight1.weight())
input.onButtonPressed(Button.A, function () {
    if (
        opensciedModules.weight1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Over,
        )
    ) {
        console.log(opensciedModules.weight1.weight() + " is over 25g")
    }
    if (
        opensciedModules.weight1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Under,
        )
    ) {
        console.log(opensciedModules.weight1.weight() + " is under 25g")
    }
    basic.pause(1000)
})
