// eCO2 / tVOC Tests
// Type: functional
//  eco2(): number
//  tvoc(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
basic.forever(function () {
    basic.showString('C:' + Math.round(opensciedModules.eCO2.eco2()))
    if (opensciedModules.eCO2.isPastThreshold(1000, opensciedEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Yes)
    }
    if (opensciedModules.eCO2.isPastThreshold(1000, opensciedEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
    basic.showString('V:' + Math.round(opensciedModules.tVOC.tvoc()))
    if (opensciedModules.tVOC.isPastThreshold(600, opensciedEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Yes)
    }
    if (opensciedModules.tVOC.isPastThreshold(600, opensciedEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
})

// eCO2 Tests
// Type: compilation
//  eco2(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
// if (
//     opensciedModules.eCO2.isPastThreshold(
//         opensciedModules.eCO2.eco2(),
//         opensciedEnums.OverUnder.Over,
//     )
// ) {
// }

// tVOC Tests
// Type: compilation
//  tvoc(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
// if (
//     opensciedModules.tVOC.isPastThreshold(
//         opensciedModules.tVOC.tvoc(),
//         opensciedEnums.OverUnder.Over,
//     )
// ) {
// }
