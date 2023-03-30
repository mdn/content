---
title: Intl.Locale.prototype.hourCycles
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycles
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.hourCycles
---

{{JSRef}}

The **`Intl.Locale.prototype.hourCycles`** accessor property returns a list of one or more unique hour cycle identifiers for the `Locale`.

## Description

There are two main types of time keeping conventions (clocks) used around the world: the 12 hour clock and the 24 hour clock. The `hourCycles` property returns an array of all hour cycle types commonly used for the `Locale`, sorted in descending preference. If the `Locale` already has an [`hourCycle`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle), then the returned array contains that single value.

Below is a list of supported hour cycle types.

### Supported hour cycle types

| Hour cycle type | Description                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| `h12`           | Hour system using 1–12; corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am. |
| `h23`           | Hour system using 0–23; corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00.     |
| `h11`           | Hour system using 0–11; corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am.  |
| `h24`           | Hour system using 1–24; corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00.     |

## Examples

### Obtaining supported hour cycles

If the `Locale` object doesn't have a `hourCycle` already, the `hourCycles` property lists all commonly-used collation types for the given `Locale`. For examples of explicitly setting a `hourCycle`, see [`hourCycle` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.hourCycles); // ["h12"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.hourCycles); // ["h23"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.hourCycle`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
- [Unicode Hour Cycle extension key spec](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
