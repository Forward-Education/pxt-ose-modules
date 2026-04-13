// Flex Tests
// Type: functional
//  flex(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
basic.forever(function () {
    basic.showNumber(opensciedModules.flex1.flex())
    if (opensciedModules.flex1.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Yes)
    }
    if (opensciedModules.flex1.isPastThreshold(0, opensciedEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
})
