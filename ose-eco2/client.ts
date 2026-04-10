namespace opensciedModules {
    //% fixedInstances
    export class OpensciedEco2Client extends modules.ECO2Client {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's estimated CO2 (eCO2) reading (ppm).
         */
        //% group="eCO2"
        //% block="$this ppm"
        //% blockId=openscied_eco2_get_eco2
        //% weight=100
        eco2(): number {
            return super.eCO2()
        }

        /**
         * Returns true when the eCO2 (ppm) is past the provided threshold in the designated direction.
         * @param threshold the eCO2 (ppm) to check against
         * @param direction over or under the threshold
         */
        //% group="eCO2"
        //% block="$this is $direction $threshold ppm"
        //% blockId=openscied_eco2_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            const difference = this.eco2() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const eCO2 = new OpensciedEco2Client("eCO2")

    //% fixedInstances
    export class OpensciedTvocClient extends modules.TvocClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's total VOC (tVOC) reading.
         */
        //% group="eCO2"
        //% block="$this reading"
        //% blockId=openscied_tvoc_get_tvoc
        //% weight=98
        tvoc(): number {
            return super.tVOC()
        }

        /**
         * Returns true when the tVOC reading is past the provided threshold in the designated direction.
         * @param threshold the tVOC value to check against
         * @param direction over or under the threshold
         */
        //% group="eCO2"
        //% block="$this is $direction $threshold"
        //% blockId=openscied_tvoc_is_past_threshold
        //% weight=97
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            const difference = this.tvoc() - threshold > 0
            const isPastThreshold =
                (direction === opensciedEnums.OverUnder.Over && difference) ||
                (direction === opensciedEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const tVOC = new OpensciedTvocClient("tVOC")
}
