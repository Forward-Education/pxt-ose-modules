namespace opensciedModules {
    //% fixedInstances
    export class OpensciedPressureClient extends jacdac.SimpleSensorClient {
        constructor(role: string) {
            super(
                jacdac.SRV_TOUCHPRESSURE,
                role,
                jacdac.TouchPressureRegPack.TouchPressure,
            )
        }

        /**
         * The touch pressure of the sensor.
         */
        //% group="Pressure"
        //% block="$this \\%"
        //% blockId=openscied_pressure_get_pressure
        //% weight=98
        pressure(): number {
            return this.reading() * 100
        }

        /**
         * Returns true when the pressure reading is past the provided threshold in the designated direction.
         * @param threshold the pressure value to check against
         * @param direction over or under the threshold
         */
        //% group="Pressure"
        //% block="$this is $direction $threshold"
        //% blockId=openscied_pressure_is_past_threshold
        //% weight=97
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
    export const pressure1 = new OpensciedPressureClient("pressure1")
    //% fixedInstance whenUsed
    export const pressure2 = new OpensciedPressureClient("pressure2")
    //% fixedInstance whenUsed
    export const pressure3 = new OpensciedPressureClient("pressure3")
    //% fixedInstance whenUsed
    export const pressure4 = new OpensciedPressureClient("pressure4")
}
