namespace opensciedModules {
    //% fixedInstances
    export class OpensciedTemperatureClient extends modules.TemperatureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's temperature reading in the chosen unit.
         * @param unit °C or °F, defaults to °C
         */
        //% group="Temperature Probe"
        //% block="$this $unit"
        //% blockId=openscied_temperature_get_temperature
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
         * Returns true when the temperature is over or under the provided threshold. Over is ≥ (at or above) and under is ≤ (at or below).
         * @param threshold the temperature to check against, in the chosen unit
         * @param direction over or under the threshold
         * @param unit °C or °F, defaults to °C
         */
        //% group="Temperature Probe"
        //% block="$this is $direction $threshold $unit"
        //% blockId=openscied_temperature_is_past_threshold
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
    export const temperature1 = new OpensciedTemperatureClient("temperature1")
    //% fixedInstance whenUsed
    export const temperature2 = new OpensciedTemperatureClient("temperature2")
    //% fixedInstance whenUsed
    export const temperature3 = new OpensciedTemperatureClient("temperature3")
    //% fixedInstance whenUsed
    export const temperature4 = new OpensciedTemperatureClient("temperature4")
}
