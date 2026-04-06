namespace opensciedModules {
    //% fixedInstances
    export class OpensciedHumidityClient extends modules.HumidityClient {
        /**
         * Returns the sensor's humidity reading (%).
         */
        //% group="BME280"
        //% block="$this %"
        //% blockId=openscied_humidity_get_humidity
        //% weight=100
        humidity(): number {
            return super.humidity()
        }

        /**
         * Returns true when the humidity (%) is past the provided threshold in the designated direction.
         * @param threshold the humidity (%) to check against
         * @param direction over or under the threshold
         */
        //% group="BME280"
        //% block="$this is $direction $threshold %"
        //% blockId=openscied_humidity_is_past_threshold
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
    export const humidity = new OpensciedHumidityClient("humidity")
}
