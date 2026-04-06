namespace opensciedModules {
    //% fixedInstances
    export class OpensciedTemperatureClient extends modules.TemperatureClient {
        /**
         * Returns the sensor's temperature reading (°C).
         */
        //% group="BME280"
        //% block="$this °C"
        //% blockId=openscied_temperature_get_temperature
        //% weight=100
        temperature(): number {
            return super.temperature()
        }

        /**
         * Returns true when the temperature (°C) is past the provided threshold in the designated direction.
         * @param threshold the temperature (°C) to check against
         * @param direction over or under the threshold
         */
        //% group="BME280"
        //% block="$this is $direction $threshold °C"
        //% blockId=openscied_temperature_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            const difference = this.temperature() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const temperature = new OpensciedTemperatureClient("temperature")
}
