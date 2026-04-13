// BME280 Tests
// Type: functional
//  pressure(): number
//  humidity(): number
//  temperature(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
basic.forever(function () {
    basic.showString('P:' + Math.round(opensciedModules.airPressure.pressure()))
    if(opensciedModules.airPressure.isPastThreshold(1000, opensciedEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Yes)
    }
    if (opensciedModules.airPressure.isPastThreshold(1000, opensciedEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
    basic.showString('H:' + Math.round(opensciedModules.humidity.humidity()))
    if (opensciedModules.humidity.isPastThreshold(45, opensciedEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Yes)
    }
    if (opensciedModules.humidity.isPastThreshold(45, opensciedEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
    basic.showString('T:' + Math.round(opensciedModules.temperature.temperature()))
    if (opensciedModules.temperature.isPastThreshold(22, opensciedEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Yes)
    }
    if (opensciedModules.temperature.isPastThreshold(22, opensciedEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
})

// BME280 Tests
// Type: compilation
//  pressure(): number
//  humidity(): number
//  temperature(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
// basic.forever(function () {
//     if (opensciedModules.airPressure.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
//         basic.showNumber(opensciedModules.airPressure.pressure())
//     }
//     if (opensciedModules.humidity.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
//         basic.showNumber(opensciedModules.humidity.humidity())
//     }
//     if (opensciedModules.temperature.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
//         basic.showNumber(opensciedModules.temperature.temperature())
//     }
// })
