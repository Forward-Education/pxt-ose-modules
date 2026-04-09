// Dial Tests
// Type: functional
//  position()
//  onRotated(direction: DialDirection, handler: () => void): void
opensciedModules.dial1.onRotated(
    fwdEnums.ClockwiseCounterclockwise.Clockwise,
    () =>
        console.log("turned -> position " + opensciedModules.dial1.position()),
)
opensciedModules.dial1.onRotated(
    fwdEnums.ClockwiseCounterclockwise.Counterclockwise,
    () =>
        console.log("turned <- position " + +opensciedModules.dial1.position()),
)

// Dial Button tests
// Type: functional
//  onEvent(event: jacdac.ButtonEvent, handler: () => void)
//  holdDuration(): number
//  isPressed(): boolean
console.log("Button pressed? " + opensciedModules.dialButton1.isPressed())
opensciedModules.dialButton1.onEvent(jacdac.ButtonEvent.Down, () =>
    console.log("dialdown"),
)
opensciedModules.dialButton1.onEvent(jacdac.ButtonEvent.Up, () =>
    console.log("dialup"),
)
opensciedModules.dialButton1.onEvent(jacdac.ButtonEvent.Hold, () =>
    console.log(
        "Hold Duration: " + opensciedModules.dialButton1.holdDuration(),
    ),
)
