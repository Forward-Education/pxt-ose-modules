namespace opensciedModules {
    //% fixedInstances
    export class OpensciedWeightClient extends modules.WeightScaleClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's weight reading (g).
         */
        //% group="Weight"
        //% block="$this g"
        //% blockId=openscied_weight_get_weight
        //% weight=100
        weight(): number {
            return super.weight()
        }

        /**
         * Returns true when the weight (g) is past the provided threshold in the designated direction.
         * @param threshold the weight (g) to check against
         * @param direction over or under the threshold
         */
        //% group="Weight"
        //% block="$this is $direction $threshold \\g"
        //% blockId=openscied_weight_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            const difference = this.weight() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const weight1 = new OpensciedWeightClient("weight1")
    //% fixedInstance whenUsed
    export const weight2 = new OpensciedWeightClient("weight2")
    //% fixedInstance whenUsed
    export const weight3 = new OpensciedWeightClient("weight3")
    //% fixedInstance whenUsed
    export const weight4 = new OpensciedWeightClient("weight4")
}
