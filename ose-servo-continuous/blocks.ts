namespace opensciedModules {
    /**
     * Set the servo speed to between 100% and -100%. Negative speeds are the reverse direction.
     * @param servo the servo client to set the speed of
     * @param speed the speed to set the servo to (%)
     */
    //% group="Servo - Continuous"
    //% block="set $servo to $speed \\%"
    //% blockId=openscied_servocon_set_speed
    //% speed.min=-100 speed.max=100
    //% weight=99
    export function setSpeed(
        servo: opensciedBase.OpensciedServoClient,
        speed: number,
    ): void {
        servo.setSpeed(speed)
    }

    /**
     * Returns the speed that the servo is set to (%).
     * @param servo the servo client to get the speed of
     */
    //% group="Servo - Continuous"
    //% block="$servo speed (\\%)"
    //% blockId=openscied_servocon_get_speed
    //% weight=98
    export function getSpeed(
        servo: opensciedBase.OpensciedServoClient,
    ): number {
        return servo.getSpeed()
    }
}
