namespace opensciedModules {
    //% fixedInstances
    export class OpensciedFlexClient extends modules.FlexClient {
        /**
         * Returns the sensor's flex reading (%).
         */
        //% group="Flex"
        //% block="$this %"
        //% blockId=openscied_flex_get_flex
        //% weight=100
        flex(): number {
            return super.bending()
        }

        /**
         * Returns true when the flex reading (%) is past the provided threshold in the designated direction.
         * @param threshold the flex reading (%) to check against
         * @param direction over or under the threshold
         */
        //% group="Flex"
        //% block="$this is $direction $threshold %"
        //% blockId=openscied_flex_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            const difference = this.flex() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const flex1 = new OpensciedFlexClient("flex1")
    //% fixedInstance whenUsed
    export const flex2 = new OpensciedFlexClient("flex2")
    //% fixedInstance whenUsed
    export const flex3 = new OpensciedFlexClient("flex3")
    //% fixedInstance whenUsed
    export const flex4 = new OpensciedFlexClient("flex4")
}
