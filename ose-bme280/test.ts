// BME280 Tests
// Type: functional
//  pressure(): number
//  humidity(): number
//  temperature(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
basic.forever(function () {
    basic.showString(
        "P:" + Math.round(opensciedModules.bmeAirPressure.pressure()),
    )
    if (
        opensciedModules.bmeAirPressure.isPastThreshold(
            1000,
            opensciedEnums.OverUnder.Over,
        )
    ) {
        basic.showIcon(IconNames.Yes)
    }
    if (
        opensciedModules.bmeAirPressure.isPastThreshold(
            1000,
            opensciedEnums.OverUnder.Under,
        )
    ) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
    basic.showString("H:" + Math.round(opensciedModules.bmeHumidity.humidity()))
    if (
        opensciedModules.bmeHumidity.isPastThreshold(
            45,
            opensciedEnums.OverUnder.Over,
        )
    ) {
        basic.showIcon(IconNames.Yes)
    }
    if (
        opensciedModules.bmeHumidity.isPastThreshold(
            45,
            opensciedEnums.OverUnder.Under,
        )
    ) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
    basic.showString(
        "T:" + Math.round(opensciedModules.bmeTemperature.temperature()),
    )
    if (
        opensciedModules.bmeTemperature.isPastThreshold(
            22,
            opensciedEnums.OverUnder.Over,
        )
    ) {
        basic.showIcon(IconNames.Yes)
    }
    if (
        opensciedModules.bmeTemperature.isPastThreshold(
            22,
            opensciedEnums.OverUnder.Under,
        )
    ) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
})

// BME280 Tests
// Type: compilation
//  pressure(): number
//  bmeHumidity(): number
//  bmeTemperature(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
// basic.forever(function () {
//     if (opensciedModules.bmeAirPressure.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
//         basic.showNumber(opensciedModules.bmeAirPressure.pressure())
//     }
//     if (opensciedModules.bmeHumidity.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
//         basic.showNumber(opensciedModules.bmeHumidity.humidity())
//     }
//     if (opensciedModules.bmeTemperature.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
//         basic.showNumber(opensciedModules.bmeTemperature.temperature())
//     }
// })
