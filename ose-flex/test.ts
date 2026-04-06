// Light Tests
// Type: functional
//  illuminance(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
basic.forever(function () {
    basic.showNumber(opensciedModules.light1.illuminance())
    if (opensciedModules.light1.isPastThreshold(200, opensciedEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Yes)
    }
    if (opensciedModules.light1.isPastThreshold(200, opensciedEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
})
