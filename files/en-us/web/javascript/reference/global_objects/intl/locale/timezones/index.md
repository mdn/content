---
title: Intl.Locale.prototype.timeZones
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/timeZones
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
  - timeZones
  - time zone
browser-compat: javascript.builtins.Intl.Locale.timeZones
---
{{JSRef}}

The **`Intl.Locale.prototype.timeZones`** property is an accessor property which returns an array of supported time zones for a chosen `Locale`.

## Description

Returns an array with supported time zones for the associated `Locale`, returned time zones
represents an [IANA time zone](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database).

> **Note:** If the Unicode Language Identifier does not contain the `-` for the Unicode region subtag sequence, the returned value is `undefined`

## Examples

### Obtaining supported time zones

List supported time zones for a given `Locale`.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.timeZones); // logs ["Africa/Cairo"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.timeZones); // logs ["Asia/Tokyo"]
```

```js
const ar = new Intl.Locale("ar");
console.log(ar.timeZones); // logs undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [IANA time zone database](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database)
