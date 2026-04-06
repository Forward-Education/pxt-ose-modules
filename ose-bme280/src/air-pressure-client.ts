namespace opensciedModules {
    //% fixedInstances
    export class OpensciedAirPressureClient extends modules.AirPressureClient {
        /**
         * Returns the sensor's air pressure reading (hPa).
         */
        //% group="BME280"
        //% block="$this hPa"
        //% blockId=openscied_airPressure_get_airPressure
        //% weight=100
        pressure(): number {
            return super.pressure()
        }

        /**
         * Returns true when the air pressure (hPa) is past the provided threshold in the designated direction.
         * @param threshold the air pressure (hPa) to check against
         * @param direction over or under the threshold
         */
        //% group="BME280"
        //% block="$this is $direction $threshold hPa"
        //% blockId=openscied_airPressure_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            const difference = this.pressure() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const airPressure = new OpensciedAirPressureClient("airPressure")
}
