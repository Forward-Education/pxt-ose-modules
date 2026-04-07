// Positional Servo Tests
// Type: functional
// setAngleAndWait() doesn't work in the simulator, but does with physical hardware.
// The "ADD SIMULATORS" button will add a 180 servo instead of a 270
//  setAngle(servo: opensciedBase.OpensciedServoClient, angle: number): void
//  getAngle(servo: opensciedBase.OpensciedServoClient): number
basic.forever(() => {
    console.log("test start")
    basic.pause(3000)
    opensciedModules.setAngle(opensciedBase.leftServo, 90)
    console.log(opensciedModules.getAngle(opensciedBase.leftServo))
    basic.pause(3000)
    opensciedModules.setAngle(opensciedBase.leftServo, 45)
    console.log(opensciedModules.getAngle(opensciedBase.leftServo))
    basic.pause(3000)
    console.log("test end")
})
