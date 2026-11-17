namespace opensciedModules {
    //% fixedInstances
    export class OpensciedIlluminanceClient extends modules.IlluminanceClient {
        /**
         * Returns the sensor's illuminance reading (lux).
         */
        //% group="Light"
        //% block="$this lux"
        //% blockId=openscied_illuminance_get_illuminance
        //% weight=100
        illuminance(): number {
            return super.illuminance()
        }

        /**
         * Returns true when the illuminance (lux) is over or under the provided threshold. Over is ≥ (at or above) and under is ≤ (at or below).
         * @param threshold the illuminance (lux) to check against
         * @param direction over or under the threshold
         */
        //% group="Light"
        //% block="$this is $direction $threshold lux"
        //% blockId=openscied_illuminance_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            return opensciedModules.compareToThreshold(this.illuminance(), threshold, direction)
        }
    }

    //% fixedInstance whenUsed
    export const light1 = new OpensciedIlluminanceClient("light1")
    //% fixedInstance whenUsed
    export const light2 = new OpensciedIlluminanceClient("light2")
    //% fixedInstance whenUsed
    export const light3 = new OpensciedIlluminanceClient("light3")
    //% fixedInstance whenUsed
    export const light4 = new OpensciedIlluminanceClient("light4")
}
