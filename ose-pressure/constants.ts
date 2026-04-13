namespace jacdac {
    // Service Touch Pressure constants
    export const SRV_TOUCHPRESSURE = 0x1f222246

    export const enum TouchPressureReg {
        /**
         * Read-only ratio u0.16 (uint16_t). The touch pressure of the sensor
         *
         * ```
         * const [position] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        TouchPressure = 0x101,
    }

    export namespace TouchPressureRegPack {
        /**
         * Pack format for 'position' data.
         */
        export const TouchPressure = "u0.16"
    }
}
