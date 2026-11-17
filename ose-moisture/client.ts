namespace opensciedModules {
    //% fixedInstances
    export class OpensciedSoilMoistureClient
        extends modules.SoilMoistureClient
    {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's moisture level reading (%).
         */
        //% group="Moisture"
        //% block="$this moisture level (\\%)"
        //% blockId=openscied_moisture_get_moisture_level
        //% weight=100
        moistureLevel(): number {
            return super.moisture()
        }

        /**
         * Returns true when the moisture level (%) is over or under the provided threshold. Over is ≥ (at or above) and under is ≤ (at or below).
         * @param threshold the moisture level (%) to check against
         * @param direction over or under the threshold
         */
        //% group="Moisture"
        //% block="$this is $direction $threshold \\%"
        //% blockId=openscied_moisture_is_past_threshold
        //% threshold.min=0 threshold.max=100 threshold.defl=5
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: opensciedEnums.OverUnder,
        ): boolean {
            return opensciedModules.compareToThreshold(this.moisture(), threshold, direction)
        }
    }

    //% fixedInstance whenUsed
    export const moisture1 = new OpensciedSoilMoistureClient("moisture1")
    //% fixedInstance whenUsed
    export const moisture2 = new OpensciedSoilMoistureClient("moisture2")
    //% fixedInstance whenUsed
    export const moisture3 = new OpensciedSoilMoistureClient("moisture3")
    //% fixedInstance whenUsed
    export const moisture4 = new OpensciedSoilMoistureClient("moisture4")
}
