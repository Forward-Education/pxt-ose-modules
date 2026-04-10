// Solar Sensor Tests
// Type: compilation
//  lightLevel(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
if (opensciedModules.solar1.isPastThreshold(5, opensciedEnums.OverUnder.Over)) {
    basic.showNumber(opensciedModules.solar1.lightLevel())
}
