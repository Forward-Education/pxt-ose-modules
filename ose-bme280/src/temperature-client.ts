namespace opensciedModules {
    //% fixedInstances
    export class OpensciedBmeTemperatureClient
        extends modules.TemperatureClient
    {
        /**
         * Returns the sensor's temperature reading in the chosen unit.
         * @param unit °C or °F, defaults to °C
         */
        //% group="BME280"
        //% block="$this $unit"
        //% blockId=openscied_bmetemperature_temperature
        //% weight=100
        readTemperature(
            unit: opensciedEnums.TemperatureUnit = opensciedEnums.TemperatureUnit
                .Celsius,
        ): number {
            const celsius = super.temperature()
            return unit === opensciedEnums.TemperatureUnit.Fahrenheit
                ? celsius * 1.8 + 32
                : celsius
        }

        /**
         * Returns true when the temperature is past the provided threshold in the designated direction.
         * @param threshold the temperature to check against, in the chosen unit
         * @param direction over or under the threshold
         * @param unit °C or °F, defaults to °C
         */
        //% group="BME280"
        //% block="$this is $direction $threshold $unit"
        //% blockId=openscied_bmetemperature_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
            unit: opensciedEnums.TemperatureUnit = opensciedEnums.TemperatureUnit
                .Celsius,
        ): boolean {
            return opensciedModules.compareToThreshold(this.readTemperature(unit), threshold, direction)
        }
    }

    //% fixedInstance whenUsed
    export const bmeTemperature = new OpensciedBmeTemperatureClient(
        "bmeTemperature",
    )
}
