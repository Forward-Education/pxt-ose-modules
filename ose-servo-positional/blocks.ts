namespace opensciedModules {
    /**
     * Set the angle of the servo and immediately run the next block.
     * @param servo the servo client to set the angle of
     * @param angle servo angle
     */
    //% group="Servo - 270° Positional"
    //% block="set $servo to $angle °"
    //% blockId=openscied_servopos_set_angle
    //% angle.min=0 angle.max=270
    //% weight=99
    export function setAngle(
        servo: opensciedBase.OpensciedServoClient,
        angle: number,
    ): void {
        servo.setAngle(angle)
    }

    /**
     * Set the angle of the servo and wait 1 second so the movement finishes before running the next block.
     * @param servo the servo client to set the angle of
     * @param angle servo angle
     */
    //% group="Servo - 270° Positional"
    //% block="set $servo to $angle ° and wait"
    //% blockId=openscied_servopos_set_angle_and_wait
    //% angle.min=0 angle.max=270
    //% weight=98
    export function setAngleAndWait(
        servo: opensciedBase.OpensciedServoClient,
        angle: number,
    ): void {
        servo.setAngleAndWait(angle)
    }

    /**
     * Returns the angle that the servo is set to.
     * @param servo the servo client to get the angle of
     */
    //% group="Servo - 270° Positional"
    //% block="$servo angle (°)"
    //% blockId=openscied_servopos_get_angle
    //% weight=97
    export function getAngle(
        servo: opensciedBase.OpensciedServoClient,
    ): number {
        return servo.getAngle()
    }
}
