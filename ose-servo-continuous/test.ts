// Continuous Servo Tests
// Type: compilation
//  setSpeed(servo: opensciedBase.OpensciedServoClient, speed: number): void
//  getSpeed(servo: opensciedBase.OpensciedServoClient): number
//  setupDriving(left: opensciedBase.OpensciedServoClient, right: opensciedBase.OpensciedServoClient)
//  function drive(leftSpeed: number, rightSpeed: number, duration: number)
opensciedModules.setSpeed(opensciedBase.leftServo, 0)
basic.showNumber(opensciedModules.getSpeed(opensciedBase.leftServo))
opensciedModules.setupDriving(opensciedBase.leftServo, opensciedBase.leftServo)
opensciedModules.drive(50, 50, 2)
