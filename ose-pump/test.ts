// Pump Tests
// Type: functional
//  isOn(): boolean
//  setOn(on: boolean): void
//  timedRun(duration: number): void
//  setOn() is used in timedRun, so it is covered by timedRun() test
console.log("Pump on? " + opensciedModules.pump.isOn())
console.log("Run pump for 3s.")
opensciedModules.pump.timedRun(3)
basic.pause(1000)
console.log("1s... Pump on? " + opensciedModules.pump.isOn())
basic.pause(1000)
console.log("2s... Pump on? " + opensciedModules.pump.isOn())
basic.pause(1000)
console.log("3s... Pump on? " + opensciedModules.pump.isOn())
