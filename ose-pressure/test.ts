// Pressure Tests
// Type: compilation
//  pressure(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
if (
    opensciedModules.pressure1.isPastThreshold(
        opensciedModules.pressure1.pressure(),
        opensciedEnums.OverUnder.Over,
    )
) {
}
