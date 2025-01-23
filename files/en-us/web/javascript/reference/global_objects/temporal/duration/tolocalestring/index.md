---
title: Temporal.Duration.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toLocaleString
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.toLocaleString
---

{{JSRef}}{{SeeCompatTable}}

The **`toLocaleString()`** method of {{jsxref("Temporal.Duration")}} instances returns a string with a language-sensitive representation of this duration. In implementations with [`Intl.DurationFormat` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) support, this method delegates to `Intl.DurationFormat`.

Every time `toLocaleString` is called, it has to perform a search in a big database of localization strings, which is potentially inefficient. When the method is called many times with the same arguments, it is better to create a {{jsxref("Intl.DurationFormat")}} object and use its {{jsxref("Intl/DurationFormat/format", "format()")}} method, because a `DurationFormat` object remembers the arguments passed to it and may decide to cache a slice of the database, so future `format` calls can search for localization strings within a more constrained context.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameters

The `locales` and `options` parameters customize the behavior of the function and let applications specify the language whose formatting conventions should be used.

In implementations that support the [`Intl.DurationFormat` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat), these parameters correspond exactly to the [`Intl.DurationFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat) constructor's parameters. Implementations without `Intl.DurationFormat` support return the exact same string as {{jsxref("Temporal/Duration/toString", "toString()")}}, ignoring both parameters.

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. Corresponds to the [`locales`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#locales) parameter of the `Intl.DurationFormat()` constructor.
- `options` {{optional_inline}}
  - : An object adjusting the output format. Corresponds to the [`options`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options) parameter of the `Intl.DurationFormat()` constructor.

See the [`Intl.DurationFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat) for details on these parameters and how to use them.

### Return value

A string representing the given duration according to language-specific conventions.

In implementations with `Intl.DurationFormat`, this is equivalent to `new Intl.DurationFormat(locales, options).format(duration)`.

> [!NOTE]
> Most of the time, the formatting returned by `toLocaleString()` is consistent. However, the output may vary between implementations, even within the same locale — output variations are by design and allowed by the specification. It may also not be what you expect. For example, the string may use non-breaking spaces or be surrounded by bidirectional control characters. You should not compare the results of `toLocaleString()` to hardcoded constants.

## Examples

### Using toLocaleString()

Basic use of this method without specifying a `locale` returns a formatted string in the default locale and with default options.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });

console.log(duration.toLocaleString()); // 1 hr, 30 min, 15 sec
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
