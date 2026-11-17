namespace opensciedModules {
    //% fixedInstances
    export class OpensciedDialClient extends modules.RotaryEncoderClient {
        private _cwAction: () => void
        private _ccwAction: () => void
        private _zeroOffset: number

        constructor(role: string) {
            super(role)

            this._cwAction = () => {}
            this._ccwAction = () => {}
            this._zeroOffset = 0

            // this sets up the functions to run when the dial is turned clockwise or counterclockwise
            // initially the functions are blank, they get assigned by the makecode program through onRotated()
            super.onReadingChangedBy(1, (delta: number) => {
                if (delta < 0) {
                    this._cwAction()
                } else {
                    this._ccwAction()
                }
            })
        }

        /**
         * Run code when the dial is rotated in the chosen direction.
         * @param direction choose between clockwise (CW) and counterclockwise (CCW)
         * @param handler the code to run
         */
        //% group="Dial"
        //% block="on $this rotated $direction"
        //% blockId=openscied_dial_on_rotated
        //% weight=100
        onRotated(
            direction: opensciedEnums.ClockwiseCounterclockwise,
            handler: () => void,
        ): void {
            if (
                direction === opensciedEnums.ClockwiseCounterclockwise.Clockwise
            ) {
                this._cwAction = handler
            } else {
                this._ccwAction = handler
            }
        }

        /**
         * The position of the dial relative to its zero position (where it was when connected, or the last reset).
         * 0 is the starting position. A clockwise click is +1. A counterclockwise click is -1.
         * It does not reset to 0 after 1 full rotation. Instead it continues to increment.
         */
        //% group="Dial"
        //% block="$this position"
        //% blockId=openscied_dial_position
        //% weight=99
        position(): number {
            return super.position() - this._zeroOffset
        }

        /**
         * Set the dial's current position to 0. Position and angle are measured from here.
         */
        //% group="Dial"
        //% block="reset $this position"
        //% blockId=openscied_dial_reset_position
        //% weight=98
        resetPosition(): void {
            this._zeroOffset = super.position()
        }

        /**
         * The angle of the dial (degrees) relative to its zero position.
         * One click is 18 degrees (20 clicks per turn). Like position, it keeps
         * counting past 360 instead of wrapping back to 0.
         */
        //% group="Dial"
        //% block="$this angle (degrees)"
        //% blockId=openscied_dial_angle
        //% weight=97
        angle(): number {
            // The kit dial has 20 clicks per full turn, so each click is 18 degrees.
            return this.position() * 18
        }
    }

    //% fixedInstance whenUsed
    export const dial1 = new OpensciedDialClient("dial1")
    //% fixedInstance whenUsed
    export const dial2 = new OpensciedDialClient("dial2")
    //% fixedInstance whenUsed
    export const dial3 = new OpensciedDialClient("dial3")
    //% fixedInstance whenUsed
    export const dial4 = new OpensciedDialClient("dial4")

    //% fixedInstances
    export class OpensciedDialButtonClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when the chosen event occurs. The hold event fires every 100ms that the button is held.
         * @param event button down, hold, or up
         * @param handler the code to run
         */
        //% group="Dial"
        //% block="on $this $event"
        //% blockId=openscied_dialbutton_on_event
        //% weight=96
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns how long the button has been held in ms.
         */
        //% group="Dial"
        //% block="$this hold duration (ms)"
        //% blockId=openscied_dialbutton_hold_duration
        //% weight=95
        holdDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false.
         */
        //% group="Dial"
        //% block="$this is pressed"
        //% blockId=openscied_dialbutton_is_pressed
        //% weight=94
        isPressed(): boolean {
            return super.pressed()
        }
    }

    //% fixedInstance whenUsed
    export const dialButton1 = new OpensciedDialButtonClient("dialButton1")
    //% fixedInstance whenUsed
    export const dialButton2 = new OpensciedDialButtonClient("dialButton2")
    //% fixedInstance whenUsed
    export const dialButton3 = new OpensciedDialButtonClient("dialButton3")
    //% fixedInstance whenUsed
    export const dialButton4 = new OpensciedDialButtonClient("dialButton4")
}
