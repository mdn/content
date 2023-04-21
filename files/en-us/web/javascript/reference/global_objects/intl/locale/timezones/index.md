---
title: Intl.Locale.prototype.timeZones
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/timeZones
page-type: javascript-instance-accessor-property
status:
  - deprecated
  - non-standard
browser-compat: javascript.builtins.Intl.Locale.timeZones
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_header}}

The **`timeZones`** accessor property of {{jsxref("Intl.Locale")}} instances returns a list of supported time zones for this locale.

## Description

Returns an array with supported time zones for the associated `Locale`, where each value is an [IANA time zone canonical name](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database), sorted in alphabetical order. If the locale identifier does not contain a region subtag, the returned value is `undefined`.

## Examples

### Obtaining supported time zones

List supported time zones for a given `Locale`.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.timeZones); // ["Africa/Cairo"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.timeZones); // ["Asia/Tokyo"]
```

```js
const ar = new Intl.Locale("ar");
console.log(ar.timeZones); // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [IANA time zone database](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database)
