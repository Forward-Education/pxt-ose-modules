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
         * Returns true when the illuminance (lux) is past the provided threshold in the designated direction.
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
            const difference = this.illuminance() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
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
