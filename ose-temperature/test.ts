// Temperature Sensor Tests
// Type: functional
//  temperature(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
console.log("temperature: " + opensciedModules.temperature1.temperature())
input.onButtonPressed(Button.A, function () {
    if (
        opensciedModules.temperature1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Over,
        )
    ) {
        console.log(
            opensciedModules.temperature1.temperature() + " is over 25°C",
        )
    }
    if (
        opensciedModules.temperature1.isPastThreshold(
            25,
            opensciedEnums.OverUnder.Under,
        )
    ) {
        console.log(
            opensciedModules.temperature1.temperature() + " is under 25°C",
        )
    }
    basic.pause(1000)
})
// Unit dropdown: °F reading and threshold
console.log(
    "temperature °F: " +
        opensciedModules.temperature1.readTemperature(
            opensciedEnums.TemperatureUnit.Fahrenheit,
        ),
)
input.onButtonPressed(Button.B, function () {
    if (
        opensciedModules.temperature1.isPastThreshold(
            77,
            opensciedEnums.OverUnder.Over,
            opensciedEnums.TemperatureUnit.Fahrenheit,
        )
    ) {
        console.log("over 77°F")
    }
})
