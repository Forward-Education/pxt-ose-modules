# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), but without change categorization.

## [1.1.0]

- **Changed (all threshold blocks):** "over" now includes the threshold value (>=), matching "under" (<=). Previously a reading exactly at the threshold counted only as under.
- **Breaking (ose-weight):** the weight block now returns grams, matching its label. It previously returned kilograms. Programs that multiply the reading by 1000 to get grams must remove that multiplication, or they will read 1000x too high.
- **New (ose-temperature, ose-bme280):** the temperature reading and threshold blocks have a °C / °F dropdown, defaulting to °C. Existing block programs keep working unchanged. In code, the block is now `readTemperature(unit?)`; `temperature()` still returns °C but no longer has a block.
- **New (ose-bme280):** "bmeHumidity absolute humidity (g/m³)" reading block, calculated from BME280 relative humidity and temperature (Magnus formula).
- **New (ose-solar):** "set solar1 sampling to fast / normal" block (fast is 20 ms, normal is 100 ms). Readings stream every 100 ms by default; fast improves light gate timing.
- **Changed (ose-pump):** "run pump for X ms" now waits until the pump stops before the program continues. It previously ran in the background, so overlapping calls (e.g. in a fast loop) let an earlier run switch the pump off part-way through a later one. Programs that relied on code running while the pump ran should use "turn pump on", pause, then "turn pump off".
- **New (ose-dial):** "reset dial1 position" block and "dial1 angle (°)" reading. Angle is 18 degrees per click (20 clicks per turn). Position now counts from the last reset, so programs no longer need their own zero offset.
- **Fix (ose-weight):** the "is over/under threshold (g)" block now compares in grams. It previously compared a kilogram reading to a gram threshold, so it was off by 1000x.

## [1.0.1] - 06/16/2026

- **Fix (ose-flex):** the % sign in the flex reading and threshold blocks now shows correctly.

## [1.0.0] - 06/16/2026

- First version

## [0.1.0] - 06/08/2026

- Pre-release of the OpenSciEd modules.

[Unreleased]: https://github.com/Forward-Education/pxt-openscied-modules/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/Forward-Education/pxt-openscied-modules/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Forward-Education/pxt-openscied-modules/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/Forward-Education/pxt-openscied-modules/releases/tag/v0.1.0
