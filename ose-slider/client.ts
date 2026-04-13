namespace opensciedModules {
    //% fixedInstances
    export class OpensciedSliderClient extends modules.PotentiometerClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's slider position (\\%).
         */
        //% group="Slider"
        //% block="$this \\%"
        //% blockId=openscied_slider_get_position
        //% weight=100
        position(): number {
            return super.position()
        }

        /**
         * Returns true when the slider position (\\%) is past the provided threshold in the designated direction.
         * @param threshold the slider position (\\%) to check against
         * @param direction over or under the threshold
         */
        //% group="Slider"
        //% block="$this is $direction $threshold \\%"
        //% blockId=openscied_slider_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            const difference = this.position() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const slider1 = new OpensciedSliderClient("slider1")
    //% fixedInstance whenUsed
    export const slider2 = new OpensciedSliderClient("slider2")
    //% fixedInstance whenUsed
    export const slider3 = new OpensciedSliderClient("slider3")
    //% fixedInstance whenUsed
    export const slider4 = new OpensciedSliderClient("slider4")
}
