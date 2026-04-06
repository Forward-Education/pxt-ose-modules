// BME280 Tests
// Type: compilation
//  pressure(): number
//  humidity(): number
//  temperature(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
basic.forever(function () {
    if (opensciedModules.airPressure.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
        basic.showNumber(opensciedModules.airPressure.pressure())
    }
    if (opensciedModules.humidity.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
        basic.showNumber(opensciedModules.humidity.humidity())
    }
    if (opensciedModules.temperature.isPastThreshold(0, opensciedEnums.OverUnder.Over)) {
        basic.showNumber(opensciedModules.temperature.temperature())
    }
})
