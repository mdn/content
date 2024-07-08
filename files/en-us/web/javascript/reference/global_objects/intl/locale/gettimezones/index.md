---
title: Intl.Locale.prototype.getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getTimeZones
---

{{JSRef}}

The **`getTimeZones()`** method of {{jsxref("Intl.Locale")}} instances returns a list of supported time zones for this locale.

> **Note:** In some versions of some browsers, this method was implemented as an accessor property called `timeZones`. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of `locale.timeZones === locale.timeZones` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getTimeZones()
```

### Parameters

None.

### Return value

An array of strings representing supported time zones for the associated `Locale`, where each value is an [IANA time zone canonical name](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database), sorted in alphabetical order. If the locale identifier does not contain a region subtag, the returned value is `undefined`.

Note that while the IANA database changes from time to time, [the Unicode CLDR database (which browsers use) keeps old time zone names for stability purposes](https://unicode.org/reports/tr35/#Time_Zone_Identifiers). For example, here are a few notable name changes:

| Current IANA name                | CDLR database          |
| -------------------------------- | ---------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires` |
| `Asia/Kolkata`                   | `Asia/Calcutta`        |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`          |
| `Europe/Kyiv`                    | `Europe/Kiev`          |

Some browsers (Firefox) override these legacy names, while others don't (Safari and Chrome). For more information, check the [CLDR database](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json). (IANA names are marked with `"_iana"`, if different.) There is [an effort in TC39 to properly handle these canonical identifiers](https://github.com/tc39/proposal-canonical-tz), which also contains links to related CLDR issues.

## Examples

### Obtaining supported time zones

List supported time zones for a given `Locale`.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getTimeZones()); // ["Africa/Cairo"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getTimeZones()); // ["Asia/Tokyo"]
```

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTimeZones()); // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [IANA time zone database](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) on Wikipedia
