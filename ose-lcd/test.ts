// LCD Tests
// Type: functional
//  initializeLcd()
//  round(number_: number, decimals: number)
//  printLineString(string_: string, line: number)
//  printQuadrantString(string_: string, quadrant: number)
//  printLineNumber(number_: number, line: number)
//  printQuadrantNumber(number_: number, quadrant: number)
//  clearScreen()
opensciedModules.initializeLcd()
basic.forever(function () {
    opensciedModules.lcd1.printLineString("1234567890123456", 1)
    opensciedModules.lcd1.printLineString("1234567890123456", 2)
    basic.pause(2000)
    opensciedModules.lcd1.printQuadrantString("12345678", 1)
    opensciedModules.lcd1.printQuadrantString("12345678", 2)
    opensciedModules.lcd1.printQuadrantString("12345678", 3)
    opensciedModules.lcd1.printQuadrantString("12345678", 4)
    basic.pause(2000)
    opensciedModules.lcd1.printQuadrantString("3.141", 1)
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 2),
        2,
    )
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 1),
        3,
    )
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 0),
        4,
    )
    basic.pause(500)
    opensciedModules.lcd1.printQuadrantString("3.141", 1)
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 2),
        2,
    )
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 1),
        3,
    )
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 0),
        4,
    )
    basic.pause(500)
    opensciedModules.lcd1.printQuadrantString("3.141", 1)
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 2),
        2,
    )
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 1),
        3,
    )
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 0),
        4,
    )
    basic.pause(500)
    opensciedModules.lcd1.printQuadrantString("3.141", 1)
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 2),
        2,
    )
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 1),
        3,
    )
    opensciedModules.lcd1.printQuadrantNumber(
        opensciedModules.round(3.141, 0),
        4,
    )
    basic.pause(500)
    opensciedModules.lcd1.printLineString("12345678901234567", 1)
    opensciedModules.lcd1.printQuadrantString("123456789", 3)
    basic.pause(2000)
    opensciedModules.lcd1.printLineString("1234567890123456", 5)
    basic.pause(2000)
    opensciedModules.lcd1.printQuadrantString("12345678", 0)
    basic.pause(2000)
    opensciedModules.lcd1.clearScreen()
    basic.pause(2000)
})
