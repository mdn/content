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

### Return value

An array of strings representing supported time zones for the associated `Locale`, where each value is an [IANA time zone canonical name](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database), sorted in alphabetical order. If the locale identifier does not contain a region subtag, the returned value is `undefined`.

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
- [IANA time zone database](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database)
