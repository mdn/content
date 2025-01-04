---
title: Intl.Locale.prototype.getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getHourCycles
---

{{JSRef}}

The **`getHourCycles()`** method of {{jsxref("Intl.Locale")}} instances returns a list of one or more unique hour cycle identifiers for this locale.

> [!NOTE]
> In some versions of some browsers, this method was implemented as an accessor property called `hourCycles`. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of `locale.hourCycles === locale.hourCycles` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getHourCycles()
```

### Parameters

None.

### Return value

An array of strings representing all hour cycle types commonly used for the `Locale`, sorted in descending preference. If the `Locale` already has an [`hourCycle`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle), then the returned array contains that single value.

Below is a list of supported hour cycle types.

### Supported hour cycle types

- `h12`
  - : Hour system using 1–12; corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am. As used, for example, in the United States.
- `h23`
  - : Hour system using 0–23; corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00.
- `h11`
  - : Hour system using 0–11; corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am. Mostly used in Japan.
- `h24`
  - : Hour system using 1–24; corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00. Not used anywhere.

## Examples

### Obtaining supported hour cycles

If the `Locale` object doesn't have a `hourCycle` already, `getHourCycles()` lists all commonly-used hour cycle identifiers for the given `Locale`. For examples of explicitly setting a `hourCycle`, see [`hourCycle` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getHourCycles()); // ["h12"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getHourCycles()); // ["h23"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.hourCycle`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in the Unicode locale data markup language spec
