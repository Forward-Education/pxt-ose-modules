// eCO2 Tests
// Type: compilation
//  eco2(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
if (
    opensciedModules.eCO2.isPastThreshold(
        opensciedModules.eCO2.eco2(),
        opensciedEnums.OverUnder.Over,
    )
) {
}

// tVOC Tests
// Type: compilation
//  tvoc(): number
//  isPastThreshold(threshold: number, direction: opensciedEnums.OverUnder): boolean
if (
    opensciedModules.tVOC.isPastThreshold(
        opensciedModules.tVOC.tvoc(),
        opensciedEnums.OverUnder.Over,
    )
) {
}
