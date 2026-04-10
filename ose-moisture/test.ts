// Moisture Sensor Tests
// Type: compilation
//  moistureLevel(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
if (
    opensciedModules.moisture1.isPastThreshold(5, opensciedEnums.OverUnder.Over)
) {
    basic.showNumber(opensciedModules.moisture1.moistureLevel())
}
