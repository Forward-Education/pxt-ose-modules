namespace opensciedModules {
    //% fixedInstances
    export class OpensciedBmeHumidityClient extends modules.HumidityClient {
        /**
         * Returns the sensor's humidity reading (%).
         */
        //% group="BME280"
        //% block="$this \\%"
        //% blockId=openscied_bmehumidity_humidity
        //% weight=100
        humidity(): number {
            return super.humidity()
        }

        /**
         * Returns the absolute humidity (g/m³), calculated from this sensor's
         * relative humidity and the BME280 temperature (Magnus formula).
         */
        //% group="BME280"
        //% block="$this absolute humidity (g/m³)"
        //% blockId=openscied_bmehumidity_absolute_humidity
        //% weight=98
        absoluteHumidity(): number {
            const t = bmeTemperature.temperature()
            const rh = this.humidity()
            return (
                (6.112 * Math.exp((17.67 * t) / (t + 243.5)) * rh * 2.1674) /
                (273.15 + t)
            )
        }

        /**
         * Returns true when the humidity (%) is past the provided threshold in the designated direction.
         * @param threshold the humidity (%) to check against
         * @param direction over or under the threshold
         */
        //% group="BME280"
        //% block="$this is $direction $threshold \\%"
        //% blockId=openscied_bmehumidity_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            const difference = this.humidity() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const bmeHumidity = new OpensciedBmeHumidityClient("bmeHumidity")
}
